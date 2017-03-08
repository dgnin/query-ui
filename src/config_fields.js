'use strict';
import { createOption } from './utils';

let configFields = function configFields(config) {
  if (config.customMode) {
    config.gui.custom.addEventListener('keyup', function () {
      config.ps.trigger('field-updated', config.gui.custom.value);
    });
    config.ps.trigger('field-updated', '');
  } else {
    for (let field in config.fields) {
      if (config.fields.hasOwnProperty(field)) {
        config.gui.fields.appendChild(createOption(field));
      }
    }
    config.gui.fields.addEventListener('change', function () {
      config.ps.trigger('field-updated', config.gui.fields.value);
    });
  }
};

export default configFields;
