import { flow, setWith, keys, map, each } from "lodash/fp";

const reshape = (item: { [key: string]: any }) => {
  let result: object = {};

  flow(
    keys,
    each((key: string) => {
      result = { ...result, ...setWith(Object, key, item[key], result) };
    })
  )(item);

  return result;
};

export const mapCsvToJson = (items: Array<{ [key: string]: any }>) => {
  return map((item: { [key: string]: any }) => reshape(item))(items);
};
