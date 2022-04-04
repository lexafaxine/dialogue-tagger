export const randomString = () => (Math.random() + 1).toString(36).substring(7);

export type AssociateBy<T, TKey extends keyof T & string> = Record<T[TKey] & string, T>;

export interface Idable<T extends string = string> {
  id: T;
}

export type Sequence2IdMap<T extends Idable> = AssociateBy<T, "id">;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type GetComponentProps<T extends (...args: any) => any> = Parameters<T>[0];

export function asIdMap<T extends Idable>(items: T[]) {
  return Object.fromEntries((items).map((r) => [r.id, r]));
}
