'use strict';
import { isDOMElement, PREFIX } from './utils';
import { PARSE_FUNCS, DEFAULT_FUNC } from './parse_funcs/index';
import pubsub from './pubsub';

let prepareConfig = function prepareConfig(input) {
  let config = {
    fields: typeof input.fields === 'object' ? input.fields : undefined,
    container: isDOMElement(input.container) ? input.container : undefined,
    parseFunc: typeof input.parseFunc === 'function' ? input.parseFunc :
      typeof input.parseFunc === 'string' &&
      typeof PARSE_FUNCS[input.parseFunc] === 'function' ?
      PARSE_FUNCS[input.parseFunc] : PARSE_FUNCS[DEFAULT_FUNC],
    id: input.id !== undefined ? parseInt(input.id, 10) : 0,
    ps: pubsub(),
    conditions: []
  };

  //Ensure non-existing ID for autogenerated values
  if (typeof config.id === 'number') {
    let el;
    do {
      config.id += 1;
      el = document.getElementById(`${PREFIX}${config.id}`);
    } while (el);
    config.id = parseInt(config.id, 10);
  }

  if (!config.fields || !config.container) {
    throw 'Params `fields` and `container` are mandarory';
  }

  return config;
};

export default prepareConfig;
