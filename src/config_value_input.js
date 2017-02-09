'use strict';
import { createOption, PREFIX } from './utils';
import { getFieldInfo } from './common';

let configValueInput = function configValueInput(config) {
  let valueId = `${PREFIX}${config.id}-value`;
  config.gui.value.id = valueId;
  config.gui.valueLabel.setAttribute('for', valueId);

  config.ps.on('field-updated', function (field) {
    // jscs:disable disallowSpaceBeforeComma
    let [fieldInfo, , typeInfo] = getFieldInfo(field, config);
    // jscs:enable disallowSpaceBeforeComma

    config.gui.value.value = '';
    for (let i = 0, attributes = config.gui.value.attributes,
      length = attributes.length; i < length; i++) {
      if (['type', 'class', 'placeholder', 'id']
        .indexOf(attributes[i].nodeName) < 0) {
        config.gui.value.removeAttribute(attributes[i].nodeName);
      }
    }
    config.gui.userInput.classList.remove('qui-list-mode');


    if (typeof fieldInfo === 'object') {
      if (typeof fieldInfo.list === 'object' &&
        typeof fieldInfo.list.length === 'number') {
        let listValue = config.gui.listValue;
        while (listValue.firstChild) {
          listValue.removeChild(listValue.firstChild);
        }
        for (let i = 0, length = fieldInfo.list.length; i < length; i++) {
          listValue.appendChild(createOption(fieldInfo.list[i]));
        }
        config.gui.userInput.classList.add('qui-list-mode');
      } else if (typeof fieldInfo.url === 'string' &&
        typeof fieldInfo.mainParam === 'string') {
        config.gui.value.type = 'search';
      } else {
        throw `Complex type wrong defined for field: ${field}`;
      }
    } else {
      if (typeof typeInfo.input === 'string') {
        config.gui.value.type = typeInfo.input;
      } else if (typeof typeInfo.input === 'object') {
        for (let att in typeInfo.input) {
          if (typeInfo.input.hasOwnProperty(att)) {
            config.gui.value[att] = typeInfo.input[att];
          }
        }
      }
    }
  });
};

export default configValueInput;
