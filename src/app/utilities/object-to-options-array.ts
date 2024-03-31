export function objectToOptionsArray<T extends string, U>(obj: Record<T, U>) {
  return (Object.entries(obj) as [keyof typeof obj, U][]).map(([key, value]) => ({
    value: key,
    label: value,
  }));
}
