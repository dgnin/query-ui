// JavaScript autoComplete v1.0.4
// https://github.com/Pixabay/JavaScript-autoComplete
var autoComplete=function(){function e(e){function t(e,t){return e.classList?e.classList.contains(t):new RegExp("\\b"+t+"\\b").test(e.className)}function o(e,t,o){e.attachEvent?e.attachEvent("on"+t,o):e.addEventListener(t,o)}function s(e,t,o){e.detachEvent?e.detachEvent("on"+t,o):e.removeEventListener(t,o)}function n(e,s,n,l){o(l||document,s,function(o){for(var s,l=o.target||o.srcElement;l&&!(s=t(l,e));)l=l.parentElement;s&&n.call(l,o)})}if(document.querySelector){var l={selector:0,source:0,minChars:3,delay:150,offsetLeft:0,offsetTop:1,cache:1,menuClass:"",renderItem:function(e,t){t=t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&");var o=new RegExp("("+t.split(" ").join("|")+")","gi");return'<div class="autocomplete-suggestion" data-val="'+e+'">'+e.replace(o,"<b>$1</b>")+"</div>"},onSelect:function(){}};for(var c in e)e.hasOwnProperty(c)&&(l[c]=e[c]);for(var a="object"==typeof l.selector?[l.selector]:document.querySelectorAll(l.selector),u=0;u<a.length;u++){var i=a[u];i.sc=document.createElement("div"),i.sc.className="autocomplete-suggestions "+l.menuClass,i.autocompleteAttr=i.getAttribute("autocomplete"),i.setAttribute("autocomplete","off"),i.cache={},i.last_val="",i.updateSC=function(e,t){var o=i.getBoundingClientRect();if(i.sc.style.left=Math.round(o.left+(window.pageXOffset||document.documentElement.scrollLeft)+l.offsetLeft)+"px",i.sc.style.top=Math.round(o.bottom+(window.pageYOffset||document.documentElement.scrollTop)+l.offsetTop)+"px",i.sc.style.width=Math.round(o.right-o.left)+"px",!e&&(i.sc.style.display="block",i.sc.maxHeight||(i.sc.maxHeight=parseInt((window.getComputedStyle?getComputedStyle(i.sc,null):i.sc.currentStyle).maxHeight)),i.sc.suggestionHeight||(i.sc.suggestionHeight=i.sc.querySelector(".autocomplete-suggestion").offsetHeight),i.sc.suggestionHeight))if(t){var s=i.sc.scrollTop,n=t.getBoundingClientRect().top-i.sc.getBoundingClientRect().top;n+i.sc.suggestionHeight-i.sc.maxHeight>0?i.sc.scrollTop=n+i.sc.suggestionHeight+s-i.sc.maxHeight:0>n&&(i.sc.scrollTop=n+s)}else i.sc.scrollTop=0},o(window,"resize",i.updateSC),document.body.appendChild(i.sc),n("autocomplete-suggestion","mouseleave",function(){var e=i.sc.querySelector(".autocomplete-suggestion.selected");e&&setTimeout(function(){e.className=e.className.replace("selected","")},20)},i.sc),n("autocomplete-suggestion","mouseover",function(){var e=i.sc.querySelector(".autocomplete-suggestion.selected");e&&(e.className=e.className.replace("selected","")),this.className+=" selected"},i.sc),n("autocomplete-suggestion","mousedown",function(e){if(t(this,"autocomplete-suggestion")){var o=this.getAttribute("data-val");i.value=o,l.onSelect(e,o,this),i.sc.style.display="none"}},i.sc),i.blurHandler=function(){try{var e=document.querySelector(".autocomplete-suggestions:hover")}catch(t){var e=0}e?i!==document.activeElement&&setTimeout(function(){i.focus()},20):(i.last_val=i.value,i.sc.style.display="none",setTimeout(function(){i.sc.style.display="none"},350))},o(i,"blur",i.blurHandler);var r=function(e){var t=i.value;if(i.cache[t]=e,e.length&&t.length>=l.minChars){for(var o="",s=0;s<e.length;s++)o+=l.renderItem(e[s],t);i.sc.innerHTML=o,i.updateSC(0)}else i.sc.style.display="none"};i.keydownHandler=function(e){var t=window.event?e.keyCode:e.which;if((40==t||38==t)&&i.sc.innerHTML){var o,s=i.sc.querySelector(".autocomplete-suggestion.selected");return s?(o=40==t?s.nextSibling:s.previousSibling,o?(s.className=s.className.replace("selected",""),o.className+=" selected",i.value=o.getAttribute("data-val")):(s.className=s.className.replace("selected",""),i.value=i.last_val,o=0)):(o=40==t?i.sc.querySelector(".autocomplete-suggestion"):i.sc.childNodes[i.sc.childNodes.length-1],o.className+=" selected",i.value=o.getAttribute("data-val")),i.updateSC(0,o),!1}if(27==t)i.value=i.last_val,i.sc.style.display="none";else if(13==t||9==t){var s=i.sc.querySelector(".autocomplete-suggestion.selected");s&&"none"!=i.sc.style.display&&(l.onSelect(e,s.getAttribute("data-val"),s),setTimeout(function(){i.sc.style.display="none"},20))}},o(i,"keydown",i.keydownHandler),i.keyupHandler=function(e){var t=window.event?e.keyCode:e.which;if(!t||(35>t||t>40)&&13!=t&&27!=t){var o=i.value;if(o.length>=l.minChars){if(o!=i.last_val){if(i.last_val=o,clearTimeout(i.timer),l.cache){if(o in i.cache)return void r(i.cache[o]);for(var s=1;s<o.length-l.minChars;s++){var n=o.slice(0,o.length-s);if(n in i.cache&&!i.cache[n].length)return void r([])}}i.timer=setTimeout(function(){l.source(o,r)},l.delay)}}else i.last_val=o,i.sc.style.display="none"}},o(i,"keyup",i.keyupHandler),i.focusHandler=function(e){i.last_val="\n",i.keyupHandler(e)},l.minChars||o(i,"focus",i.focusHandler)}this.destroy=function(){for(var e=0;e<a.length;e++){var t=a[e];s(window,"resize",t.updateSC),s(t,"blur",t.blurHandler),s(t,"focus",t.focusHandler),s(t,"keydown",t.keydownHandler),s(t,"keyup",t.keyupHandler),t.autocompleteAttr?t.setAttribute("autocomplete",t.autocompleteAttr):t.removeAttribute("autocomplete"),document.body.removeChild(t.sc),t=null}}}}return e}();!function(){"function"==typeof define&&define.amd?define("autoComplete",function(){return autoComplete}):"undefined"!=typeof module&&module.exports?module.exports=autoComplete:window.autoComplete=autoComplete}();
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var hashClear = require('./_hashClear'),
    hashDelete = require('./_hashDelete'),
    hashGet = require('./_hashGet'),
    hashHas = require('./_hashHas'),
    hashSet = require('./_hashSet');

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;

},{"./_hashClear":52,"./_hashDelete":53,"./_hashGet":54,"./_hashHas":55,"./_hashSet":56}],2:[function(require,module,exports){
var listCacheClear = require('./_listCacheClear'),
    listCacheDelete = require('./_listCacheDelete'),
    listCacheGet = require('./_listCacheGet'),
    listCacheHas = require('./_listCacheHas'),
    listCacheSet = require('./_listCacheSet');

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;

},{"./_listCacheClear":63,"./_listCacheDelete":64,"./_listCacheGet":65,"./_listCacheHas":66,"./_listCacheSet":67}],3:[function(require,module,exports){
var getNative = require('./_getNative'),
    root = require('./_root');

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;

},{"./_getNative":48,"./_root":79}],4:[function(require,module,exports){
var mapCacheClear = require('./_mapCacheClear'),
    mapCacheDelete = require('./_mapCacheDelete'),
    mapCacheGet = require('./_mapCacheGet'),
    mapCacheHas = require('./_mapCacheHas'),
    mapCacheSet = require('./_mapCacheSet');

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;

},{"./_mapCacheClear":68,"./_mapCacheDelete":69,"./_mapCacheGet":70,"./_mapCacheHas":71,"./_mapCacheSet":72}],5:[function(require,module,exports){
var MapCache = require('./_MapCache'),
    setCacheAdd = require('./_setCacheAdd'),
    setCacheHas = require('./_setCacheHas');

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;

},{"./_MapCache":4,"./_setCacheAdd":80,"./_setCacheHas":81}],6:[function(require,module,exports){
var ListCache = require('./_ListCache'),
    stackClear = require('./_stackClear'),
    stackDelete = require('./_stackDelete'),
    stackGet = require('./_stackGet'),
    stackHas = require('./_stackHas'),
    stackSet = require('./_stackSet');

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;

},{"./_ListCache":2,"./_stackClear":84,"./_stackDelete":85,"./_stackGet":86,"./_stackHas":87,"./_stackSet":88}],7:[function(require,module,exports){
var root = require('./_root');

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;

},{"./_root":79}],8:[function(require,module,exports){
var root = require('./_root');

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;

},{"./_root":79}],9:[function(require,module,exports){
/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;

},{}],10:[function(require,module,exports){
var baseIndexOf = require('./_baseIndexOf');

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;

},{"./_baseIndexOf":22}],11:[function(require,module,exports){
/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;

},{}],12:[function(require,module,exports){
var baseTimes = require('./_baseTimes'),
    isArguments = require('./isArguments'),
    isArray = require('./isArray'),
    isBuffer = require('./isBuffer'),
    isIndex = require('./_isIndex'),
    isTypedArray = require('./isTypedArray');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;

},{"./_baseTimes":33,"./_isIndex":58,"./isArguments":95,"./isArray":96,"./isBuffer":99,"./isTypedArray":105}],13:[function(require,module,exports){
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;

},{}],14:[function(require,module,exports){
var baseAssignValue = require('./_baseAssignValue'),
    eq = require('./eq');

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;

},{"./_baseAssignValue":17,"./eq":92}],15:[function(require,module,exports){
var baseAssignValue = require('./_baseAssignValue'),
    eq = require('./eq');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;

},{"./_baseAssignValue":17,"./eq":92}],16:[function(require,module,exports){
var eq = require('./eq');

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;

},{"./eq":92}],17:[function(require,module,exports){
var defineProperty = require('./_defineProperty');

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;

},{"./_defineProperty":45}],18:[function(require,module,exports){
var isObject = require('./isObject');

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;

},{"./isObject":102}],19:[function(require,module,exports){
/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;

},{}],20:[function(require,module,exports){
var createBaseFor = require('./_createBaseFor');

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;

},{"./_createBaseFor":44}],21:[function(require,module,exports){
var Symbol = require('./_Symbol'),
    getRawTag = require('./_getRawTag'),
    objectToString = require('./_objectToString');

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;

},{"./_Symbol":7,"./_getRawTag":50,"./_objectToString":76}],22:[function(require,module,exports){
var baseFindIndex = require('./_baseFindIndex'),
    baseIsNaN = require('./_baseIsNaN'),
    strictIndexOf = require('./_strictIndexOf');

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;

},{"./_baseFindIndex":19,"./_baseIsNaN":25,"./_strictIndexOf":89}],23:[function(require,module,exports){
var SetCache = require('./_SetCache'),
    arrayIncludes = require('./_arrayIncludes'),
    arrayIncludesWith = require('./_arrayIncludesWith'),
    arrayMap = require('./_arrayMap'),
    baseUnary = require('./_baseUnary'),
    cacheHas = require('./_cacheHas');

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * The base implementation of methods like `_.intersection`, without support
 * for iteratee shorthands, that accepts an array of arrays to inspect.
 *
 * @private
 * @param {Array} arrays The arrays to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of shared values.
 */
function baseIntersection(arrays, iteratee, comparator) {
  var includes = comparator ? arrayIncludesWith : arrayIncludes,
      length = arrays[0].length,
      othLength = arrays.length,
      othIndex = othLength,
      caches = Array(othLength),
      maxLength = Infinity,
      result = [];

  while (othIndex--) {
    var array = arrays[othIndex];
    if (othIndex && iteratee) {
      array = arrayMap(array, baseUnary(iteratee));
    }
    maxLength = nativeMin(array.length, maxLength);
    caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
      ? new SetCache(othIndex && array)
      : undefined;
  }
  array = arrays[0];

  var index = -1,
      seen = caches[0];

  outer:
  while (++index < length && result.length < maxLength) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (!(seen
          ? cacheHas(seen, computed)
          : includes(result, computed, comparator)
        )) {
      othIndex = othLength;
      while (--othIndex) {
        var cache = caches[othIndex];
        if (!(cache
              ? cacheHas(cache, computed)
              : includes(arrays[othIndex], computed, comparator))
            ) {
          continue outer;
        }
      }
      if (seen) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseIntersection;

},{"./_SetCache":5,"./_arrayIncludes":10,"./_arrayIncludesWith":11,"./_arrayMap":13,"./_baseUnary":34,"./_cacheHas":35}],24:[function(require,module,exports){
var baseGetTag = require('./_baseGetTag'),
    isObjectLike = require('./isObjectLike');

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;

},{"./_baseGetTag":21,"./isObjectLike":103}],25:[function(require,module,exports){
/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;

},{}],26:[function(require,module,exports){
var isFunction = require('./isFunction'),
    isMasked = require('./_isMasked'),
    isObject = require('./isObject'),
    toSource = require('./_toSource');

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;

},{"./_isMasked":61,"./_toSource":90,"./isFunction":100,"./isObject":102}],27:[function(require,module,exports){
var baseGetTag = require('./_baseGetTag'),
    isLength = require('./isLength'),
    isObjectLike = require('./isObjectLike');

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;

},{"./_baseGetTag":21,"./isLength":101,"./isObjectLike":103}],28:[function(require,module,exports){
var isObject = require('./isObject'),
    isPrototype = require('./_isPrototype'),
    nativeKeysIn = require('./_nativeKeysIn');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;

},{"./_isPrototype":62,"./_nativeKeysIn":74,"./isObject":102}],29:[function(require,module,exports){
var Stack = require('./_Stack'),
    assignMergeValue = require('./_assignMergeValue'),
    baseFor = require('./_baseFor'),
    baseMergeDeep = require('./_baseMergeDeep'),
    isObject = require('./isObject'),
    keysIn = require('./keysIn');

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    if (isObject(srcValue)) {
      stack || (stack = new Stack);
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(object[key], srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;

},{"./_Stack":6,"./_assignMergeValue":14,"./_baseFor":20,"./_baseMergeDeep":30,"./isObject":102,"./keysIn":106}],30:[function(require,module,exports){
var assignMergeValue = require('./_assignMergeValue'),
    cloneBuffer = require('./_cloneBuffer'),
    cloneTypedArray = require('./_cloneTypedArray'),
    copyArray = require('./_copyArray'),
    initCloneObject = require('./_initCloneObject'),
    isArguments = require('./isArguments'),
    isArray = require('./isArray'),
    isArrayLikeObject = require('./isArrayLikeObject'),
    isBuffer = require('./isBuffer'),
    isFunction = require('./isFunction'),
    isObject = require('./isObject'),
    isPlainObject = require('./isPlainObject'),
    isTypedArray = require('./isTypedArray'),
    toPlainObject = require('./toPlainObject');

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = object[key],
      srcValue = source[key],
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;

},{"./_assignMergeValue":14,"./_cloneBuffer":38,"./_cloneTypedArray":39,"./_copyArray":40,"./_initCloneObject":57,"./isArguments":95,"./isArray":96,"./isArrayLikeObject":98,"./isBuffer":99,"./isFunction":100,"./isObject":102,"./isPlainObject":104,"./isTypedArray":105,"./toPlainObject":109}],31:[function(require,module,exports){
var identity = require('./identity'),
    overRest = require('./_overRest'),
    setToString = require('./_setToString');

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;

},{"./_overRest":78,"./_setToString":82,"./identity":93}],32:[function(require,module,exports){
var constant = require('./constant'),
    defineProperty = require('./_defineProperty'),
    identity = require('./identity');

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;

},{"./_defineProperty":45,"./constant":91,"./identity":93}],33:[function(require,module,exports){
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;

},{}],34:[function(require,module,exports){
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;

},{}],35:[function(require,module,exports){
/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;

},{}],36:[function(require,module,exports){
var isArrayLikeObject = require('./isArrayLikeObject');

/**
 * Casts `value` to an empty array if it's not an array like object.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array|Object} Returns the cast array-like object.
 */
function castArrayLikeObject(value) {
  return isArrayLikeObject(value) ? value : [];
}

module.exports = castArrayLikeObject;

},{"./isArrayLikeObject":98}],37:[function(require,module,exports){
var Uint8Array = require('./_Uint8Array');

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;

},{"./_Uint8Array":8}],38:[function(require,module,exports){
var root = require('./_root');

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

},{"./_root":79}],39:[function(require,module,exports){
var cloneArrayBuffer = require('./_cloneArrayBuffer');

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;

},{"./_cloneArrayBuffer":37}],40:[function(require,module,exports){
/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;

},{}],41:[function(require,module,exports){
var assignValue = require('./_assignValue'),
    baseAssignValue = require('./_baseAssignValue');

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;

},{"./_assignValue":15,"./_baseAssignValue":17}],42:[function(require,module,exports){
var root = require('./_root');

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;

},{"./_root":79}],43:[function(require,module,exports){
var baseRest = require('./_baseRest'),
    isIterateeCall = require('./_isIterateeCall');

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;

},{"./_baseRest":31,"./_isIterateeCall":59}],44:[function(require,module,exports){
/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;

},{}],45:[function(require,module,exports){
var getNative = require('./_getNative');

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;

},{"./_getNative":48}],46:[function(require,module,exports){
(function (global){
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],47:[function(require,module,exports){
var isKeyable = require('./_isKeyable');

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;

},{"./_isKeyable":60}],48:[function(require,module,exports){
var baseIsNative = require('./_baseIsNative'),
    getValue = require('./_getValue');

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;

},{"./_baseIsNative":26,"./_getValue":51}],49:[function(require,module,exports){
var overArg = require('./_overArg');

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;

},{"./_overArg":77}],50:[function(require,module,exports){
var Symbol = require('./_Symbol');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;

},{"./_Symbol":7}],51:[function(require,module,exports){
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;

},{}],52:[function(require,module,exports){
var nativeCreate = require('./_nativeCreate');

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;

},{"./_nativeCreate":73}],53:[function(require,module,exports){
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;

},{}],54:[function(require,module,exports){
var nativeCreate = require('./_nativeCreate');

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;

},{"./_nativeCreate":73}],55:[function(require,module,exports){
var nativeCreate = require('./_nativeCreate');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;

},{"./_nativeCreate":73}],56:[function(require,module,exports){
var nativeCreate = require('./_nativeCreate');

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;

},{"./_nativeCreate":73}],57:[function(require,module,exports){
var baseCreate = require('./_baseCreate'),
    getPrototype = require('./_getPrototype'),
    isPrototype = require('./_isPrototype');

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;

},{"./_baseCreate":18,"./_getPrototype":49,"./_isPrototype":62}],58:[function(require,module,exports){
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;

},{}],59:[function(require,module,exports){
var eq = require('./eq'),
    isArrayLike = require('./isArrayLike'),
    isIndex = require('./_isIndex'),
    isObject = require('./isObject');

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;

},{"./_isIndex":58,"./eq":92,"./isArrayLike":97,"./isObject":102}],60:[function(require,module,exports){
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;

},{}],61:[function(require,module,exports){
var coreJsData = require('./_coreJsData');

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;

},{"./_coreJsData":42}],62:[function(require,module,exports){
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;

},{}],63:[function(require,module,exports){
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;

},{}],64:[function(require,module,exports){
var assocIndexOf = require('./_assocIndexOf');

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;

},{"./_assocIndexOf":16}],65:[function(require,module,exports){
var assocIndexOf = require('./_assocIndexOf');

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;

},{"./_assocIndexOf":16}],66:[function(require,module,exports){
var assocIndexOf = require('./_assocIndexOf');

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;

},{"./_assocIndexOf":16}],67:[function(require,module,exports){
var assocIndexOf = require('./_assocIndexOf');

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;

},{"./_assocIndexOf":16}],68:[function(require,module,exports){
var Hash = require('./_Hash'),
    ListCache = require('./_ListCache'),
    Map = require('./_Map');

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;

},{"./_Hash":1,"./_ListCache":2,"./_Map":3}],69:[function(require,module,exports){
var getMapData = require('./_getMapData');

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;

},{"./_getMapData":47}],70:[function(require,module,exports){
var getMapData = require('./_getMapData');

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;

},{"./_getMapData":47}],71:[function(require,module,exports){
var getMapData = require('./_getMapData');

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;

},{"./_getMapData":47}],72:[function(require,module,exports){
var getMapData = require('./_getMapData');

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;

},{"./_getMapData":47}],73:[function(require,module,exports){
var getNative = require('./_getNative');

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;

},{"./_getNative":48}],74:[function(require,module,exports){
/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;

},{}],75:[function(require,module,exports){
var freeGlobal = require('./_freeGlobal');

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

},{"./_freeGlobal":46}],76:[function(require,module,exports){
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;

},{}],77:[function(require,module,exports){
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;

},{}],78:[function(require,module,exports){
var apply = require('./_apply');

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;

},{"./_apply":9}],79:[function(require,module,exports){
var freeGlobal = require('./_freeGlobal');

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;

},{"./_freeGlobal":46}],80:[function(require,module,exports){
/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;

},{}],81:[function(require,module,exports){
/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;

},{}],82:[function(require,module,exports){
var baseSetToString = require('./_baseSetToString'),
    shortOut = require('./_shortOut');

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;

},{"./_baseSetToString":32,"./_shortOut":83}],83:[function(require,module,exports){
/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;

},{}],84:[function(require,module,exports){
var ListCache = require('./_ListCache');

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;

},{"./_ListCache":2}],85:[function(require,module,exports){
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;

},{}],86:[function(require,module,exports){
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;

},{}],87:[function(require,module,exports){
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;

},{}],88:[function(require,module,exports){
var ListCache = require('./_ListCache'),
    Map = require('./_Map'),
    MapCache = require('./_MapCache');

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;

},{"./_ListCache":2,"./_Map":3,"./_MapCache":4}],89:[function(require,module,exports){
/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;

},{}],90:[function(require,module,exports){
/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;

},{}],91:[function(require,module,exports){
/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;

},{}],92:[function(require,module,exports){
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;

},{}],93:[function(require,module,exports){
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;

},{}],94:[function(require,module,exports){
var arrayMap = require('./_arrayMap'),
    baseIntersection = require('./_baseIntersection'),
    baseRest = require('./_baseRest'),
    castArrayLikeObject = require('./_castArrayLikeObject');

/**
 * Creates an array of unique values that are included in all given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of intersecting values.
 * @example
 *
 * _.intersection([2, 1], [2, 3]);
 * // => [2]
 */
var intersection = baseRest(function(arrays) {
  var mapped = arrayMap(arrays, castArrayLikeObject);
  return (mapped.length && mapped[0] === arrays[0])
    ? baseIntersection(mapped)
    : [];
});

module.exports = intersection;

},{"./_arrayMap":13,"./_baseIntersection":23,"./_baseRest":31,"./_castArrayLikeObject":36}],95:[function(require,module,exports){
var baseIsArguments = require('./_baseIsArguments'),
    isObjectLike = require('./isObjectLike');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;

},{"./_baseIsArguments":24,"./isObjectLike":103}],96:[function(require,module,exports){
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;

},{}],97:[function(require,module,exports){
var isFunction = require('./isFunction'),
    isLength = require('./isLength');

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;

},{"./isFunction":100,"./isLength":101}],98:[function(require,module,exports){
var isArrayLike = require('./isArrayLike'),
    isObjectLike = require('./isObjectLike');

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;

},{"./isArrayLike":97,"./isObjectLike":103}],99:[function(require,module,exports){
var root = require('./_root'),
    stubFalse = require('./stubFalse');

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

},{"./_root":79,"./stubFalse":108}],100:[function(require,module,exports){
var baseGetTag = require('./_baseGetTag'),
    isObject = require('./isObject');

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;

},{"./_baseGetTag":21,"./isObject":102}],101:[function(require,module,exports){
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;

},{}],102:[function(require,module,exports){
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;

},{}],103:[function(require,module,exports){
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;

},{}],104:[function(require,module,exports){
var baseGetTag = require('./_baseGetTag'),
    getPrototype = require('./_getPrototype'),
    isObjectLike = require('./isObjectLike');

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;

},{"./_baseGetTag":21,"./_getPrototype":49,"./isObjectLike":103}],105:[function(require,module,exports){
var baseIsTypedArray = require('./_baseIsTypedArray'),
    baseUnary = require('./_baseUnary'),
    nodeUtil = require('./_nodeUtil');

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;

},{"./_baseIsTypedArray":27,"./_baseUnary":34,"./_nodeUtil":75}],106:[function(require,module,exports){
var arrayLikeKeys = require('./_arrayLikeKeys'),
    baseKeysIn = require('./_baseKeysIn'),
    isArrayLike = require('./isArrayLike');

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;

},{"./_arrayLikeKeys":12,"./_baseKeysIn":28,"./isArrayLike":97}],107:[function(require,module,exports){
var baseMerge = require('./_baseMerge'),
    createAssigner = require('./_createAssigner');

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

module.exports = merge;

},{"./_baseMerge":29,"./_createAssigner":43}],108:[function(require,module,exports){
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;

},{}],109:[function(require,module,exports){
var copyObject = require('./_copyObject'),
    keysIn = require('./keysIn');

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;

},{"./_copyObject":41,"./keysIn":106}],110:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFieldInfo = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _utils = require('./utils');

var getFieldInfo = exports.getFieldInfo = function getFieldInfo(field, config) {
  if (config.fields[field] === undefined) {
    throw 'Incoherence between GUI and system fields: ' + field;
  }

  var fieldInfo = config.fields[field];
  var type = void 0;
  if (typeof fieldInfo === 'string') {
    type = fieldInfo;
  } else if ((typeof fieldInfo === 'undefined' ? 'undefined' : _typeof(fieldInfo)) === 'object') {
    type = fieldInfo.type;
  } else {
    throw 'Field defined wrong: ' + field;
  }

  var typeInfo = _utils.TYPES[type];
  if (typeInfo === undefined) {
    throw 'Unknown type for field: ' + field;
  }

  return [fieldInfo, type, typeInfo];
};

},{"./utils":135}],111:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _common = require('./common');

var configConditionAdd = function configConditionAdd(config) {
  var field = void 0;
  var operator = void 0;

  config.ps.on('field-updated', function (newField) {
    config.gui.add.disabled = false;
    field = newField;
  });

  config.ps.on('operator-updated', function (newOperator) {
    operator = newOperator;
  });

  config.gui.add.addEventListener('click', function addConditionClicked() {
    if (!field || !operator) {
      throw 'You can\'t add a condition without a field and an operator';
    }

    // jscs:disable disallowSpaceBeforeComma

    var _getFieldInfo = (0, _common.getFieldInfo)(field, config),
        _getFieldInfo2 = _slicedToArray(_getFieldInfo, 3),
        fieldInfo = _getFieldInfo2[0],
        type = _getFieldInfo2[1],
        typeInfo = _getFieldInfo2[2];
    // jscs:enable disallowSpaceBeforeComma

    var value = void 0;
    if ((typeof fieldInfo === 'undefined' ? 'undefined' : _typeof(fieldInfo)) === 'object' && _typeof(fieldInfo.list) === 'object') {
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
        config.ps.trigger('error', 'Only = and != operators are valid when value is null');
        return;
      }
    } else {
      try {
        value = typeInfo.validate(value);
      } catch (err) {
        config.ps.trigger('error', 'Invalid value for type ' + type + ': ' + value);
        return;
      }
    }

    config.conditions.push([field, operator, value]);
    config.ps.trigger('query-updated');
  });
};

exports.default = configConditionAdd;

},{"./common":110}],112:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var configConditionRemove = function configConditionRemove(config) {
  var selected = void 0;
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
      throw 'Without a condition selected it\'s impossible to remove it';
    }

    config.conditions.splice(selected, 1);
    config.ps.trigger('query-updated');
  });
};

exports.default = configConditionRemove;

},{}],113:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var configErrors = function configErrors(config) {
  var emptyErrors = function emptyErrors() {
    var errors = config.gui.errors;
    while (errors.firstChild) {
      errors.removeChild(errors.firstChild);
    }
  };

  config.ps.on('error', function (message) {
    emptyErrors();
    config.gui.errors.appendChild(document.createTextNode(message + ' (click to dismiss)'));
  });

  config.gui.errors.addEventListener('click', emptyErrors);
};

exports.default = configErrors;

},{}],114:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./utils');

var configFields = function configFields(config) {
  for (var field in config.fields) {
    if (config.fields.hasOwnProperty(field)) {
      config.gui.fields.appendChild((0, _utils.createOption)(field));
    }
  }

  config.gui.fields.addEventListener('change', function () {
    config.ps.trigger('field-updated', config.gui.fields.value);
  });
};

exports.default = configFields;

},{"./utils":135}],115:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _common = require('./common');

var _utils = require('./utils');

var configGraphicQuery = function configGraphicQuery(config) {
  var selected = void 0;

  var createGraphicCondition = function createGraphicCondition(condition, id) {
    // jscs:disable disallowSpaceBeforeComma
    // jscs:disable disallowTrailingComma
    // jscs:disable disallowSpacesInsideBrackets
    var _getFieldInfo = (0, _common.getFieldInfo)(condition[0], config),
        _getFieldInfo2 = _slicedToArray(_getFieldInfo, 2),
        type = _getFieldInfo2[1];
    // jscs:enable disallowSpaceBeforeComma
    // jscs:enable disallowTrailingComma
    // jscs:enable disallowSpacesInsideBrackets


    var li = document.createElement('li');
    var postfix = '';
    if (condition[2] === null) {
      postfix = ' qui-null';
    }
    li.className = 'qui-condition qui-' + type + postfix;
    li.id = '' + _utils.PREFIX + config.id + '-' + id;
    var span = void 0;
    var LABELS = ['field', 'operator', 'value'];
    for (var i = 0; i < 3; i++) {
      span = document.createElement('span');
      span.className = 'qui-cond-' + LABELS[i];
      span.appendChild(document.createTextNode(condition[i]));
      li.appendChild(span);
    }
    return li;
  };

  config.ps.on('query-updated', function () {
    var query = config.gui.query;
    selected = undefined;
    config.ps.trigger('condition-selected', undefined);
    while (query.firstChild) {
      query.removeChild(query.firstChild);
    }
    for (var i = 0, length = config.conditions.length; i < length; i++) {
      config.gui.query.appendChild(createGraphicCondition(config.conditions[i], i));
    }
  });

  config.gui.query.addEventListener('click', function queryClicked(ev) {
    var target = ev.target;
    var i = 0;
    while (!target.classList.contains('qui-condition') && !target.classList.contains('qui-graphic-query') && i < 10) {
      target = ev.target.parentNode;
      i++;
    }

    if (target.classList.contains('qui-condition')) {
      var newSelected = parseInt(target.id.replace('' + _utils.PREFIX + config.id + '-', ''), 10);
      if (selected === newSelected) {
        selected = undefined;
        target.classList.remove('qui-selected');
      } else if (selected !== undefined) {
        var oldSelected = document.getElementById('' + _utils.PREFIX + config.id + '-' + selected);
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

exports.default = configGraphicQuery;

},{"./common":110,"./utils":135}],116:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _utils = require('./utils');

var _common = require('./common');

var _intersection = require('lodash/intersection');

var _intersection2 = _interopRequireDefault(_intersection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fillOperators = function fillOperators(operators, config, def) {
  if (operators.indexOf(def) < 0 && operators.length > 0) {
    def = operators[0];
  }
  var guiEl = config.gui.operators;
  while (guiEl.firstChild) {
    guiEl.removeChild(guiEl.firstChild);
  }
  for (var i = 0, length = operators.length; i < length; i++) {
    config.gui.operators.appendChild((0, _utils.createOption)(operators[i], operators[i] === def));
  }
  config.ps.trigger('operator-updated', def);
};

var configOperators = function configOperators(config) {
  fillOperators(config.operators, config);

  config.ps.on('field-updated', function updateOperators(field) {
    // jscs:disable disallowSpaceBeforeComma
    var _getFieldInfo = (0, _common.getFieldInfo)(field, config),
        _getFieldInfo2 = _slicedToArray(_getFieldInfo, 3),
        typeInfo = _getFieldInfo2[2];
    // jscs:enable disallowSpaceBeforeComma

    fillOperators((0, _intersection2.default)(config.operators, typeInfo.operators), config, typeInfo.default);
  });

  config.gui.operators.addEventListener('change', function () {
    config.ps.trigger('operator-updated', config.gui.operators.value);
  });
};

exports.default = configOperators;

},{"./common":110,"./utils":135,"lodash/intersection":94}],117:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _utils = require('./utils');

var _common = require('./common');

var _main = require('./datetimepicker/main');

var _main2 = _interopRequireDefault(_main);

var _merge = require('lodash/merge');

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configValueInput = function configValueInput(config) {
  var valueId = '' + _utils.PREFIX + config.id + '-value';
  config.gui.value.id = valueId;
  config.gui.valueLabel.setAttribute('for', valueId);

  var acomplete = void 0;
  var loadAutoComplete = function loadAutoComplete(fieldInfo) {
    return new autoComplete({
      selector: '#' + _utils.PREFIX + config.id + ' .qui-value',
      source: function source(term, response) {
        var query = {};
        query[fieldInfo.mainParam || 'term'] = term;
        if (fieldInfo.otherParams) {
          query = (0, _merge2.default)(query, fieldInfo.otherParams);
        }
        (0, _utils.callURL)({
          url: fieldInfo.url,
          params: query,
          method: fieldInfo.method || 'GET'
        }, function (answer) {
          var data = fieldInfo.onSuccess(answer);
          response(data);
        });
      },
      renderItem: function renderItem(item, search) {
        search = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        var re = new RegExp('(' + search.split(' ').join('|') + ')', 'gi');
        var value = item[0];
        var show = item.length > 1 ? item[1] : item[0];
        return '<div class="autocomplete-suggestion" data-val="' + value + '">' + show.replace(re, '<b>$1</b>') + '</div>';
      }
    });
  };

  var picker = void 0;
  var loadPickerIfRequired = function loadPickerIfRequired(type) {
    if (type === 'datetime') {
      return (0, _main2.default)({
        input: config.gui.value
      });
    } else if (type === 'date') {
      return (0, _main2.default)({
        input: config.gui.value,
        withTime: false
      });
    } else if (type === 'time') {
      return (0, _main2.default)({
        input: config.gui.value,
        withDate: false
      });
    } else if (type === 'timestamp') {
      return (0, _main2.default)({
        input: config.gui.value,
        inputFunc: function inputFunc(value) {
          return new Date(parseInt(value, 10));
        },
        outputFunc: function outputFunc(date) {
          return date.getTime();
        }
      });
    } else {
      return undefined;
    }
  };

  config.ps.on('field-updated', function (field) {
    var _getFieldInfo = (0, _common.getFieldInfo)(field, config),
        _getFieldInfo2 = _slicedToArray(_getFieldInfo, 3),
        fieldInfo = _getFieldInfo2[0],
        type = _getFieldInfo2[1],
        typeInfo = _getFieldInfo2[2];

    config.gui.value.value = '';
    for (var i = 0, attributes = config.gui.value.attributes, length = attributes.length; i < length; i++) {
      if (['type', 'class', 'placeholder', 'id'].indexOf(attributes[i].nodeName) < 0) {
        config.gui.value.removeAttribute(attributes[i].nodeName);
      }
    }
    config.gui.userInput.classList.remove('qui-list-mode');
    if (picker) {
      picker.remove();
      picker = undefined;
    }
    if (acomplete) {
      acomplete.destroy();
      acomplete = undefined;
    }

    if ((typeof fieldInfo === 'undefined' ? 'undefined' : _typeof(fieldInfo)) === 'object') {
      if (_typeof(fieldInfo.list) === 'object' && typeof fieldInfo.list.length === 'number') {
        var listValue = config.gui.listValue;
        while (listValue.firstChild) {
          listValue.removeChild(listValue.firstChild);
        }
        for (var _i = 0, _length = fieldInfo.list.length; _i < _length; _i++) {
          listValue.appendChild((0, _utils.createOption)(fieldInfo.list[_i]));
        }
        config.gui.userInput.classList.add('qui-list-mode');
      } else if (typeof fieldInfo.url === 'string') {
        acomplete = loadAutoComplete(fieldInfo);
      } else {
        throw 'Complex type wrong defined for field: ' + field;
      }
    } else {
      picker = loadPickerIfRequired(type);
      if (typeof typeInfo.input === 'string') {
        config.gui.value.type = typeInfo.input;
      } else if (_typeof(typeInfo.input) === 'object') {
        for (var att in typeInfo.input) {
          if (typeInfo.input.hasOwnProperty(att)) {
            config.gui.value[att] = typeInfo.input[att];
          }
        }
      }
    }
  });
};

exports.default = configValueInput;

},{"./common":110,"./datetimepicker/main":124,"./utils":135,"lodash/merge":107}],118:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./utils');

var createGUI = function createGUI(config) {
  config.container.innerHTML = (0, _utils.generateHTML)(config.id);

  var gui = {};
  var selector = '#' + _utils.PREFIX + config.id;
  gui.fields = document.querySelector(selector + ' .qui-field');
  gui.operators = document.querySelector(selector + ' .qui-operator');
  gui.userInput = document.querySelector(selector + ' .qui-user-input');
  gui.value = document.querySelector(selector + ' .qui-value');
  gui.valueLabel = document.querySelector(selector + ' .qui-value-label');
  gui.listValue = document.querySelector(selector + ' .qui-list-value');
  gui.add = document.querySelector(selector + ' .qui-add');
  gui.query = document.querySelector(selector + ' .qui-graphic-query');
  gui.errors = document.querySelector(selector + ' .qui-errors');
  gui.remove = document.querySelector(selector + ' .qui-remove');

  //Validation
  for (var key in gui) {
    if (gui.hasOwnProperty(key)) {
      if (!(0, _utils.isDOMElement)(gui[key])) {
        throw 'GUI failed creating component: ' + key;
      }
    }
  }

  return gui;
};

exports.default = createGUI;

},{"./utils":135}],119:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _utils = require('./utils');

var configDateModify = function configDateModify(config) {
  var beforeClicked = function beforeClicked() {
    if (config.date.month === 0) {
      config.date.month = 11;
      config.date.year -= 1;
    } else {
      config.date.month -= 1;
    }
    config.date.weekDay1 = (0, _utils.getWeekDay1)(config.date.year, config.date.month);
    config.updateDate(config);
  };
  var afterClicked = function afterClicked() {
    if (config.date.month === 11) {
      config.date.month = 0;
      config.date.year += 1;
    } else {
      config.date.month += 1;
    }
    config.date.weekDay1 = (0, _utils.getWeekDay1)(config.date.year, config.date.month);
    config.updateDate(config);
  };
  var daysClicked = function daysClicked(e) {
    if (e.target.className === _utils.PREFIX + '-day') {
      var previousActive = config.gui.days.querySelectorAll('.' + _utils.PREFIX + '-day.' + _utils.PREFIX + '-active');
      if ((typeof previousActive === 'undefined' ? 'undefined' : _typeof(previousActive)) === 'object' && typeof previousActive.length === 'number') {
        for (var i = 0, length = previousActive.length; i < length; i++) {
          previousActive[i].classList.remove(_utils.PREFIX + '-active');
        }
      }
      e.target.classList.add(_utils.PREFIX + '-active');
      config.date.day = parseInt(e.target.innerText, 10);
    }
  };
  var timeChanged = function timeChanged(e) {
    console.log('eeeooo', e.target);
    if (e.target === config.gui.hour) {
      config.date.hour = parseInt(e.target.value, 10);
      e.target.value = (0, _utils.ensureDigits)(config.date.hour, 2);
    } else if (e.target === config.gui.min) {
      config.date.min = parseInt(e.target.value, 10);
      e.target.value = (0, _utils.ensureDigits)(config.date.min, 2);
    } else if (e.target === config.gui.sec) {
      config.date.sec = parseInt(e.target.value, 10);
      e.target.value = (0, _utils.ensureDigits)(config.date.sec, 2);
    } else if (e.target === config.gui.ms) {
      config.date.ms = parseInt(e.target.value, 10);
      e.target.value = (0, _utils.ensureDigits)(config.date.ms, 3);
    }
  };

  config.gui.before.addEventListener('click', beforeClicked);
  config.gui.after.addEventListener('click', afterClicked);
  config.gui.days.addEventListener('click', daysClicked);
  config.gui.time.addEventListener('change', timeChanged);

  var oldRemoveInstance = config.removeInstance;
  config.removeInstance = function removeDateModify() {
    config.gui.before.removeEventListener('click', beforeClicked);
    config.gui.after.removeEventListener('click', afterClicked);
    config.gui.days.removeEventListener('click', daysClicked);
    config.gui.time.removeEventListener('change', timeChanged);
    oldRemoveInstance();
  };
};

exports.default = configDateModify;

},{"./utils":128}],120:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./utils');

var configPickerOpening = function configPickerOpening(config) {
  var closePicker = void 0;
  var listenClicks = function documentClicked(e) {
    var target = e.target;
    var picker = config.gui.picker;
    var input = config.input;
    var limit = 0;
    while (target !== picker && target !== input && target !== document && target.parentNode && limit < 20) {
      target = target.parentNode;
      limit++;
    }
    if (target === document || !target.parentNode || limit === 20) {
      closePicker();
    }
  };
  var openPicker = function openPicker() {
    config.date = config.inputToDate(config);
    config.updateDate(config);
    config.container.classList.add(_utils.PREFIX + '-open');
    document.addEventListener('click', listenClicks);
  };
  closePicker = function closePicker(writing, now) {
    document.removeEventListener('click', listenClicks);
    config.container.classList.remove(_utils.PREFIX + '-open');
    if (writing) {
      config.dateToInput(config, now);
    }
  };
  var focused = function focused() {
    if (!config.container.classList.contains(_utils.PREFIX + '-open')) {
      openPicker();
    }
  };
  var onOK = function onOK() {
    closePicker('writing');
  };
  var onNow = function onNow() {
    closePicker('writing', 'now');
  };

  config.input.addEventListener('focus', focused);
  config.gui.ok.addEventListener('click', onOK);
  config.gui.now.addEventListener('click', onNow);

  var oldRemoveInstance = config.removeInstance;
  config.removeInstance = function removePickerOpening() {
    config.input.removeEventListener('focus', focused);
    config.gui.ok.removeEventListener('click', onOK);
    config.gui.now.removeEventListener('click', onNow);
    document.removeEventListener('click', listenClicks);
    oldRemoveInstance();
  };
};

exports.default = configPickerOpening;

},{"./utils":128}],121:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./utils');

var createGUI = function createGUI(config) {
  var picker = document.createElement('div');
  picker.className = _utils.PREFIX + '-picker';
  picker.innerHTML = (0, _utils.generateHTML)();
  picker.style.top = config.input.offsetHeight + 5 + 'px';
  config.container.appendChild(picker);

  var selector = '#' + _utils.PREFIX + '-' + config.id;
  var gui = {
    picker: picker
  };
  gui.month = document.querySelector(selector + ' .' + _utils.PREFIX + '-month');
  gui.before = document.querySelector(selector + ' .' + _utils.PREFIX + '-month-before');
  gui.after = document.querySelector(selector + ' .' + _utils.PREFIX + '-month-after');
  gui.days = document.querySelector(selector + ' .' + _utils.PREFIX + '-days');
  gui.time = document.querySelector(selector + ' .' + _utils.PREFIX + '-time-picker');
  gui.hour = document.querySelector(selector + ' .' + _utils.PREFIX + '-hour');
  gui.min = document.querySelector(selector + ' .' + _utils.PREFIX + '-minute');
  gui.sec = document.querySelector(selector + ' .' + _utils.PREFIX + '-second');
  gui.ms = document.querySelector(selector + ' .' + _utils.PREFIX + '-milisecond');
  gui.now = document.querySelector(selector + ' .' + _utils.PREFIX + '-now');
  gui.ok = document.querySelector(selector + ' .' + _utils.PREFIX + '-ok');

  //Validation
  for (var key in gui) {
    if (gui.hasOwnProperty(key)) {
      if (!(0, _utils.isDOMElement)(gui[key])) {
        throw 'GUI failed creating component: ' + key;
      }
    }
  }

  var oldRemoveInstance = config.removeInstance;
  config.removeInstance = function removeGUI() {
    config.container.removeChild(picker);
    oldRemoveInstance();
  };

  return gui;
};

exports.default = createGUI;

},{"./utils":128}],122:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var dateToInput = function dateToInput(config) {
  var now = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var date = void 0;
  if (now) {
    date = new Date();
  } else {
    var val = {
      year: config.withDate ? config.date.year : 1970,
      month: config.withDate ? config.date.month : 0,
      day: config.withDate ? config.date.day : 1,
      hour: config.withTime ? config.date.hour : 0,
      min: config.withTime ? config.date.min : 0,
      sec: config.withTime ? config.date.sec : 0,
      ms: config.withTime ? config.date.ms : 0
    };
    date = new Date(Date.UTC(val.year, val.month, val.day, val.hour, val.min, val.sec, val.ms));
  }

  var isoString = void 0;
  try {
    isoString = date.toISOString();
  } catch (err) {
    console.error('Invalid date/time. Nothing written', config.date);
    return;
  }

  var toWrite = void 0;

  if (config.outputFunc === 'toISOString') {
    toWrite = isoString;
  } else if (typeof config.outputFunc === 'string') {
    try {
      toWrite = date[config.outputFunc]();
    } catch (err) {
      console.error('Invalid output function.', err);
    }
  } else {
    try {
      toWrite = config.outputFunc(date);
    } catch (err) {
      console.error('Invalid output function.', err);
    }
  }

  if (toWrite !== undefined) {
    config.input.value = toWrite;
  }
};

exports.default = dateToInput;

},{}],123:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _utils = require('./utils');

var inputToDate = function inputToDate(config) {
  var buildDateObject = function buildDateObject(date) {
    var obj = {};
    if (config.withDate) {
      obj.year = date.getUTCFullYear();
      obj.month = date.getUTCMonth();
      obj.day = date.getUTCDate();
      obj.weekDay1 = (0, _utils.getWeekDay1)(obj.year, obj.month);
    }
    if (config.withTime) {
      obj.hour = date.getUTCHours();
      obj.min = date.getUTCMinutes();
      obj.sec = date.getUTCSeconds();
      obj.ms = date.getUTCMilliseconds();
    }
    return obj;
  };

  var date = config.inputFunc(config.input.value, config.withDate, config.withTime);

  if ((typeof date === 'undefined' ? 'undefined' : _typeof(date)) === 'object' && typeof date.toISOString === 'function') {
    try {
      date.toISOString();
    } catch (err) {
      return buildDateObject(new Date());
    }
  } else {
    return buildDateObject(new Date());
  }

  return buildDateObject(date);
};

exports.default = inputToDate;

},{"./utils":128}],124:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prepare_config = require('./prepare_config');

var _prepare_config2 = _interopRequireDefault(_prepare_config);

var _prepare_container = require('./prepare_container');

var _prepare_container2 = _interopRequireDefault(_prepare_container);

var _create_gui = require('./create_gui');

var _create_gui2 = _interopRequireDefault(_create_gui);

var _config_picker_opening = require('./config_picker_opening');

var _config_picker_opening2 = _interopRequireDefault(_config_picker_opening);

var _config_date_modify = require('./config_date_modify');

var _config_date_modify2 = _interopRequireDefault(_config_date_modify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var datetimepicker = function datetimepicker() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  try {
    var config = (0, _prepare_config2.default)(params);
    config.container = (0, _prepare_container2.default)(config);
    config.gui = (0, _create_gui2.default)(config);

    (0, _config_picker_opening2.default)(config);
    (0, _config_date_modify2.default)(config);

    return {
      remove: config.removeInstance
    };
  } catch (err) {
    console.error('Critical error:', err);
  }
};

exports.default = datetimepicker;

},{"./config_date_modify":119,"./config_picker_opening":120,"./create_gui":121,"./prepare_config":125,"./prepare_container":126}],125:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _input_to_date = require('./input_to_date');

var _input_to_date2 = _interopRequireDefault(_input_to_date);

var _date_to_input = require('./date_to_input');

var _date_to_input2 = _interopRequireDefault(_date_to_input);

var _update_date = require('./update_date');

var _update_date2 = _interopRequireDefault(_update_date);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prepareConfig = function prepareConfig(params) {
  var config = {
    input: (0, _utils.isDOMElement)(params.input) ? params.input : undefined,
    withDate: params.withDate === false || params.withDate === 'false' ? false : true,
    withTime: params.withTime === false || params.withTime === 'false' ? false : true,
    id: params.id !== undefined ? parseInt(params.id, 10) : 0,
    inputFunc: typeof params.inputFunc === 'function' ? params.inputFunc : _utils.DEF_INPUT_FUNC,
    outputFunc: typeof params.outputFunc === 'string' || typeof params.outputFunc === 'function' ? params.outputFunc : undefined,
    months: _typeof(params.months) === 'object' && params.months.length === 12 ? params.months : _utils.MONTHS,
    weekDays: _typeof(params.weekDays) === 'object' && params.weekDays.length === 7 ? params.weekDays : _utils.WEEK_DAYS,
    date: {
      year: 1970,
      month: 0,
      day: 1,
      weekDay1: 3,
      hour: 0,
      min: 0,
      sec: 0,
      ms: 0
    },
    inputToDate: _input_to_date2.default,
    dateToInput: _date_to_input2.default,
    updateDate: _update_date2.default,
    removeInstance: undefined
  };

  //Ensure non-existing ID for autogenerated values
  if (typeof config.id === 'number') {
    var el = void 0;
    do {
      config.id += 1;
      el = document.getElementById(_utils.PREFIX + '-' + config.id);
    } while (el);
    config.id = parseInt(config.id, 10);
  }

  if (!config.input) {
    throw 'Param `input` is mandarory';
  }
  if (!config.withDate && !config.withTime) {
    throw 'At least `date` or `time` has to be active';
  }

  //Output defaults
  if (config.outputFunc === undefined) {
    if (config.withDate && config.withTime) {
      config.outputFunc = 'toISOString';
    } else if (config.withDate) {
      config.outputFunc = function (date) {
        return date.toISOString().split('T')[0];
      };
    } else {
      //config.withTime
      config.outputFunc = function (date) {
        return date.toISOString().split('T')[1];
      };
    }
  }

  return config;
};

exports.default = prepareConfig;

},{"./date_to_input":122,"./input_to_date":123,"./update_date":127,"./utils":128}],126:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./utils');

var prepareContainer = function prepareContainer(config) {
  var container = document.createElement('div');
  container.className = _utils.PREFIX;
  container.id = _utils.PREFIX + '-' + config.id;

  if (config.withDate) {
    container.classList.add(_utils.PREFIX + '-with-date');
  }
  if (config.withTime) {
    container.classList.add(_utils.PREFIX + '-with-time');
  }

  var parent = config.input.parentNode;
  parent.insertBefore(container, config.input);
  parent.removeChild(config.input);
  container.appendChild(config.input);

  config.removeInstance = function removeContainer() {
    config.container.parentNode.insertBefore(config.input, config.container);
    config.container.parentNode.removeChild(config.container);
  };

  return container;
};

exports.default = prepareContainer;

},{"./utils":128}],127:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./utils');

var updateDate = function updateDate(config) {
  if (config.withDate) {
    config.gui.month.innerText = config.months[config.date.month] + ' ' + config.date.year;

    var days = config.gui.days;
    while (days.firstChild) {
      days.removeChild(days.firstChild);
    }
    for (var i = 0; i < config.date.weekDay1; i++) {
      days.appendChild(document.createElement('div'));
    }
    for (var _i = 1, total = (0, _utils.getMonthDays)(config.date.month, config.date.year), day; _i <= total; _i++) {
      day = document.createElement('div');
      day.classList.add(_utils.PREFIX + '-day');
      if (_i === config.date.day) {
        day.classList.add(_utils.PREFIX + '-active');
      }
      day.appendChild(document.createTextNode(_i));
      days.appendChild(day);
    }
  }

  if (config.withTime) {
    config.gui.hour.value = (0, _utils.ensureDigits)(config.date.hour, 2);
    config.gui.min.value = (0, _utils.ensureDigits)(config.date.min, 2);
    config.gui.sec.value = (0, _utils.ensureDigits)(config.date.sec, 2);
    config.gui.ms.value = (0, _utils.ensureDigits)(config.date.ms, 3);
  }
};

exports.default = updateDate;

},{"./utils":128}],128:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isDOMElement = exports.isDOMElement = function isDOMElement(o) {
  return (typeof HTMLElement === 'undefined' ? 'undefined' : _typeof(HTMLElement)) === 'object' ? o instanceof HTMLElement : //DOM2
  o && (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object' && o !== null && o.nodeType === 1 && typeof o.nodeName === 'string';
};

var ensureDigits = exports.ensureDigits = function ensureDigits(num, digits) {
  var snum = num.toString();
  while (snum.length < digits) {
    snum = '0' + snum;
  }
  return snum;
};

var getWeekDay1 = exports.getWeekDay1 = function getWeekDay1(year, month) {
  return (7 + new Date(Date.UTC(year, month)).getUTCDay() - 1) % 7;
};

var PREFIX = exports.PREFIX = 'dtp';

var MONTH_DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//For leap years
var getMonthDays = exports.getMonthDays = function getMonthDays(month, year) {
  if (month === 1 && year % 4 === 0) {
    return 29;
  } else {
    return MONTH_DAYS[month];
  }
};

var DEF_INPUT_FUNC = exports.DEF_INPUT_FUNC = function defInputFunc(input, withDate, withTime) {
  if (withDate) {
    return new Date(input);
  } else if (withTime) {
    var time = input.replace('Z', '').split(':');
    if (time.length === 3) {
      var sec = time[2].split('.');
      if (sec.length === 2) {
        return new Date(Date.UTC(1970, 0, 1, time[0], time[1], sec[0], sec[1]));
      } else if (sec.length === 1) {
        return new Date(Date.UTC(1970, 0, 1, time[0], time[1], time[2]));
      }
    }
  }
};

var MONTHS = exports.MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var WEEK_DAYS = exports.WEEK_DAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

var STYLE = '<style>\n  .dtp {\n    position: relative;\n  }\n  .dtp .dtp-picker {\n    font-family: sans-serif;\n    text-align: center;\n    font-size: 0.8em;\n    position: absolute;\n    left: 0;\n    background-color: #fff;\n    width: 15em;\n    border: solid 1px #ccc;\n    border-radius: 0.25em;\n    padding: 0.5em;\n    display: none;\n  }\n    .dtp.dtp-open .dtp-picker {\n      display: block;\n    }\n  .dtp .dtp-calendar {\n    display: none;\n  }\n    .dtp.dtp-with-date .dtp-calendar {\n      display: block;\n    }\n  .dtp .dtp-month-picker {\n    display: flex;\n    font-weight: bold;\n    padding-bottom: 0.75em;\n  }\n  .dtp .dtp-month, .dtp .dtp-month-pick, .dtp .dtp-week-days > div,\n  .dtp .dtp-days > div {\n    width: 14.2857%;\n    box-sizing: border-box;\n    padding: 0.25em;\n  }\n  .dtp .dtp-month {\n    width: 100%;\n  }\n  .dtp .dtp-month-pick, .dtp .dtp-day {\n    cursor: pointer;\n    border-radius: 0.25em;\n  }\n    .dtp .dtp-month-pick:hover, .dtp .dtp-day:hover {\n      background-color: #ccc;\n    }\n  .dtp .dtp-week-days {\n    font-weight: bold;\n    padding-bottom: 0.25em;\n  }\n  .dtp .dtp-week-days, .dtp .dtp-days {\n    display: flex;\n    flex-wrap: wrap;\n  }\n  .dtp .dtp-day.dtp-active {\n    background-color: #666;\n    color: #fff;\n    cursor: default;\n  }\n  .dtp .dtp-time-picker {\n    padding: 0.5em 0.25em 0.25em;\n    display: none;\n  }\n  .dtp.dtp-with-time .dtp-time-picker, .dtp .dtp-buttons {\n    display: flex;\n    align-items: flex-end;\n  }\n    .dtp .dtp-time-decorator {\n      flex-grow: 1;\n      width: 5%;\n      padding-bottom: 0.25em;\n    }\n    .dtp .dtp-two-digits {\n      flex-grow: 2;\n      box-sizing: border-box;\n      width: 20%;\n    }\n    .dtp .dtp-three-digits {\n      flex-grow: 3;\n      box-sizing: border-box;\n      width: 25%;\n    }\n  .dtp .dtp-buttons {\n    padding: 0.5em 0.25em 0.25em;\n  }\n  .dtp button {\n    width: 50%;\n  }\n  .dtp .dtp-ok {\n    margin-left: 0.5em;\n  }\n</style>';

var generateHTML = exports.generateHTML = function generateHTML() {
  return STYLE + '\n<div class="' + PREFIX + '-calendar">\n  <div class="' + PREFIX + '-month-picker">\n    <div class="dtp-month-before dtp-month-pick">&#x276e;</div>\n    <div class="dtp-month"></div>\n    <div class="dtp-month-after dtp-month-pick">&#x276f;</div>\n  </div>\n  <div class="dtp-day-picker">\n    <div class="dtp-week-days">\n      <div class="dtp-week-day">Mo</div>\n      <div class="dtp-week-day">Tu</div>\n      <div class="dtp-week-day">We</div>\n      <div class="dtp-week-day">Th</div>\n      <div class="dtp-week-day">Fr</div>\n      <div class="dtp-week-day">Sa</div>\n      <div class="dtp-week-day">Su</div>\n    </div>\n    <div class="dtp-days"></div>\n  </div>\n</div>\n<div class="dtp-time-picker">\n  <input class="dtp-hour dtp-two-digits" type="number" min="0" max="23">\n  <span class="dtp-time-decorator">:</span>\n  <input class="dtp-minute dtp-two-digits" type="number" min="0" max="59">\n  <span class="dtp-time-decorator">:</span>\n  <input class="dtp-second dtp-two-digits" type="number" min="0" max="59">\n  <span class="dtp-time-decorator">.</span>\n  <input class="dtp-milisecond dtp-three-digits" type="number" min="0"\n    max="999">\n</div>\n<div class="dtp-buttons">\n  <button class="dtp-now">Now</button>\n  <button class="dtp-ok">OK</button>\n</div>';
};

},{}],129:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _main = require('./main');

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* globals define, module */
(function (factory) {
  var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;

  if (typeof define === 'function' && define.amd) {
    define(function () {
      return root.queryUI = factory();
    });
  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
    var _queryUI = factory();
    module.exports = _queryUI;
    root.queryUI = _queryUI;
  } else {
    root.queryUI = factory();
  }
})(function () {
  return _main2.default;
}, undefined);

},{"./main":130}],130:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prepare_config = require('./prepare_config');

var _prepare_config2 = _interopRequireDefault(_prepare_config);

var _create_gui = require('./create_gui');

var _create_gui2 = _interopRequireDefault(_create_gui);

var _config_fields = require('./config_fields');

var _config_fields2 = _interopRequireDefault(_config_fields);

var _config_operators = require('./config_operators');

var _config_operators2 = _interopRequireDefault(_config_operators);

var _config_value_input = require('./config_value_input');

var _config_value_input2 = _interopRequireDefault(_config_value_input);

var _config_condition_add = require('./config_condition_add');

var _config_condition_add2 = _interopRequireDefault(_config_condition_add);

var _config_condition_remove = require('./config_condition_remove');

var _config_condition_remove2 = _interopRequireDefault(_config_condition_remove);

var _config_graphic_query = require('./config_graphic_query');

var _config_graphic_query2 = _interopRequireDefault(_config_graphic_query);

var _config_errors = require('./config_errors');

var _config_errors2 = _interopRequireDefault(_config_errors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var queryUI = function queryUI() {
  var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var config = (0, _prepare_config2.default)(input);
  config.gui = (0, _create_gui2.default)(config);

  //Error management
  (0, _config_errors2.default)(config);

  //Conditions
  (0, _config_condition_add2.default)(config);
  (0, _config_condition_remove2.default)(config);
  (0, _config_graphic_query2.default)(config);

  //Input
  (0, _config_operators2.default)(config);
  (0, _config_fields2.default)(config);
  (0, _config_value_input2.default)(config);

  return {
    query: function getQuery() {
      return config.conditions;
    },
    parsed: function getParsed() {
      return config.parseFunc(config.conditions);
    }
  };
};

exports.default = queryUI;

},{"./config_condition_add":111,"./config_condition_remove":112,"./config_errors":113,"./config_fields":114,"./config_graphic_query":115,"./config_operators":116,"./config_value_input":117,"./create_gui":118,"./prepare_config":133}],131:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_FUNC = exports.PARSE_FUNCS = undefined;

var _parse_query_string = require('./parse_query_string');

var _parse_query_string2 = _interopRequireDefault(_parse_query_string);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PARSE_FUNCS = exports.PARSE_FUNCS = {
  'query-string': _parse_query_string2.default
};

var DEFAULT_FUNC = exports.DEFAULT_FUNC = 'query-string';

},{"./parse_query_string":132}],132:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var parseQueryString = function parseQueryString(query) {
  var queryString = '';
  for (var i = 0, length = query.length; i < length; i++) {
    if (query[i][1] === '=') {
      if (queryString.length > 0) {
        queryString += '&';
      }
      queryString += encodeURIComponent(query[i][0]);
      queryString += '=';
      queryString += encodeURIComponent(query[i][2]);
    }
  }
  return queryString;
};

exports.default = parseQueryString;

},{}],133:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _utils = require('./utils');

var _index = require('./parse_funcs/index');

var _pubsub = require('./pubsub');

var _pubsub2 = _interopRequireDefault(_pubsub);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prepareConfig = function prepareConfig(input) {
  var config = {
    fields: _typeof(input.fields) === 'object' ? input.fields : undefined,
    container: (0, _utils.isDOMElement)(input.container) ? input.container : undefined,
    parseFunc: typeof input.parseFunc === 'function' ? input.parseFunc : typeof input.parseFunc === 'string' && typeof _index.PARSE_FUNCS[input.parseFunc] === 'function' ? _index.PARSE_FUNCS[input.parseFunc] : _index.PARSE_FUNCS[_index.DEFAULT_FUNC],
    id: input.id !== undefined ? parseInt(input.id, 10) : 0,
    operators: _typeof(input.operators) === 'object' && typeof input.operators.length === 'number' ? input.operators : _utils.OPERATORS,
    ps: (0, _pubsub2.default)(),
    conditions: []
  };

  //Ensure non-existing ID for autogenerated values
  if (typeof config.id === 'number') {
    var el = void 0;
    do {
      config.id += 1;
      el = document.getElementById('' + _utils.PREFIX + config.id);
    } while (el);
    config.id = parseInt(config.id, 10);
  }

  if (!config.fields || !config.container) {
    throw 'Params `fields` and `container` are mandarory';
  }

  return config;
};

exports.default = prepareConfig;

},{"./parse_funcs/index":131,"./pubsub":134,"./utils":135}],134:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var pubsub = function pubsub() {
  var subs = [];

  var on = function on(ev, handler) {
    if (!ev || typeof ev !== 'string' || typeof handler !== 'function') {
      throw 'pubsub on needs a valid event name and a handler function';
    }

    if (subs[ev] === undefined) {
      subs[ev] = [];
    }
    subs[ev].push(handler);
  };

  var off = function off(ev, handler) {
    if (!ev && ev !== undefined || ev && typeof ev !== 'string' || !handler && handler !== undefined || handler && typeof handler !== 'function' || ev === undefined && handler !== undefined) {
      throw 'pubsub off needs a valid event name (if provided) and a handler ' + 'function (if provided). Also you can\'t provide a handler but not an ' + 'event name.';
    }

    if (ev) {
      if (handler) {
        if (subs[ev]) {
          for (var i = 0, length = subs[ev].length; i < length; i++) {
            if (subs[ev][i] === handler) {
              subs[ev].splice(i, 1);
              break;
            }
          }
        }
      } else {
        subs[ev] = undefined;
      }
    } else {
      subs = [];
    }
  };

  var trigger = function trigger(ev, input) {
    if (!ev || typeof ev !== 'string') {
      throw 'pubsub trigger needs a valid event name';
    }

    if (subs[ev]) {
      for (var i = 0, length = subs[ev].length; i < length; i++) {
        subs[ev][i](input);
      }
    }
  };

  return {
    on: on,
    off: off,
    trigger: trigger
  };
};

exports.default = pubsub;

},{}],135:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var ajax = {};
ajax.x = function () {
  if (typeof XMLHttpRequest !== 'undefined') {
    return new XMLHttpRequest();
  }
  var versions = ['MSXML2.XmlHttp.6.0', 'MSXML2.XmlHttp.5.0', 'MSXML2.XmlHttp.4.0', 'MSXML2.XmlHttp.3.0', 'MSXML2.XmlHttp.2.0', 'Microsoft.XmlHttp'];

  var xhr = void 0;
  for (var i = 0; i < versions.length; i++) {
    try {
      xhr = new ActiveXObject(versions[i]);
      break;
    } catch (e) {}
  }
  return xhr;
};

ajax.send = function (url, callback, method, data, async) {
  if (async === undefined) {
    async = true;
  }
  var x = ajax.x();
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
  var query = [];
  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
    }
  }
  var concat = url.indexOf('?') >= 0 ? '&' : '?';
  ajax.send(url + (query.length ? concat + query.join('&') : ''), callback, 'GET', null, async);
};

ajax.post = function (url, data, callback, async) {
  var query = [];
  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
    }
  }
  ajax.send(url, callback, 'POST', query.join('&'), async);
};

var isDOMElement = exports.isDOMElement = function isDOMElement(o) {
  return (typeof HTMLElement === 'undefined' ? 'undefined' : _typeof(HTMLElement)) === 'object' ? o instanceof HTMLElement : //DOM2
  o && (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object' && o !== null && o.nodeType === 1 && typeof o.nodeName === 'string';
};

var createOption = exports.createOption = function createOption(value) {
  var selected = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var option = document.createElement('option');
  option.value = value;
  option.selected = selected;
  option.appendChild(document.createTextNode(value));
  return option;
};

var callURL = exports.callURL = function callURL(params, onSuccess) {
  var ajaxCall = params.method === 'POST' ? ajax.post : ajax.get;
  ajaxCall(params.url, params.params, onSuccess);
};

var MAIN_PARAM = exports.MAIN_PARAM = 'term';

var OPERATORS = exports.OPERATORS = ['=', '<', '>', '<=', '>=', '!=', 'like'];

var TYPES = exports.TYPES = {
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
      var num = parseInt(value, 10);
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
      var num = parseFloat(value);
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
          return new Date(value).toISOString();
        } catch (err) {}
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
          return new Date(value).toISOString().split('T')[0];
        } catch (err) {}
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
          return new Date('1970-01-01T' + value).toISOString().split('T')[1];
        } catch (err) {}
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
          new Date(parseInt(value, 10)).toISOString();
        } catch (err) {
          throw 'Invalid value';
        }
        return value;
      }
      throw 'Invalid value';
    }
  }
};

var PREFIX = exports.PREFIX = 'qui-';

var STYLE = '<style>\n  /*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */\n  /*Only the forms section and modified to affect only things under .qui class*/\n  .qui button,.qui input,.qui optgroup,.qui select,.qui textarea{\n  font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}.qui button,\n  .qui input{overflow:visible}.qui button,.qui select{text-transform:none}\n  .qui button,html .qui [type="button"],.qui [type="reset"],\n  .qui [type="submit"]{-webkit-appearance:button}.qui button::-moz-focus-inner,\n  .qui [type="button"]::-moz-focus-inner,.qui [type="reset"]::-moz-focus-inner,\n  .qui [type="submit"]::-moz-focus-inner{border-style:none;padding:0}\n  .qui button:-moz-focusring,.qui [type="button"]:-moz-focusring,\n  .qui [type="reset"]:-moz-focusring,.qui [type="submit"]:-moz-focusring{\n  outline:1px dotted ButtonText}.qui fieldset{border:1px solid silver;\n  margin:0 2px;padding:.35em .625em .75em}.qui [type="checkbox"],\n  .qui [type="radio"]{box-sizing:border-box;padding:0}\n  .qui [type="number"]::-webkit-inner-spin-button,\n  .qui [type="number"]::-webkit-outer-spin-button{height:auto}\n  .qui [type="search"]{-webkit-appearance:textfield;outline-offset:-2px}\n  .qui [type="search"]::-webkit-search-cancel-button,\n  .qui [type="search"]::-webkit-search-decoration{-webkit-appearance:none}\n\n  .autocomplete-suggestions{font-family:sans-serif;font-size:.8em;\n  text-align:left;cursor:default;border:1px solid #ccc;border-top:0;\n  background:#fff;box-shadow:-1px 1px 3px rgba(0,0,0,.1);position:absolute;\n  display:none;z-index:9999;max-height:254px;overflow:hidden;overflow-y:auto;\n  box-sizing:border-box}.autocomplete-suggestion{position:relative;\n  padding:0 .6em;line-height:23px;white-space:nowrap;overflow:hidden;\n  text-overflow:ellipsis;font-size:1.02em;color:#333}.autocomplete-suggestion b{\n  font-weight:400;color:#1f8dd6}\n  .autocomplete-suggestion.selected{background:#f0f0f0}\n\n  .qui {\n    max-width: 40em;\n    font-family: sans-serif;\n    margin: auto;\n  }\n    .qui select, .qui input, .qui button {\n      padding: 0.5em;\n      box-sizing: border-box;\n    }\n      .qui .dtp-picker input, .qui .dtp-picker button {\n        padding: initial;\n      }\n    .qui .qui-input {\n      display: flex;\n    }\n    .qui .qui-field {\n      flex-grow: 1;\n    }\n    .qui .qui-operator {\n      margin: 0 1em;\n      min-width: 4em;\n    }\n    .qui-user-input {\n      width: 35%;\n      min-height: 6em;\n    }\n    .qui .qui-value, .qui .qui-list-value, .qui .qui-add {\n      display: block;\n      width: 100%;\n    }\n    .qui .qui-value, .qui .qui-list-value {\n      margin-bottom: 1em;\n    }\n      .qui .qui-value[type=\'checkbox\'] {\n        display: inline-block;\n        width: auto;\n      }\n      .qui .qui-value[type=\'checkbox\'] + .qui-value-label:after {\n        content: \'false\';\n        padding-left: 0.5em;\n        vertical-align: middle;\n      }\n      .qui .qui-value[type=\'checkbox\']:checked + .qui-value-label:after {\n        content: \'true\';\n      }\n    .qui .qui-list-value, .qui .qui-user-input.qui-list-mode .qui-value {\n      display: none;\n    }\n    .qui .qui-user-input.qui-list-mode .qui-list-value {\n      display: block;\n    }\n    .qui .qui-graphic-query {\n      padding: 0;\n      background-color: #444;\n      color: #ccc;\n      list-style: none;\n    }\n      .qui .qui-graphic-query:after {\n        content: \'\';\n        display: block;\n        clear: left;\n        text-align: center;\n        color: #aaa;\n      }\n      .qui .qui-graphic-query:empty:after {\n        content: \'empty query\';\n        padding: 0.5em;\n      }\n    .qui .qui-condition {\n      float: left;\n      padding: 0.5em;\n      cursor: pointer;\n    }\n      .qui .qui-condition:hover {\n        background-color: #555;\n      }\n      .qui .qui-condition.qui-selected {\n        background-color: #666;\n      }\n      .qui .qui-condition:before {\n        content: \'and\';\n        display: inline-block;\n        padding-right: 1em;\n      }\n      .qui .qui-condition:first-child:before {\n        display: none;\n      }\n      .qui .qui-condition:after {\n        content: \')\';\n        padding-left: 0.25em;\n      }\n    .qui .qui-cond-field {\n      color: #fbffcc;\n    }\n      .qui .qui-cond-field:before {\n        content: \'(\';\n        color: #ccc;\n        padding-right: 0.25em;\n      }\n    .qui .qui-cond-operator {\n      color: #fcc;\n      padding: 0 0.4em;\n    }\n    .qui .qui-cond-value {\n      color: #8eeeff;\n    }\n      .qui .qui-string .qui-cond-value:before,\n      .qui .qui-string .qui-cond-value:after,\n      .qui .qui-datetime .qui-cond-value:before,\n      .qui .qui-datetime .qui-cond-value:after,\n      .qui .qui-date .qui-cond-value:before,\n      .qui .qui-date .qui-cond-value:after,\n      .qui .qui-time .qui-cond-value:before,\n      .qui .qui-time .qui-cond-value:after,\n      .qui .qui-timestamp .qui-cond-value:before,\n      .qui .qui-timestamp .qui-cond-value:after {\n        content: \'"\';\n      }\n    .qui .qui-null .qui-cond-value {\n      color: #c9a7e6;\n      font-style: italic;\n    }\n      .qui .qui-string.qui-null .qui-cond-value:before,\n      .qui .qui-string.qui-null .qui-cond-value:after,\n      .qui .qui-datetime.qui-null .qui-cond-value:before,\n      .qui .qui-datetime.qui-null .qui-cond-value:after,\n      .qui .qui-date.qui-null .qui-cond-value:before,\n      .qui .qui-date.qui-null .qui-cond-value:after,\n      .qui .qui-time.qui-null .qui-cond-value:before,\n      .qui .qui-time.qui-null .qui-cond-value:after {\n        content: \'\';\n      }\n    .qui .qui-last-part {\n      display: flex;\n      align-items: flex-start;\n    }\n    .qui .qui-errors {\n      flex-grow: 1;\n      order: 1;\n      font-size: 0.8em;\n      color: #b00;\n      cursor: default;\n    }\n    .qui .qui-remove {\n      display: block;\n      width: 35%;\n      order: 2;\n    }\n</style>';

var generateHTML = exports.generateHTML = function generateHTML(id) {
  return '<div class="qui" id="qui-' + id + '">\n    ' + STYLE + '\n    <div class="qui-input">\n      <select class="qui-field" size="2"></select>\n      <select class="qui-operator" size="2"></select>\n      <div class="qui-user-input">\n        <input type="text" class="qui-value" placeholder="null">\n        <label class="qui-value-label"></label>\n        <select class="qui-list-value"></select>\n        <button class="qui-add" disabled>Add condition</button>\n      </div>\n    </div>\n    <div class="qui-editor">\n      <ul class="qui-graphic-query"></ul>\n      <div class="qui-last-part">\n        <button class="qui-remove" disabled>Remove condition</button>\n        <div class="qui-errors"></div>\n      </div>\n    </div>\n  </div>';
};

},{}]},{},[129]);
