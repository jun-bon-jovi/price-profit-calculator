import type { ServiceName } from '../models';

/** 手数料(%) */
export const FEE_PERCENTAGE: Readonly<{ [key in ServiceName]: number }> = {
  mercari: 10,
  yahoo: 5,
};
