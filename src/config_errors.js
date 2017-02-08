'use strict';

let configErrors = function configErrors(config) {
  let emptyErrors = function emptyErrors() {
    let errors = config.gui.errors;
    while (errors.firstChild) {
      errors.removeChild(errors.firstChild);
    }
  };

  config.ps.on('error', function (message) {
    emptyErrors();
    config.gui.errors.appendChild(document.createTextNode(
      `${message} (click to dismiss)`));
  });

  config.gui.errors.addEventListener('click', emptyErrors);
};

export default configErrors;
