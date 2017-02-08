'use strict';
import { getFieldInfo } from './common';
import { PREFIX } from './utils';

let configGraphicQuery = function configGraphicQuery(config) {
  let selected;

  let createGraphicCondition = function createGraphicCondition(condition, id) {
    // jscs:disable disallowSpaceBeforeComma
    // jscs:disable disallowTrailingComma
    // jscs:disable disallowSpacesInsideBrackets
    let [, type, ] = getFieldInfo(condition[0], config);
    // jscs:enable disallowSpaceBeforeComma
    // jscs:enable disallowTrailingComma
    // jscs:enable disallowSpacesInsideBrackets
    let li = document.createElement('li');
    let postfix = '';
    if (condition[2] === null) {
      postfix = ' qui-null';
    }
    li.className = `qui-condition qui-${type}${postfix}`;
    li.id = `${PREFIX}${config.id}-${id}`;
    let span;
    const LABELS = ['field', 'operator', 'value'];
    for (let i = 0; i < 3; i++) {
      span = document.createElement('span');
      span.className = `qui-cond-${LABELS[i]}`;
      span.appendChild(document.createTextNode(condition[i]));
      li.appendChild(span);
    }
    return li;
  };

  config.ps.on('query-updated', function () {
    let query = config.gui.query;
    selected = undefined;
    config.ps.trigger('condition-selected', undefined);
    while (query.firstChild) {
      query.removeChild(query.firstChild);
    }
    for (let i = 0, length = config.conditions.length; i < length; i++) {
      config.gui.query.appendChild(
        createGraphicCondition(config.conditions[i], i));
    }
  });

  config.gui.query.addEventListener('click', function queryClicked(ev) {
    let target = ev.target;
    let i = 0;
    while (!target.classList.contains('qui-condition') &&
      !target.classList.contains('qui-graphic-query') && i < 10) {
      target = ev.target.parentNode;
      i++;
    }

    if (target.classList.contains('qui-condition')) {
      let newSelected =
        parseInt(target.id.replace(`${PREFIX}${config.id}-`, ''), 10);
      if (selected === newSelected) {
        selected = undefined;
        target.classList.remove('qui-selected');
      } else if (selected !== undefined) {
        let oldSelected =
          document.getElementById(`${PREFIX}${config.id}-${selected}`);
        oldSelected.classList.remove('qui-selected');
        selected = newSelected;
        target.classList.add('qui-selected');
      } else {
        selected = newSelected;
        target.classList.add('qui-selected');
      }
      config.ps.trigger('condition-selected', selected);
    }
  });
};

export default configGraphicQuery;
