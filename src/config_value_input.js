'use strict';
import { createOption, PREFIX, callURL } from './utils';
import { getFieldInfo } from './common';
import datetimepicker from './datetimepicker/main';
import merge from 'lodash/merge';

let configValueInput = function configValueInput(config) {
  let valueId = `${PREFIX}${config.id}-value`;
  config.gui.value.id = valueId;
  config.gui.valueLabel.setAttribute('for', valueId);

  let currentValid;
  let checkIfValid = function checkIfValid() {
    if (config.gui.value.value === currentValid) {
      config.gui.add.disabled = false;
    } else {
      config.gui.add.disabled = true;
    }
  };

  let acomplete;
  let loadAutoComplete = function loadAutoComplete(fieldInfo) {
    config.gui.value.addEventListener('keyup', checkIfValid);
    checkIfValid();
    return new autoComplete({
      selector: `#${PREFIX}${config.id} .qui-value`,
      source: function (term, response) {
        let query = {};
        query[fieldInfo.mainParam || 'term'] = term;
        if (fieldInfo.otherParams) {
          query = merge(query, fieldInfo.otherParams);
        }
        callURL({
          url: fieldInfo.url,
          params: query,
          method: fieldInfo.method || 'GET'
        }, function (answer) {
          let data = fieldInfo.onSuccess(answer);
          response(data);
        });
      },
      renderItem: function (item, search) {
        search = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        let re = new RegExp('(' + search.split(' ').join('|') + ')', 'gi');
        let value = item[0];
        let show = item.length > 1 ? item[1] : item[0];
        return '<div class="autocomplete-suggestion" data-val="' + value +
          '">' + show.replace(re, '<b>$1</b>') + '</div>';
      },
      onSelect: function (ev, term) {
        if (ev) {
          currentValid = term;
          checkIfValid();
        }
      }
    });
  };

  let picker;
  let loadPickerIfRequired = function loadPickerIfRequired(type) {
    if (type === 'datetime') {
      return datetimepicker({
        input: config.gui.value
      });
    } else if (type === 'date') {
      return datetimepicker({
        input: config.gui.value,
        withTime: false
      });
    } else if (type === 'time') {
      return datetimepicker({
        input: config.gui.value,
        withDate: false
      });
    } else if (type === 'timestamp') {
      return datetimepicker({
        input: config.gui.value,
        inputFunc: function (value) {
          return new Date(parseInt(value, 10));
        },
        outputFunc: function (date) {
          return date.getTime();
        }
      });
    } else {
      return undefined;
    }
  };

  config.ps.on('field-updated', function (field) {
    let [fieldInfo, type, typeInfo] = getFieldInfo(field, config);

    config.gui.value.value = '';
    for (let i = 0, attributes = config.gui.value.attributes,
      length = attributes.length; i < length; i++) {
      if (['type', 'class', 'placeholder', 'id']
        .indexOf(attributes[i].nodeName) < 0) {
        config.gui.value.removeAttribute(attributes[i].nodeName);
      }
    }
    config.gui.userInput.classList.remove('qui-list-mode');
    if (picker) {
      picker.remove();
      picker = undefined;
    }
    if (acomplete) {
      currentValid = undefined;
      config.gui.value.removeEventListener('keyup', checkIfValid);
      acomplete.destroy();
      acomplete = undefined;
    }

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
      } else if (typeof fieldInfo.url === 'string') {
        acomplete = loadAutoComplete(fieldInfo);
      } else {
        throw `Complex type wrong defined for field: ${field}`;
      }
    } else {
      picker = loadPickerIfRequired(type);
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
