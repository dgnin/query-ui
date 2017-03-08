'use strict';
import { getFieldInfo } from './common';

let configConditionAdd = function configConditionAdd(config) {
  let field;
  let operator;

  config.ps.on('field-updated', function (newField) {
    config.gui.add.disabled = !config.customMode || newField !== '' ? false :
      true;
    field = config.customMode ? newField.toString() : newField;
  });

  config.ps.on('operator-updated', function (newOperator) {
    operator = newOperator;
  });

  config.gui.add.addEventListener('click', function addConditionClicked() {
    if (!field || !operator) {
      throw `You can't add a condition without a field and an operator`;
    }

    // jscs:disable disallowSpaceBeforeComma
    let [fieldInfo, type, typeInfo] = getFieldInfo(field, config);
    // jscs:enable disallowSpaceBeforeComma

    let value;
    if (typeof fieldInfo === 'object' && typeof fieldInfo.list === 'object') {
      value = config.gui.listValue.value;
      if (value === 'null') {
        value = null;
      }
    } else if (type === 'boolean') {
      value = config.gui.value.checked ? true : false;
    } else {
      value = config.gui.value.value;
    }

    if (!value && value !== false) {
      value = null;
      if (operator !== '=' && operator !== '!=') {
        config.ps.trigger('error',
          'Only = and != operators are valid when value is null');
        return;
      }
    } else {
      try {
        value = typeInfo.validate(value);
      } catch (err) {
        config.ps.trigger('error', `Invalid value for type ${type}: ${value}`);
        return;
      }
    }

    config.conditions.push([field, operator, value]);
    config.ps.trigger('query-updated');
  });
};

export default configConditionAdd;
