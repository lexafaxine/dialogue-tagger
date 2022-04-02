export const randomString = () => (Math.random() + 1).toString(36).substring(7);

export type AssociateBy<T, TKey extends keyof T & string> = Record<T[TKey] & string, Exclude<T, TKey>>;

export interface Idable<T extends string=string> { id: T; };

export type Sequence2IdMap<T extends Idable> = AssociateBy<T, "id">;
