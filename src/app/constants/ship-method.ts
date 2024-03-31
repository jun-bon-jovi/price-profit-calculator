/** 配送方法名 - 日本郵便 */
export const JAPAN_POST_SHIP_METHOD_NAMES = {
  jp_yu_packet: 'ゆうパケット',
  jp_yu_packet_post_box: 'ゆうパケットポスト(専用箱)',
  jp_yu_packet_post_sticker: 'ゆうパケットポスト(シール)',
  jp_yu_packet_post_mini: 'ゆうパケットポストmini',
  jp_yu_packet_plus: 'ゆうパケットプラス',
  jp_yu_pack_60: 'ゆうパック(60)',
  jp_yu_pack_80: 'ゆうパック(80)',
  jp_yu_pack_100: 'ゆうパック(100)',
  jp_yu_pack_120: 'ゆうパック(120)',
  jp_yu_pack_140: 'ゆうパック(140)',
  jp_yu_pack_160: 'ゆうパック(160)',
  jp_yu_pack_170: 'ゆうパック(170)',
} as const;

/** 配送方法名 - ヤマト運輸 */
export const YAMATO_SHIP_METHOD_NAMES = {
  y_nekopos: 'ネコポス',
  y_parcel_compact: '宅急便コンパクト',
  y_parcel_60: '宅急便(60)',
  y_parcel_80: '宅急便(80)',
  y_parcel_100: '宅急便(100)',
  y_parcel_120: '宅急便(120)',
  y_parcel_140: '宅急便(140)',
  y_parcel_160: '宅急便(160)',
  y_parcel_180: '宅急便(180)',
  y_parcel_200: '宅急便(200)',
} as const;

/** 配送方法名 */
export const SHIP_METHOD_NAMES = {
  ...JAPAN_POST_SHIP_METHOD_NAMES,
  ...YAMATO_SHIP_METHOD_NAMES,
} as const;
