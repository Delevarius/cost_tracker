// @flow

export type Item = {
  cost: number,
  note: string,
  category: ?String,
};
export type ItemsList = Array<Item>;
export type Categories = Array<String>; 