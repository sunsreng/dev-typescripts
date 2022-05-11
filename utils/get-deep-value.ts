export const getDeepValue = <
  TObj,
  TFirstkey extends keyof TObj,
  TSecondkey extends keyof TObj[TFirstkey]
>(
  obj: TObj,
  firstkey: TFirstkey,
  secondKey: TSecondkey
) => {
  return obj[firstkey][secondKey];
};

const obj = {
  foo: { a: true, b: 18 },
  bar: { c: "12", d: 18 }
};

const value = getDeepValue(obj, "foo", "b");

typeof value === "number";
