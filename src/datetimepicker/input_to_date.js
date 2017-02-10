'use strict';
import { getWeekDay1 } from './utils';

let inputToDate = function inputToDate(config) {
  let buildDateObject = function buildDateObject(date) {
    let obj = {};
    if (config.withDate) {
      obj.year = date.getUTCFullYear();
      obj.month = date.getUTCMonth();
      obj.day = date.getUTCDate();
      obj.weekDay1 = getWeekDay1(obj.year, obj.month);
    }
    if (config.withTime) {
      obj.hour = date.getUTCHours();
      obj.min = date.getUTCMinutes();
      obj.sec = date.getUTCSeconds();
      obj.ms = date.getUTCMilliseconds();
    }
    return obj;
  };

  let date = config.inputFunc(config.input.value, config.withDate,
    config.withTime);

  if (typeof date === 'object' && typeof date.toISOString === 'function') {
    try {
      date.toISOString();
    } catch (err) {
      return buildDateObject(new Date());
    }
  } else {
    return buildDateObject(new Date());
  }

  return buildDateObject(date);
};

export default inputToDate;
