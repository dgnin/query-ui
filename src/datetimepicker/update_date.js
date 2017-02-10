'use strict';
import { getMonthDays, PREFIX, ensureDigits } from './utils';

let updateDate = function updateDate(config) {
  if (config.withDate) {
    config.gui.month.innerText =
      `${config.months[config.date.month]} ${config.date.year}`;

    let days = config.gui.days;
    while (days.firstChild) {
      days.removeChild(days.firstChild);
    }
    for (let i = 0; i < config.date.weekDay1; i++) {
      days.appendChild(document.createElement('div'));
    }
    for (let i = 1, total = getMonthDays(config.date.month, config.date.year),
      day; i <= total; i++) {
      day = document.createElement('div');
      day.classList.add(`${PREFIX}-day`);
      if (i === config.date.day) {
        day.classList.add(`${PREFIX}-active`);
      }
      day.appendChild(document.createTextNode(i));
      days.appendChild(day);
    }
  }

  if (config.withTime) {
    config.gui.hour.value = ensureDigits(config.date.hour, 2);
    config.gui.min.value = ensureDigits(config.date.min, 2);
    config.gui.sec.value = ensureDigits(config.date.sec, 2);
    config.gui.ms.value = ensureDigits(config.date.ms, 3);
  }
};

export default updateDate;
