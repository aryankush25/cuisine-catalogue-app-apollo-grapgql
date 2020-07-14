import * as R from 'ramda';
import humps from 'humps';

export const isNilOrEmpty = R.anyPass([R.isNil, R.isEmpty]);
export const isPresent = R.complement(isNilOrEmpty);

export const getResponseBody = (response) => {
  const camelizeResponse = humps.camelizeKeys(response);

  return camelizeResponse.data;
};
