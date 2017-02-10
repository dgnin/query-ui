'use strict';
import { PREFIX } from './utils';

let configPickerOpening = function configPickerOpening(config) {
  let closePicker;
  let listenClicks = function documentClicked(e) {
    let target = e.target;
    let picker = config.gui.picker;
    let input = config.input;
    let limit = 0;
    while (target !== picker && target !== input && target !== document &&
      target.parentNode && limit < 20) {
      target = target.parentNode;
      limit++;
    }
    if (target === document || !target.parentNode || limit === 20) {
      closePicker();
    }
  };
  let openPicker = function openPicker() {
    config.date = config.inputToDate(config);
    config.updateDate(config);
    config.container.classList.add(`${PREFIX}-open`);
    document.addEventListener('click', listenClicks);
  };
  closePicker = function closePicker(writing, now) {
    document.removeEventListener('click', listenClicks);
    config.container.classList.remove(`${PREFIX}-open`);
    if (writing) {
      config.dateToInput(config, now);
    }
  };
  let focused = function focused() {
    if (!config.container.classList.contains(`${PREFIX}-open`)) {
      openPicker();
    }
  };
  let onOK = function onOK() {
    closePicker('writing');
  };
  let onNow = function onNow() {
    closePicker('writing', 'now');
  };

  config.input.addEventListener('focus', focused);
  config.gui.ok.addEventListener('click', onOK);
  config.gui.now.addEventListener('click', onNow);

  let oldRemoveInstance = config.removeInstance;
  config.removeInstance = function removePickerOpening() {
    config.input.removeEventListener('focus', focused);
    config.gui.ok.removeEventListener('click', onOK);
    config.gui.now.removeEventListener('click', onNow);
    document.removeEventListener('click', listenClicks);
    oldRemoveInstance();
  };
};

export default configPickerOpening;
