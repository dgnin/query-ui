'use strict';
import { createOption } from './utils';
import { getFieldInfo } from './common';
import intersection from 'lodash/intersection';

let fillOperators = function fillOperators(operators, config, def) {
  if (operators.indexOf(def) < 0 && operators.length > 0) {
    def = operators[0];
  }
  let guiEl = config.gui.operators;
  while (guiEl.firstChild) {
    guiEl.removeChild(guiEl.firstChild);
  }
  for (let i = 0, length = operators.length; i < length; i++) {
    config.gui.operators.appendChild(createOption(operators[i],
      operators[i] === def));
  }
  config.ps.trigger('operator-updated', def);
};

let configOperators = function configOperators(config) {
  fillOperators(config.operators, config);

  config.ps.on('field-updated', function updateOperators(field) {
    // jscs:disable disallowSpaceBeforeComma
    let [, , typeInfo] = getFieldInfo(field, config);
    // jscs:enable disallowSpaceBeforeComma

    fillOperators(intersection(config.operators, typeInfo.operators),
      config, typeInfo.default);
  });

  config.gui.operators.addEventListener('change', function () {
    config.ps.trigger('operator-updated', config.gui.operators.value);
  });
};

export default configOperators;
