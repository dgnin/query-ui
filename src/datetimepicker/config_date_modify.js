'use strict';
import { getWeekDay1, PREFIX, ensureDigits } from './utils';

let configDateModify = function configDateModify(config) {
  let beforeClicked = function beforeClicked() {
    if (config.date.month === 0) {
      config.date.month = 11;
      config.date.year -= 1;
    } else {
      config.date.month -= 1;
    }
    config.date.weekDay1 = getWeekDay1(config.date.year, config.date.month);
    config.updateDate(config);
  };
  let afterClicked = function afterClicked() {
    if (config.date.month === 11) {
      config.date.month = 0;
      config.date.year += 1;
    } else {
      config.date.month += 1;
    }
    config.date.weekDay1 = getWeekDay1(config.date.year, config.date.month);
    config.updateDate(config);
  };
  let daysClicked = function daysClicked(e) {
    if (e.target.className === `${PREFIX}-day`) {
      let previousActive =
        config.gui.days.querySelectorAll(`.${PREFIX}-day.${PREFIX}-active`);
      if (typeof previousActive === 'object' &&
        typeof previousActive.length === 'number') {
        for (let i = 0, length = previousActive.length; i < length; i++) {
          previousActive[i].classList.remove(`${PREFIX}-active`);
        }
      }
      e.target.classList.add(`${PREFIX}-active`);
      config.date.day = parseInt(e.target.innerText, 10);
    }
  };
  let timeChanged = function timeChanged(e) {
    if (e.target === config.gui.hour) {
      config.date.hour = parseInt(e.target.value, 10);
      e.target.value = ensureDigits(config.date.hour, 2);
    } else if (e.target === config.gui.min) {
      config.date.min = parseInt(e.target.value, 10);
      e.target.value = ensureDigits(config.date.min, 2);
    } else if (e.target === config.gui.sec) {
      config.date.sec = parseInt(e.target.value, 10);
      e.target.value = ensureDigits(config.date.sec, 2);
    } else if (e.target === config.gui.ms) {
      config.date.ms = parseInt(e.target.value, 10);
      e.target.value = ensureDigits(config.date.ms, 3);
    }
  };

  config.gui.before.addEventListener('click', beforeClicked);
  config.gui.after.addEventListener('click', afterClicked);
  config.gui.days.addEventListener('click', daysClicked);
  config.gui.time.addEventListener('change', timeChanged);

  let oldRemoveInstance = config.removeInstance;
  config.removeInstance = function removeDateModify() {
    config.gui.before.removeEventListener('click', beforeClicked);
    config.gui.after.removeEventListener('click', afterClicked);
    config.gui.days.removeEventListener('click', daysClicked);
    config.gui.time.removeEventListener('change', timeChanged);
    oldRemoveInstance();
  };
};

export default configDateModify;
