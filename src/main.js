'use strict';
import prepareConfig from './prepare_config';
import createGUI from './create_gui';
import configFields from './config_fields';
import configOperators from './config_operators';
import configValueInput from './config_value_input';
import configConditionAdd from './config_condition_add';
import configConditionRemove from './config_condition_remove';
import configGraphicQuery from './config_graphic_query';
import configErrors from './config_errors';

let queryUI = function queryUI(input = {}) {
  let config = prepareConfig(input);
  config.gui = createGUI(config);

  //Error management
  configErrors(config);

  //Conditions
  configConditionAdd(config);
  configConditionRemove(config);
  configGraphicQuery(config);

  //Input
  configOperators(config);
  configFields(config);
  configValueInput(config);

  return {
    query: function getQuery() {
      return config.conditions;
    },
    parsed: function getParsed() {
      return config.parseFunc(config.conditions);
    }
  };
};

export default queryUI;
