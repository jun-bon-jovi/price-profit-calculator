import type { JapanPostShipMethodName, ShipMethodName, YamatoShipMethodName } from '../models';

/** 配送料 - メルカリ - 日本郵便
 * - https://jp-news.mercari.com/more/yuyu-mercari/
 */
const MERCARI_JP_SHIP_COST: Readonly<{ [key in JapanPostShipMethodName]: number }> = {
  jp_yu_packet: 230,
  jp_yu_packet_post_box: 215,
  jp_yu_packet_post_sticker: 215,
  jp_yu_packet_post_mini: 160,
  jp_yu_packet_plus: 455,
  jp_yu_pack_60: 750,
  jp_yu_pack_80: 870,
  jp_yu_pack_100: 1070,
  jp_yu_pack_120: 1200,
  jp_yu_pack_140: 1450,
  jp_yu_pack_160: 1700,
  jp_yu_pack_170: 1900,
};

/** 配送料 - メルカリ- ヤマト運輸
 * - https://jp-news.mercari.com/more/rakuraku-mercari/
 */
const MERCARI_Y_SHIP_COST: Readonly<{ [key in YamatoShipMethodName]: number }> = {
  y_nekopos: 210,
  y_parcel_compact: 450,
  y_parcel_60: 750,
  y_parcel_80: 850,
  y_parcel_100: 1050,
  y_parcel_120: 1200,
  y_parcel_140: 1450,
  y_parcel_160: 1700,
  y_parcel_180: 2100,
  y_parcel_200: 2500,
};

/** 配送料 - メルカリ */
export const MERCARI_SHIP_COST: Readonly<{ [key in ShipMethodName]: number }> = {
  ...MERCARI_JP_SHIP_COST,
  ...MERCARI_Y_SHIP_COST,
};

/** 配送料 - Yahoo!フリマ - 日本郵便
 * - https://paypayfleamarket.yahoo.co.jp/contents/shipping
 */
const YAHOO_JP_SHIP_COST: Readonly<{ [key in JapanPostShipMethodName]: number }> = {
  jp_yu_packet: 205,
  jp_yu_packet_post_box: 200,
  jp_yu_packet_post_sticker: 200,
  jp_yu_packet_post_mini: 150,
  jp_yu_packet_plus: 380,
  jp_yu_pack_60: 750,
  jp_yu_pack_80: 850,
  jp_yu_pack_100: 1050,
  jp_yu_pack_120: 1200,
  jp_yu_pack_140: 1400,
  jp_yu_pack_160: 1700,
  jp_yu_pack_170: 1900,
};

/** 配送料 - Yahoo!フリマ- ヤマト運輸
 * - https://paypayfleamarket.yahoo.co.jp/contents/shipping
 */
const YAHOO_Y_SHIP_COST: Readonly<{ [key in YamatoShipMethodName]: number }> = {
  y_nekopos: 200,
  y_parcel_compact: 450,
  y_parcel_60: 750,
  y_parcel_80: 850,
  y_parcel_100: 1050,
  y_parcel_120: 1200,
  y_parcel_140: 1400,
  y_parcel_160: 1700,
  y_parcel_180: 2100,
  y_parcel_200: 2500,
};

/** 配送料 - Yahoo!フリマ */
export const YAHOO_SHIP_COST: Readonly<{ [key in ShipMethodName]: number }> = {
  ...YAHOO_JP_SHIP_COST,
  ...YAHOO_Y_SHIP_COST,
};
