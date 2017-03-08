'use strict';

let ajax = {};
ajax.x = function () {
  if (typeof XMLHttpRequest !== 'undefined') {
    return new XMLHttpRequest();
  }
  let versions = [
    'MSXML2.XmlHttp.6.0',
    'MSXML2.XmlHttp.5.0',
    'MSXML2.XmlHttp.4.0',
    'MSXML2.XmlHttp.3.0',
    'MSXML2.XmlHttp.2.0',
    'Microsoft.XmlHttp'
  ];

  let xhr;
  for (let i = 0; i < versions.length; i++) {
    try {
      xhr = new ActiveXObject(versions[i]);
      break;
    } catch (e) {
    }
  }
  return xhr;
};

ajax.send = function (url, callback, method, data, async) {
  if (async === undefined) {
    async = true;
  }
  let x = ajax.x();
  x.open(method, url, async);
  x.onreadystatechange = function () {
    if (x.readyState === 4) {
      callback(x.responseText);
    }
  };
  if (method === 'POST') {
    x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  }
  x.send(data);
};

ajax.get = function (url, data, callback, async) {
  let query = [];
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
    }
  }
  let concat = url.indexOf('?') >= 0 ? '&' : '?';
  ajax.send(url + (query.length ? concat + query.join('&') : ''), callback,
    'GET', null, async);
};

ajax.post = function (url, data, callback, async) {
  let query = [];
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
    }
  }
  ajax.send(url, callback, 'POST', query.join('&'), async);
};

export let isDOMElement = function isDOMElement(o) {
  return (typeof HTMLElement === 'object' ? o instanceof HTMLElement : //DOM2
    o && typeof o === 'object' && o !== null && o.nodeType === 1 &&
    typeof o.nodeName === 'string');
};

export let createOption = function createOption(value, selected = false) {
  let option = document.createElement('option');
  option.value = value;
  option.selected = selected;
  option.appendChild(document.createTextNode(value));
  return option;
};

export let callURL = function callURL(params, onSuccess) {
  let ajaxCall = params.method === 'POST' ? ajax.post : ajax.get;
  ajaxCall(params.url, params.params, onSuccess);
};

export const MAIN_PARAM = 'term';

export const OPERATORS = ['=', '<', '>', '<=', '>=', '!=', 'like'];

export const TYPES = {
  string: {
    operators: ['=', '!=', 'like'],
    default: 'like',
    input: 'text',
    validate: function validateString(value) {
      if (typeof value.toString === 'function') {
        return value.toString();
      } else {
        throw 'Invalid value';
      }
    }
  },
  number: {
    operators: ['=', '<', '>', '<=', '>=', '!='],
    default: '=',
    input: 'number',
    validate: function validateNumber(value) {
      let num = parseInt(value, 10);
      if (isNaN(num)) {
        throw 'Invalid value';
      } else {
        return num;
      }
    }
  },
  float: {
    operators: ['=', '<', '>', '<=', '>=', '!='],
    default: '=',
    input: {
      type: 'number',
      step: 'any'
    },
    validate: function validateFloat(value) {
      let num = parseFloat(value);
      if (isNaN(num)) {
        throw 'Invalid value';
      } else {
        return num;
      }
    }
  },
  boolean: {
    operators: ['='],
    default: '=',
    input: {
      type: 'checkbox',
      checked: true
    },
    validate: function validateBoolean(value) {
      return value ? true : false;
    }
  },
  datetime: {
    operators: ['=', '<', '>', '<=', '>=', '!='],
    default: '=',
    input: 'text',
    validate: function validateDatetime(value) {
      if (typeof value === 'string') {
        try {
          return (new Date(value)).toISOString();
        } catch (err) { }
      }
      throw 'Invalid value';
    }
  },
  date: {
    operators: ['=', '<', '>', '<=', '>=', '!='],
    default: '=',
    input: 'text',
    validate: function validateDate(value) {
      if (typeof value === 'string') {
        try {
          return (new Date(value)).toISOString().split('T')[0];
        } catch (err) { }
      }
      throw 'Invalid value';
    }
  },
  time: {
    operators: ['=', '<', '>', '<=', '>=', '!='],
    default: '=',
    input: 'text',
    validate: function validateTime(value) {
      if (typeof value === 'string') {
        try {
          return (new Date(`1970-01-01T${value}`)).toISOString().split('T')[1];
        } catch (err) { }
      }
      throw 'Invalid value';
    }
  },
  timestamp: {
    operators: ['=', '<', '>', '<=', '>=', '!='],
    default: '=',
    input: 'text',
    validate: function validateTimestamp(value) {
      if (typeof value === 'string') {
        try {
          (new Date(parseInt(value, 10))).toISOString();
        } catch (err) {
          throw 'Invalid value';
        }
        return value;
      }
      throw 'Invalid value';
    }
  }
};

export const PREFIX = 'qui-';

const STYLE = `<style>
  /*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */
  /*Only the forms section and modified to affect only things under .qui class*/
  .qui button,.qui input,.qui optgroup,.qui select,.qui textarea{
  font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}.qui button,
  .qui input{overflow:visible}.qui button,.qui select{text-transform:none}
  .qui button,html .qui [type="button"],.qui [type="reset"],
  .qui [type="submit"]{-webkit-appearance:button}.qui button::-moz-focus-inner,
  .qui [type="button"]::-moz-focus-inner,.qui [type="reset"]::-moz-focus-inner,
  .qui [type="submit"]::-moz-focus-inner{border-style:none;padding:0}
  .qui button:-moz-focusring,.qui [type="button"]:-moz-focusring,
  .qui [type="reset"]:-moz-focusring,.qui [type="submit"]:-moz-focusring{
  outline:1px dotted ButtonText}.qui fieldset{border:1px solid silver;
  margin:0 2px;padding:.35em .625em .75em}.qui [type="checkbox"],
  .qui [type="radio"]{box-sizing:border-box;padding:0}
  .qui [type="number"]::-webkit-inner-spin-button,
  .qui [type="number"]::-webkit-outer-spin-button{height:auto}
  .qui [type="search"]{-webkit-appearance:textfield;outline-offset:-2px}
  .qui [type="search"]::-webkit-search-cancel-button,
  .qui [type="search"]::-webkit-search-decoration{-webkit-appearance:none}

  .autocomplete-suggestions{font-family:sans-serif;font-size:.8em;
  text-align:left;cursor:default;border:1px solid #ccc;border-top:0;
  background:#fff;box-shadow:-1px 1px 3px rgba(0,0,0,.1);position:absolute;
  display:none;z-index:9999;max-height:254px;overflow:hidden;overflow-y:auto;
  box-sizing:border-box}.autocomplete-suggestion{position:relative;
  padding:0 .6em;line-height:23px;white-space:nowrap;overflow:hidden;
  text-overflow:ellipsis;font-size:1.02em;color:#333}.autocomplete-suggestion b{
  font-weight:400;color:#1f8dd6}
  .autocomplete-suggestion.selected{background:#f0f0f0}

  .qui {
    max-width: 40em;
    font-family: sans-serif;
    margin: auto;
  }
    .qui select, .qui input, .qui button {
      padding: 0.5em;
      box-sizing: border-box;
    }
      .qui .dtp-picker input, .qui .dtp-picker button {
        padding: initial;
      }
    .qui .qui-input {
      display: flex;
    }
    .qui .qui-custom {
      display: none;
    }
    .qui .qui-input.qui-custom-mode .qui-custom {
      display: block;
    }
    .qui .qui-input.qui-custom-mode .qui-field {
      display: none;
    }
    .qui .qui-field, .qui .qui-custom {
      flex-grow: 1;
    }
    .qui .qui-operator {
      margin: 0 1em;
      min-width: 4em;
    }
    .qui-user-input {
      width: 35%;
      min-height: 6em;
    }
    .qui .qui-value, .qui .qui-list-value, .qui .qui-add {
      display: block;
      width: 100%;
    }
    .qui .qui-value, .qui .qui-list-value {
      margin-bottom: 1em;
    }
      .qui .qui-value[type='checkbox'] {
        display: inline-block;
        width: auto;
      }
      .qui .qui-value[type='checkbox'] + .qui-value-label:after {
        content: 'false';
        padding-left: 0.5em;
        vertical-align: middle;
      }
      .qui .qui-value[type='checkbox']:checked + .qui-value-label:after {
        content: 'true';
      }
    .qui .qui-list-value, .qui .qui-user-input.qui-list-mode .qui-value {
      display: none;
    }
    .qui .qui-user-input.qui-list-mode .qui-list-value {
      display: block;
    }
    .qui .qui-graphic-query {
      padding: 0;
      background-color: #444;
      color: #ccc;
      list-style: none;
    }
      .qui .qui-graphic-query:after {
        content: '';
        display: block;
        clear: left;
        text-align: center;
        color: #aaa;
      }
      .qui .qui-graphic-query:empty:after {
        content: 'empty query';
        padding: 0.5em;
      }
    .qui .qui-condition {
      float: left;
      padding: 0.5em;
      cursor: pointer;
    }
      .qui .qui-condition:hover {
        background-color: #555;
      }
      .qui .qui-condition.qui-selected {
        background-color: #666;
      }
      .qui .qui-condition:before {
        content: 'and';
        display: inline-block;
        padding-right: 1em;
      }
      .qui .qui-condition:first-child:before {
        display: none;
      }
      .qui .qui-condition:after {
        content: ')';
        padding-left: 0.25em;
      }
    .qui .qui-cond-field {
      color: #fbffcc;
    }
      .qui .qui-cond-field:before {
        content: '(';
        color: #ccc;
        padding-right: 0.25em;
      }
    .qui .qui-cond-operator {
      color: #fcc;
      padding: 0 0.4em;
    }
    .qui .qui-cond-value {
      color: #8eeeff;
    }
      .qui .qui-string .qui-cond-value:before,
      .qui .qui-string .qui-cond-value:after,
      .qui .qui-datetime .qui-cond-value:before,
      .qui .qui-datetime .qui-cond-value:after,
      .qui .qui-date .qui-cond-value:before,
      .qui .qui-date .qui-cond-value:after,
      .qui .qui-time .qui-cond-value:before,
      .qui .qui-time .qui-cond-value:after,
      .qui .qui-timestamp .qui-cond-value:before,
      .qui .qui-timestamp .qui-cond-value:after {
        content: '"';
      }
    .qui .qui-null .qui-cond-value {
      color: #c9a7e6;
      font-style: italic;
    }
      .qui .qui-string.qui-null .qui-cond-value:before,
      .qui .qui-string.qui-null .qui-cond-value:after,
      .qui .qui-datetime.qui-null .qui-cond-value:before,
      .qui .qui-datetime.qui-null .qui-cond-value:after,
      .qui .qui-date.qui-null .qui-cond-value:before,
      .qui .qui-date.qui-null .qui-cond-value:after,
      .qui .qui-time.qui-null .qui-cond-value:before,
      .qui .qui-time.qui-null .qui-cond-value:after {
        content: '';
      }
    .qui .qui-last-part {
      display: flex;
      align-items: flex-start;
    }
    .qui .qui-errors {
      flex-grow: 1;
      order: 1;
      font-size: 0.8em;
      color: #b00;
      cursor: default;
    }
    .qui .qui-remove {
      display: block;
      width: 35%;
      order: 2;
    }
</style>`;

export let generateHTML = function generateHTML(id) {
  return `<div class="qui" id="qui-${id}">
    ${STYLE}
    <div class="qui-input">
      <select class="qui-field" size="2"></select>
      <input type="text" class="qui-custom" placeholder="Field name" size="2">
      </input>
      <select class="qui-operator" size="2"></select>
      <div class="qui-user-input">
        <input type="text" class="qui-value" placeholder="null">
        <label class="qui-value-label"></label>
        <select class="qui-list-value"></select>
        <button class="qui-add" disabled>Add condition</button>
      </div>
    </div>
    <div class="qui-editor">
      <ul class="qui-graphic-query"></ul>
      <div class="qui-last-part">
        <button class="qui-remove" disabled>Remove condition</button>
        <div class="qui-errors"></div>
      </div>
    </div>
  </div>`;
};
