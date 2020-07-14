import * as R from 'ramda';
import { isNilOrEmpty } from './helper';

const MY_WEB_APP_TOKENS = 'fifo-web-tokens';
const TOKENS = ['accessToken', 'userEmail'];

export const getLocalStorageTokens = () => {
  const currentTokensString = localStorage.getItem(MY_WEB_APP_TOKENS);
  const currentTokensObject = JSON.parse(currentTokensString);

  const returnTokens = {};

  TOKENS.forEach((token) => {
    returnTokens[`${token}`] = R.pathOr('', [`${token}`], currentTokensObject);
  });

  return returnTokens;
};

export const setLocalStorageTokens = (tokens) => {
  const currentTokens = getLocalStorageTokens();
  const newTokensValues = { ...currentTokens, ...tokens };
  const tokensToSet = {};

  TOKENS.forEach((token) => {
    tokensToSet[`${token}`] = newTokensValues[`${token}`];
  });

  localStorage.setItem(MY_WEB_APP_TOKENS, JSON.stringify(tokensToSet));
};

export const isPresentLocalStorageTokens = () => {
  const currentTokens = getLocalStorageTokens();
  let isAllTokensPresent = true;

  TOKENS.forEach((tokenName) => {
    const tokenValue = currentTokens[`${tokenName}`];

    if (isNilOrEmpty(tokenValue)) {
      isAllTokensPresent = false;
    }
  });

  return isAllTokensPresent;
};

export const clearLocalStorageTokens = () => {
  localStorage.removeItem(MY_WEB_APP_TOKENS);
};
