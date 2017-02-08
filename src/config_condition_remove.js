'use strict';

let configConditionRemove = function configConditionRemove(config) {
  let selected;
  config.ps.on('condition-selected', function (newSelected) {
    selected = newSelected;
    if (selected === undefined) {
      config.gui.remove.disabled = true;
    } else {
      config.gui.remove.disabled = false;
    }
  });

  config.gui.remove.addEventListener('click', function removeClicked() {
    if (selected === undefined) {
      throw `Without a condition selected it's impossible to remove it`;
    }

    config.conditions.splice(selected, 1);
    config.ps.trigger('query-updated');
  });
};

export default configConditionRemove;
