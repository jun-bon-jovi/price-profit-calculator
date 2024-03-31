import type { ServiceName } from '../models';

/** 集荷料 */
export const COLLECTION_COST: Readonly<{ [key in ServiceName]: number }> = {
  mercari: 100,
  yahoo: 50,
};
