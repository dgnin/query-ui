'use strict';
import prepareConfig from './prepare_config';
import prepareContainer from './prepare_container';
import createGUI from './create_gui';
import configPickerOpening from './config_picker_opening';
import configDateModify from './config_date_modify';

let datetimepicker = function datetimepicker(params = {}) {
  try {
    let config = prepareConfig(params);
    config.container = prepareContainer(config);
    config.gui = createGUI(config);

    configPickerOpening(config);
    configDateModify(config);

    return {
      remove: config.removeInstance
    };
  } catch (err) {
    console.error('Critical error:', err);
  }
};

export default datetimepicker;
