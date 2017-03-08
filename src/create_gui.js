'use strict';
import { generateHTML, PREFIX, isDOMElement } from './utils';

let createGUI = function createGUI(config) {
  config.container.innerHTML = generateHTML(config.id);

  let gui = {};
  let selector = `#${PREFIX}${config.id}`;
  gui.input = document.querySelector(`${selector} .qui-input`);
  gui.fields = document.querySelector(`${selector} .qui-field`);
  gui.custom = document.querySelector(`${selector} .qui-custom`);
  gui.operators = document.querySelector(`${selector} .qui-operator`);
  gui.userInput = document.querySelector(`${selector} .qui-user-input`);
  gui.value = document.querySelector(`${selector} .qui-value`);
  gui.valueLabel = document.querySelector(`${selector} .qui-value-label`);
  gui.listValue = document.querySelector(`${selector} .qui-list-value`);
  gui.add = document.querySelector(`${selector} .qui-add`);
  gui.query = document.querySelector(`${selector} .qui-graphic-query`);
  gui.errors = document.querySelector(`${selector} .qui-errors`);
  gui.remove = document.querySelector(`${selector} .qui-remove`);

  //Validation
  for (let key in gui) {
    if (gui.hasOwnProperty(key)) {
      if (!isDOMElement(gui[key])) {
        throw `GUI failed creating component: ${key}`;
      }
    }
  }

  //Custom mode
  if (config.customMode) {
    gui.input.classList.add('qui-custom-mode');
  }

  return gui;
};

export default createGUI;
