import type { ShipMethodName } from '../models';

/** 資材料
 * - https://paypayfleamarket.yahoo.co.jp/contents/shipping
 */
export const BOX_COST: Readonly<{ [key in ShipMethodName]?: number }> = {
  y_parcel_compact: 70,

  jp_yu_packet_post_box: 65,
  jp_yu_packet_post_sticker: 5,
  jp_yu_packet_post_mini: 20,
  jp_yu_packet_plus: 65,
};
