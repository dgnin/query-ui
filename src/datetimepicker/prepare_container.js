'use strict';
import { PREFIX } from './utils';

let prepareContainer = function prepareContainer(config) {
  let container = document.createElement('div');
  container.className = PREFIX;
  container.id = `${PREFIX}-${config.id}`;

  if (config.withDate) {
    container.classList.add(`${PREFIX}-with-date`);
  }
  if (config.withTime) {
    container.classList.add(`${PREFIX}-with-time`);
  }

  let parent = config.input.parentNode;
  parent.insertBefore(container, config.input);
  parent.removeChild(config.input);
  container.appendChild(config.input);

  config.removeInstance = function removeContainer() {
    config.container.parentNode.insertBefore(config.input, config.container);
    config.container.parentNode.removeChild(config.container);
  };

  return container;
};

export default prepareContainer;
