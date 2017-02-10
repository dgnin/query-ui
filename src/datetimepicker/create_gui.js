'use strict';
import { PREFIX, generateHTML, isDOMElement } from './utils';

let createGUI = function createGUI(config) {
  let picker = document.createElement('div');
  picker.className = `${PREFIX}-picker`;
  picker.innerHTML = generateHTML();
  picker.style.top = (config.input.offsetHeight + 5) + 'px';
  config.container.appendChild(picker);

  let selector = `#${PREFIX}-${config.id}`;
  let gui = {
    picker: picker
  };
  gui.month = document.querySelector(`${selector} .${PREFIX}-month`);
  gui.before = document.querySelector(`${selector} .${PREFIX}-month-before`);
  gui.after = document.querySelector(`${selector} .${PREFIX}-month-after`);
  gui.days = document.querySelector(`${selector} .${PREFIX}-days`);
  gui.time = document.querySelector(`${selector} .${PREFIX}-time-picker`);
  gui.hour = document.querySelector(`${selector} .${PREFIX}-hour`);
  gui.min = document.querySelector(`${selector} .${PREFIX}-minute`);
  gui.sec = document.querySelector(`${selector} .${PREFIX}-second`);
  gui.ms = document.querySelector(`${selector} .${PREFIX}-milisecond`);
  gui.now = document.querySelector(`${selector} .${PREFIX}-now`);
  gui.ok = document.querySelector(`${selector} .${PREFIX}-ok`);

  //Validation
  for (let key in gui) {
    if (gui.hasOwnProperty(key)) {
      if (!isDOMElement(gui[key])) {
        throw `GUI failed creating component: ${key}`;
      }
    }
  }

  let oldRemoveInstance = config.removeInstance;
  config.removeInstance = function removeGUI() {
    config.container.removeChild(picker);
    oldRemoveInstance();
  };

  return gui;
};

export default createGUI;
