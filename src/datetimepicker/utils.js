'use strict';

export let isDOMElement = function isDOMElement(o) {
  return (typeof HTMLElement === 'object' ? o instanceof HTMLElement : //DOM2
    o && typeof o === 'object' && o !== null && o.nodeType === 1 &&
    typeof o.nodeName === 'string');
};

export let ensureDigits = function ensureDigits(num, digits) {
  let snum = num.toString();
  while (snum.length < digits) {
    snum = '0' + snum;
  }
  return snum;
};

export let getWeekDay1 = function getWeekDay1(year, month) {
  return (7 + (new Date(Date.UTC(year, month))).getUTCDay() - 1)%7;
};

export const PREFIX = 'dtp';

const MONTH_DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//For leap years
export let getMonthDays = function getMonthDays(month, year) {
  if (month === 1 && year%4 === 0) {
    return 29;
  } else {
    return MONTH_DAYS[month];
  }
};

export let DEF_INPUT_FUNC = function defInputFunc(input, withDate, withTime) {
  if (withDate) {
    return new Date(input);
  } else if (withTime) {
    let time = input.replace('Z', '').split(':');
    if (time.length === 3) {
      let sec = time[2].split('.');
      if (sec.length === 2) {
        return new Date(Date.UTC(1970, 0, 1, time[0], time[1], sec[0],
          sec[1]));
      } else if (sec.length === 1) {
        return new Date(Date.UTC(1970, 0, 1, time[0], time[1], time[2]));
      }
    }
  }
};

export const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];
export const WEEK_DAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

const STYLE = `<style>
  .dtp {
    position: relative;
  }
  .dtp .dtp-picker {
    font-family: sans-serif;
    text-align: center;
    font-size: 0.8em;
    position: absolute;
    left: 0;
    background-color: #fff;
    width: 15em;
    border: solid 1px #ccc;
    border-radius: 0.25em;
    padding: 0.5em;
    display: none;
  }
    .dtp.dtp-open .dtp-picker {
      display: block;
    }
  .dtp .dtp-calendar {
    display: none;
  }
    .dtp.dtp-with-date .dtp-calendar {
      display: block;
    }
  .dtp .dtp-month-picker {
    display: flex;
    font-weight: bold;
    padding-bottom: 0.75em;
  }
  .dtp .dtp-month, .dtp .dtp-month-pick, .dtp .dtp-week-days > div,
  .dtp .dtp-days > div {
    width: 14.2857%;
    box-sizing: border-box;
    padding: 0.25em;
  }
  .dtp .dtp-month {
    width: 100%;
  }
  .dtp .dtp-month-pick, .dtp .dtp-day {
    cursor: pointer;
    border-radius: 0.25em;
  }
    .dtp .dtp-month-pick:hover, .dtp .dtp-day:hover {
      background-color: #ccc;
    }
  .dtp .dtp-week-days {
    font-weight: bold;
    padding-bottom: 0.25em;
  }
  .dtp .dtp-week-days, .dtp .dtp-days {
    display: flex;
    flex-wrap: wrap;
  }
  .dtp .dtp-day.dtp-active {
    background-color: #666;
    color: #fff;
    cursor: default;
  }
  .dtp .dtp-time-picker {
    padding: 0.5em 0.25em 0.25em;
    display: none;
  }
  .dtp.dtp-with-time .dtp-time-picker, .dtp .dtp-buttons {
    display: flex;
    align-items: flex-end;
  }
    .dtp .dtp-time-decorator {
      flex-grow: 1;
      width: 5%;
      padding-bottom: 0.25em;
    }
    .dtp .dtp-two-digits {
      flex-grow: 2;
      box-sizing: border-box;
      width: 20%;
    }
    .dtp .dtp-three-digits {
      flex-grow: 3;
      box-sizing: border-box;
      width: 25%;
    }
  .dtp .dtp-buttons {
    padding: 0.5em 0.25em 0.25em;
  }
  .dtp button {
    width: 50%;
  }
  .dtp .dtp-ok {
    margin-left: 0.5em;
  }
</style>`;

export let generateHTML = function generateHTML() {
  return `${STYLE}
<div class="${PREFIX}-calendar">
  <div class="${PREFIX}-month-picker">
    <div class="dtp-month-before dtp-month-pick">&#x276e;</div>
    <div class="dtp-month"></div>
    <div class="dtp-month-after dtp-month-pick">&#x276f;</div>
  </div>
  <div class="dtp-day-picker">
    <div class="dtp-week-days">
      <div class="dtp-week-day">Mo</div>
      <div class="dtp-week-day">Tu</div>
      <div class="dtp-week-day">We</div>
      <div class="dtp-week-day">Th</div>
      <div class="dtp-week-day">Fr</div>
      <div class="dtp-week-day">Sa</div>
      <div class="dtp-week-day">Su</div>
    </div>
    <div class="dtp-days"></div>
  </div>
</div>
<div class="dtp-time-picker">
  <input class="dtp-hour dtp-two-digits" type="number" min="0" max="23">
  <span class="dtp-time-decorator">:</span>
  <input class="dtp-minute dtp-two-digits" type="number" min="0" max="59">
  <span class="dtp-time-decorator">:</span>
  <input class="dtp-second dtp-two-digits" type="number" min="0" max="59">
  <span class="dtp-time-decorator">.</span>
  <input class="dtp-milisecond dtp-three-digits" type="number" min="0"
    max="999">
</div>
<div class="dtp-buttons">
  <button class="dtp-now">Now</button>
  <button class="dtp-ok">OK</button>
</div>`;
};
