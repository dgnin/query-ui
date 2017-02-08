'use strict';
import parseQueryString from './parse_query_string';

export const PARSE_FUNCS = {
  'query-string': parseQueryString
};

export const DEFAULT_FUNC = 'query-string';
