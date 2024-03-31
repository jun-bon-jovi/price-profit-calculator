import { Injectable } from '@angular/core';

import {
  BOX_COST,
  COLLECTION_COST,
  FEE_PERCENTAGE,
  MERCARI_SHIP_COST,
  YAHOO_SHIP_COST,
} from '../constants';
import type { ServiceName, ShipMethodName } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  /** 手数料(%)を取得
   * @param service サービス
   */
  getFeePercentage(service: ServiceName): number {
    return FEE_PERCENTAGE[service];
  }

  /** 手数料を取得
   * @param amount 価格
   * @param feePercentage 手数料(%)
   */
  getFee(amount: number, feePercentage: number): number {
    return (amount * feePercentage) / 100;
  }

  /** 配送料を取得
   * @param service サービス
   * @param shipMethod 配送方法
   */
  getShipCost(service: ServiceName, shipMethod: ShipMethodName): number {
    switch (service) {
      case 'mercari':
        return MERCARI_SHIP_COST[shipMethod];
      case 'yahoo':
        return YAHOO_SHIP_COST[shipMethod];
    }
    return 0;
  }

  /** 集荷料を取得
   * @param service サービス
   * @param collection 集荷依頼の有無
   */
  getCollectionCost(service: ServiceName, collection: boolean): number {
    return collection ? COLLECTION_COST[service] : 0;
  }

  /** 資材料を取得
   * @param shipMethod 配送方法
   */
  getBoxCost(shipMethod: ShipMethodName): number {
    return BOX_COST[shipMethod] || 0;
  }
}
