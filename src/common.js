'use strict';
import { TYPES } from './utils';

export let getFieldInfo = function getFieldInfo(field, config) {
  let fieldInfo;
  if (config.customMode) {
    fieldInfo = config.custom;
  } else {
    if (config.fields[field] === undefined) {
      throw `Incoherence between GUI and system fields: ${field}`;
    }
    fieldInfo = config.fields[field];
  }

  let type;
  if (typeof fieldInfo === 'string') {
    type = fieldInfo;
  } else if (typeof fieldInfo === 'object') {
    type = fieldInfo.type;
  } else {
    throw `Field defined wrong: ${field}`;
  }

  let typeInfo = TYPES[type];
  if (typeInfo === undefined) {
    throw `Unknown type for field: ${field}`;
  }

  return [fieldInfo, type, typeInfo];
};
