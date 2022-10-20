import _replace from "lodash/replace";
import _size from "lodash/size";

const alphaNumericFilter = (value: string): string => {
  const regex = new RegExp(/[^0-9A-Za-z -]$/g);
  return _replace(value, regex, "");
};

const alphaNumericFilterUser = (value: string): string => {
  const regex = new RegExp(/[^0-9A-Za-z - @]$/g);
  return _replace(value, regex, "");
};

const alphaNumericFilterTickerTitle = (value: string): string => {
  const regex = new RegExp(/[^0-9A-Za-z ?!.]$/g);
  return _replace(value, regex, "");
};

const alphaNumericTest = (value: string): boolean => {
  const regex = new RegExp(/[0-9A-Za-z -]$/g);
  return regex.test(value) && _size(value) >= 3;
};

export const validation = {
  alphaNumericFilter,
  alphaNumericFilterUser,
  alphaNumericTest,
  alphaNumericFilterTickerTitle
};
