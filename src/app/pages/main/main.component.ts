import { CommonModule } from '@angular/common';
import { Component, Inject, isDevMode } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputNumberModule } from 'primeng/inputnumber';

import { environment } from '../../../../environments/environment';
import { COLLECTABLE_SHIP_METHODS, SERVICE_NAMES, SHIP_METHOD_NAMES } from '../../constants';
import type { ServiceName, ShipMethodName } from '../../models';
import { CalculatorService } from '../../services/calculator.service';
import { sha256Hash } from '../../utilities/hash';
import { objectToOptionsArray } from '../../utilities/object-to-options-array';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    DropdownModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputNumberModule,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  visible = false;

  // --- 選択肢 ---

  /** フリマサービス 一覧 */
  services = objectToOptionsArray(SERVICE_NAMES);
  /** 配送方法 */
  shipMethods: ReturnType<typeof this.loadShipMethods>;
  private loadShipMethods() {
    return objectToOptionsArray(SHIP_METHOD_NAMES).map((method) => ({
      ...method,
      shipCost: this.calculator.getShipCost(this.service, method.value),
    }));
  }
  /** 集荷依頼 */
  collections = [
    { value: false, label: 'なし' },
    { value: true, label: 'あり' },
  ];

  // --- 入力 ---

  /** 金額 */
  get amount() {
    return this._amount;
  }
  set amount(value) {
    this._amount = Math.round(value);
    this.calc();
  }
  private _amount = 300;

  /** サービス */
  get service(): ServiceName {
    return this._service;
  }
  set service(value: ServiceName) {
    this._service = value;
    this.shipMethods = this.loadShipMethods();
    this.calc();
  }
  private _service: ServiceName = 'mercari';

  /** 配送方法 */
  get shipMethod(): ShipMethodName {
    return this._shipMethod;
  }
  set shipMethod(value: ShipMethodName) {
    this._shipMethod = value;
    if (!COLLECTABLE_SHIP_METHODS[value]) {
      this._collection = false;
    }
    this.calc();
  }
  private _shipMethod: ShipMethodName = 'jp_yu_packet_post_mini';

  /** 集荷依頼 */
  get collection() {
    return this._collection;
  }
  set collection(value) {
    this._collection = value;
    this.calc();
  }
  private _collection = false;

  /** 集荷依頼可能か */
  isCollectable(): boolean {
    return !!COLLECTABLE_SHIP_METHODS[this.shipMethod];
  }

  /** 梱包費 */
  get packingCost() {
    return this._packingCost;
  }
  set packingCost(value) {
    this._packingCost = value;
    this.calc();
  }
  private _packingCost = 0;

  // --- 出力 ---
  /** 手数料(%) */
  feePercentage = 0;
  /** 配送料 */
  shipCost = 0;
  /** 集荷料 */
  collectionCost = 0;
  /** 資材料 */
  boxCost = 0;
  /** 販売価格 */
  price = 0;
  /** 販売利益 */
  profit = 0;

  private route: ActivatedRoute;
  private calculator: CalculatorService;
  constructor(
    @Inject(ActivatedRoute) route: ActivatedRoute,
    @Inject(CalculatorService) calculator: CalculatorService,
  ) {
    this.route = route;
    this.calculator = calculator;

    this.shipMethods = this.loadShipMethods();
  }

  ngOnInit(): void {
    this.route.fragment.subscribe(async (fragment) => {
      this.visible = fragment ? (await sha256Hash(fragment)) === environment.hash : false;
    });
  }

  /** 計算 */
  private calc() {
    this.feePercentage = this.calculator.getFeePercentage(this.service);

    this.shipCost = this.calculator.getShipCost(this.service, this.shipMethod);
    this.collectionCost = this.calculator.getCollectionCost(this.service, this.collection);
    this.boxCost = this.calculator.getBoxCost(this.shipMethod);

    // 販売価格
    this.price =
      (this.amount + this.shipCost + this.collectionCost + this.boxCost + this.packingCost) /
      (1 - this.feePercentage / 100);

    // 販売利益
    this.profit =
      this.amount -
      this.calculator.getFee(this.amount, this.feePercentage) -
      this.shipCost -
      this.collectionCost -
      this.boxCost -
      this.packingCost;
  }

  toLocaleString(n: number) {
    return n.toLocaleString();
  }
}
