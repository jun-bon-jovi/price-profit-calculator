import type {
  JAPAN_POST_SHIP_METHOD_NAMES,
  SHIP_METHOD_NAMES,
  YAMATO_SHIP_METHOD_NAMES,
} from '../constants';

/** 配送方法名 - 全て */
export type ShipMethodName = keyof typeof SHIP_METHOD_NAMES;

/** 配送方法名 - 日本郵便 */
export type JapanPostShipMethodName = keyof typeof JAPAN_POST_SHIP_METHOD_NAMES;

/** 配送方法名 - ヤマト運輸 */
export type YamatoShipMethodName = keyof typeof YAMATO_SHIP_METHOD_NAMES;
