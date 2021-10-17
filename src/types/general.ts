export type AnyObject = { [key: string]: any };

export interface PayloadAction<T> {
  payload: T;
  type: string;
}
