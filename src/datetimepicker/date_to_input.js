'use strict';

let dateToInput = function dateToInput(config, now = false) {
  let date;
  if (now) {
    date = new Date();
  } else {
    let val = {
      year: config.withDate ? config.date.year : 1970,
      month: config.withDate ? config.date.month : 0,
      day: config.withDate ? config.date.day : 1,
      hour: config.withTime ? config.date.hour : 0,
      min: config.withTime ? config.date.min : 0,
      sec: config.withTime ? config.date.sec : 0,
      ms: config.withTime ? config.date.ms : 0
    };
    date = new Date(Date.UTC(val.year, val.month, val.day, val.hour, val.min,
      val.sec, val.ms));
  }

  let isoString;
  try {
    isoString = date.toISOString();
  } catch (err) {
    console.error('Invalid date/time. Nothing written', config.date);
    return;
  }

  let toWrite;

  if (config.outputFunc === 'toISOString') {
    toWrite = isoString;
  } else if (typeof config.outputFunc === 'string') {
    try {
      toWrite = date[config.outputFunc]();
    } catch (err) {
      console.error('Invalid output function.', err);
    }
  } else {
    try {
      toWrite = config.outputFunc(date);
    } catch (err) {
      console.error('Invalid output function.', err);
    }
  }

  if (toWrite !== undefined) {
    config.input.value = toWrite;
  }
};

export default dateToInput;
