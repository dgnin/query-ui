'use strict';

let parseQueryString = function parseQueryString(query) {
  let queryString = '';
  for (let i = 0, length = query.length; i < length; i++) {
    if (query[i][1] === '=') {
      if (queryString.length > 0) {
        queryString += '&';
      }
      queryString += encodeURIComponent(query[i][0]);
      queryString += '=';
      queryString += encodeURIComponent(query[i][2]);
    }
  }
  return queryString;
};

export default parseQueryString;
