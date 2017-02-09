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

},{"./_hashClear":30,"./_hashDelete":31,"./_hashGet":32,"./_hashHas":33,"./_hashSet":34}],2:[function(require,module,exports){
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

},{"./_listCacheClear":37,"./_listCacheDelete":38,"./_listCacheGet":39,"./_listCacheHas":40,"./_listCacheSet":41}],3:[function(require,module,exports){
var getNative = require('./_getNative'),
    root = require('./_root');

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;

},{"./_getNative":27,"./_root":50}],4:[function(require,module,exports){
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

},{"./_mapCacheClear":42,"./_mapCacheDelete":43,"./_mapCacheGet":44,"./_mapCacheHas":45,"./_mapCacheSet":46}],5:[function(require,module,exports){
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

},{"./_MapCache":4,"./_setCacheAdd":51,"./_setCacheHas":52}],6:[function(require,module,exports){
var root = require('./_root');

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;

},{"./_root":50}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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

},{"./_baseIndexOf":14}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
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

},{"./eq":58}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
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

},{"./_Symbol":6,"./_getRawTag":28,"./_objectToString":48}],14:[function(require,module,exports){
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

},{"./_baseFindIndex":12,"./_baseIsNaN":16,"./_strictIndexOf":55}],15:[function(require,module,exports){
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

},{"./_SetCache":5,"./_arrayIncludes":8,"./_arrayIncludesWith":9,"./_arrayMap":10,"./_baseUnary":20,"./_cacheHas":21}],16:[function(require,module,exports){
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

},{}],17:[function(require,module,exports){
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

},{"./_isMasked":36,"./_toSource":56,"./isFunction":63,"./isObject":65}],18:[function(require,module,exports){
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

},{"./_overRest":49,"./_setToString":53,"./identity":59}],19:[function(require,module,exports){
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

},{"./_defineProperty":24,"./constant":57,"./identity":59}],20:[function(require,module,exports){
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

},{}],21:[function(require,module,exports){
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

},{}],22:[function(require,module,exports){
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

},{"./isArrayLikeObject":62}],23:[function(require,module,exports){
var root = require('./_root');

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;

},{"./_root":50}],24:[function(require,module,exports){
var getNative = require('./_getNative');

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;

},{"./_getNative":27}],25:[function(require,module,exports){
(function (global){
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],26:[function(require,module,exports){
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

},{"./_isKeyable":35}],27:[function(require,module,exports){
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

},{"./_baseIsNative":17,"./_getValue":29}],28:[function(require,module,exports){
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

},{"./_Symbol":6}],29:[function(require,module,exports){
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

},{}],30:[function(require,module,exports){
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

},{"./_nativeCreate":47}],31:[function(require,module,exports){
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

},{}],32:[function(require,module,exports){
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

},{"./_nativeCreate":47}],33:[function(require,module,exports){
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

},{"./_nativeCreate":47}],34:[function(require,module,exports){
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

},{"./_nativeCreate":47}],35:[function(require,module,exports){
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

},{}],36:[function(require,module,exports){
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

},{"./_coreJsData":23}],37:[function(require,module,exports){
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

},{}],38:[function(require,module,exports){
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

},{"./_assocIndexOf":11}],39:[function(require,module,exports){
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

},{"./_assocIndexOf":11}],40:[function(require,module,exports){
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

},{"./_assocIndexOf":11}],41:[function(require,module,exports){
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

},{"./_assocIndexOf":11}],42:[function(require,module,exports){
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

},{"./_Hash":1,"./_ListCache":2,"./_Map":3}],43:[function(require,module,exports){
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

},{"./_getMapData":26}],44:[function(require,module,exports){
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

},{"./_getMapData":26}],45:[function(require,module,exports){
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

},{"./_getMapData":26}],46:[function(require,module,exports){
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

},{"./_getMapData":26}],47:[function(require,module,exports){
var getNative = require('./_getNative');

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;

},{"./_getNative":27}],48:[function(require,module,exports){
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

},{}],49:[function(require,module,exports){
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

},{"./_apply":7}],50:[function(require,module,exports){
var freeGlobal = require('./_freeGlobal');

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;

},{"./_freeGlobal":25}],51:[function(require,module,exports){
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

},{}],52:[function(require,module,exports){
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

},{}],53:[function(require,module,exports){
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

},{"./_baseSetToString":19,"./_shortOut":54}],54:[function(require,module,exports){
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

},{}],55:[function(require,module,exports){
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

},{}],56:[function(require,module,exports){
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

},{}],57:[function(require,module,exports){
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

},{}],58:[function(require,module,exports){
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

},{}],59:[function(require,module,exports){
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

},{}],60:[function(require,module,exports){
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

},{"./_arrayMap":10,"./_baseIntersection":15,"./_baseRest":18,"./_castArrayLikeObject":22}],61:[function(require,module,exports){
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

},{"./isFunction":63,"./isLength":64}],62:[function(require,module,exports){
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

},{"./isArrayLike":61,"./isObjectLike":66}],63:[function(require,module,exports){
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

},{"./_baseGetTag":13,"./isObject":65}],64:[function(require,module,exports){
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

},{}],65:[function(require,module,exports){
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

},{}],66:[function(require,module,exports){
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

},{}],67:[function(require,module,exports){
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

},{"./utils":82}],68:[function(require,module,exports){
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

},{"./common":67}],69:[function(require,module,exports){
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

},{}],70:[function(require,module,exports){
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

},{}],71:[function(require,module,exports){
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

},{"./utils":82}],72:[function(require,module,exports){
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

},{"./common":67,"./utils":82}],73:[function(require,module,exports){
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
  if (!def && operators.length > 0) {
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
  fillOperators(_utils.OPERATORS, config);

  config.ps.on('field-updated', function updateOperators(field) {
    // jscs:disable disallowSpaceBeforeComma
    var _getFieldInfo = (0, _common.getFieldInfo)(field, config),
        _getFieldInfo2 = _slicedToArray(_getFieldInfo, 3),
        typeInfo = _getFieldInfo2[2];
    // jscs:enable disallowSpaceBeforeComma

    fillOperators((0, _intersection2.default)(_utils.OPERATORS, typeInfo.operators), config, typeInfo.default);
  });

  config.gui.operators.addEventListener('change', function () {
    config.ps.trigger('operator-updated', config.gui.operators.value);
  });
};

exports.default = configOperators;

},{"./common":67,"./utils":82,"lodash/intersection":60}],74:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _utils = require('./utils');

var _common = require('./common');

var configValueInput = function configValueInput(config) {
  config.ps.on('field-updated', function (field) {
    // jscs:disable disallowSpaceBeforeComma
    var _getFieldInfo = (0, _common.getFieldInfo)(field, config),
        _getFieldInfo2 = _slicedToArray(_getFieldInfo, 3),
        fieldInfo = _getFieldInfo2[0],
        typeInfo = _getFieldInfo2[2];
    // jscs:enable disallowSpaceBeforeComma

    config.gui.value.value = '';
    config.gui.userInput.classList.remove('qui-list-mode');

    if ((typeof fieldInfo === 'undefined' ? 'undefined' : _typeof(fieldInfo)) === 'object') {
      if (_typeof(fieldInfo.list) === 'object' && typeof fieldInfo.list.length === 'number') {
        var listValue = config.gui.listValue;
        while (listValue.firstChild) {
          listValue.removeChild(listValue.firstChild);
        }
        for (var i = 0, length = fieldInfo.list.length; i < length; i++) {
          listValue.appendChild((0, _utils.createOption)(fieldInfo.list[i]));
        }
        config.gui.userInput.classList.add('qui-list-mode');
      } else if (typeof fieldInfo.url === 'string' && typeof fieldInfo.mainParam === 'string') {
        config.gui.value.type = 'search';
      } else {
        throw 'Complex type wrong defined for field: ' + field;
      }
    } else {
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

},{"./common":67,"./utils":82}],75:[function(require,module,exports){
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

},{"./utils":82}],76:[function(require,module,exports){
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

},{"./main":77}],77:[function(require,module,exports){
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

},{"./config_condition_add":68,"./config_condition_remove":69,"./config_errors":70,"./config_fields":71,"./config_graphic_query":72,"./config_operators":73,"./config_value_input":74,"./create_gui":75,"./prepare_config":80}],78:[function(require,module,exports){
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

},{"./parse_query_string":79}],79:[function(require,module,exports){
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

},{}],80:[function(require,module,exports){
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

},{"./parse_funcs/index":78,"./pubsub":81,"./utils":82}],81:[function(require,module,exports){
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

},{}],82:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
        var time = Date.parse(value);
        if (!isNaN(time)) {
          return new Date(time).toISOString();
        }
      }
      throw 'Invalid value';
    }
  },
  date: {
    operators: ['=', '<', '>', '<=', '>=', '!='],
    default: '=',
    input: 'text',
    validate: function validateDatetime(value) {
      if (typeof value === 'string') {
        var time = Date.parse(value);
        if (!isNaN(time)) {
          return new Date(time).toISOString().split('T')[0];
        }
      }
      throw 'Invalid value';
    }
  },
  time: {
    operators: ['=', '<', '>', '<=', '>=', '!='],
    default: '=',
    input: 'text',
    validate: function validateDatetime(value) {
      if (typeof value === 'string') {
        var time = Date.parse(value);
        if (!isNaN(time)) {
          return new Date(time).toISOString().split('T')[1];
        }
      }
      throw 'Invalid value';
    }
  },
  timestamp: {
    operators: ['=', '<', '>', '<=', '>=', '!='],
    default: '=',
    input: 'text',
    validate: function validateDatetime(value) {
      if (typeof value === 'string') {
        var time = Date.parse(value);
        if (!isNaN(time)) {
          return time;
        }
      }
      throw 'Invalid value';
    }
  }
};

var PREFIX = exports.PREFIX = 'qui-';

var STYLE = '<style>\n  /*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */\n  /*Only the forms section and modified to affect only things under .qui class*/\n  .qui button,.qui input,.qui optgroup,.qui select,.qui textarea{\n  font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}.qui button,\n  .qui input{overflow:visible}.qui button,.qui select{text-transform:none}\n  .qui button,html .qui [type="button"],.qui [type="reset"],\n  .qui [type="submit"]{-webkit-appearance:button}.qui button::-moz-focus-inner,\n  .qui [type="button"]::-moz-focus-inner,.qui [type="reset"]::-moz-focus-inner,\n  .qui [type="submit"]::-moz-focus-inner{border-style:none;padding:0}\n  .qui button:-moz-focusring,.qui [type="button"]:-moz-focusring,\n  .qui [type="reset"]:-moz-focusring,.qui [type="submit"]:-moz-focusring{\n  outline:1px dotted ButtonText}.qui fieldset{border:1px solid silver;\n  margin:0 2px;padding:.35em .625em .75em}.qui [type="checkbox"],\n  .qui [type="radio"]{box-sizing:border-box;padding:0}\n  .qui [type="number"]::-webkit-inner-spin-button,\n  .qui [type="number"]::-webkit-outer-spin-button{height:auto}\n  .qui [type="search"]{-webkit-appearance:textfield;outline-offset:-2px}\n  .qui [type="search"]::-webkit-search-cancel-button,\n  .qui [type="search"]::-webkit-search-decoration{-webkit-appearance:none}\n\n  .qui {\n    max-width: 40em;\n    font-family: sans-serif;\n    margin: auto;\n  }\n    .qui select, .qui input, .qui button {\n      padding: 0.5em;\n      box-sizing: border-box;\n    }\n    .qui .qui-input {\n      display: flex;\n    }\n    .qui .qui-field {\n      flex-grow: 1;\n    }\n    .qui .qui-operator {\n      margin: 0 1em;\n      min-width: 4em;\n    }\n    .qui-user-input {\n      width: 35%;\n      min-height: 6em;\n    }\n    .qui .qui-value, .qui .qui-list-value, .qui .qui-add {\n      display: block;\n      width: 100%;\n    }\n    .qui .qui-value, .qui .qui-list-value {\n      margin-bottom: 1em;\n    }\n      .qui .qui-value[type=\'checkbox\']:after {\n        content: \'False\';\n        margin-left: 1.5em;\n      }\n      .qui .qui-value[type=\'checkbox\']:checked:after {\n        content: \'True\';\n      }\n    .qui .qui-list-value, .qui .qui-user-input.qui-list-mode .qui-value {\n      display: none;\n    }\n    .qui .qui-user-input.qui-list-mode .qui-list-value {\n      display: block;\n    }\n    .qui .qui-graphic-query {\n      padding: 0;\n      background-color: #444;\n      color: #ccc;\n      list-style: none;\n    }\n      .qui .qui-graphic-query:after {\n        content: \'\';\n        display: block;\n        clear: left;\n        text-align: center;\n        color: #aaa;\n      }\n      .qui .qui-graphic-query:empty:after {\n        content: \'empty query\';\n        padding: 0.5em;\n      }\n    .qui .qui-condition {\n      float: left;\n      padding: 0.5em;\n      cursor: pointer;\n    }\n      .qui .qui-condition:hover {\n        background-color: #555;\n      }\n      .qui .qui-condition.qui-selected {\n        background-color: #666;\n      }\n      .qui .qui-condition:before {\n        content: \'and\';\n        display: inline-block;\n        padding-right: 1em;\n      }\n      .qui .qui-condition:first-child:before {\n        display: none;\n      }\n      .qui .qui-condition:after {\n        content: \')\';\n        padding-left: 0.25em;\n      }\n    .qui .qui-cond-field {\n      color: #fbffcc;\n    }\n      .qui .qui-cond-field:before {\n        content: \'(\';\n        color: #ccc;\n        padding-right: 0.25em;\n      }\n    .qui .qui-cond-operator {\n      color: #fcc;\n      padding: 0 0.4em;\n    }\n    .qui .qui-cond-value {\n      color: #8eeeff;\n    }\n      .qui .qui-string .qui-cond-value:before,\n      .qui .qui-string .qui-cond-value:after,\n      .qui .qui-datetime .qui-cond-value:before,\n      .qui .qui-datetime .qui-cond-value:after,\n      .qui .qui-date .qui-cond-value:before,\n      .qui .qui-date .qui-cond-value:after,\n      .qui .qui-time .qui-cond-value:before,\n      .qui .qui-time .qui-cond-value:after {\n        content: \'"\';\n      }\n    .qui .qui-null .qui-cond-value {\n      color: #c9a7e6;\n      font-style: italic;\n    }\n      .qui .qui-string.qui-null .qui-cond-value:before,\n      .qui .qui-string.qui-null .qui-cond-value:after,\n      .qui .qui-datetime.qui-null .qui-cond-value:before,\n      .qui .qui-datetime.qui-null .qui-cond-value:after,\n      .qui .qui-date.qui-null .qui-cond-value:before,\n      .qui .qui-date.qui-null .qui-cond-value:after,\n      .qui .qui-time.qui-null .qui-cond-value:before,\n      .qui .qui-time.qui-null .qui-cond-value:after {\n        content: \'\';\n      }\n    .qui .qui-last-part {\n      display: flex;\n      align-items: flex-start;\n    }\n    .qui .qui-errors {\n      flex-grow: 1;\n      order: 1;\n      font-size: 0.8em;\n      color: #b00;\n      cursor: default;\n    }\n    .qui .qui-remove {\n      display: block;\n      width: 35%;\n      order: 2;\n    }\n</style>';

var generateHTML = exports.generateHTML = function generateHTML(id) {
  return '<div class="qui" id="qui-' + id + '">\n    ' + STYLE + '\n    <div class="qui-input">\n      <select class="qui-field" size="2"></select>\n      <select class="qui-operator" size="2"></select>\n      <div class="qui-user-input">\n        <input type="text" class="qui-value" placeholder="null">\n        <select class="qui-list-value"></select>\n        <button class="qui-add" disabled>Add condition</button>\n      </div>\n    </div>\n    <div class="qui-editor">\n      <ul class="qui-graphic-query"></ul>\n      <div class="qui-last-part">\n        <button class="qui-remove" disabled>Remove condition</button>\n        <div class="qui-errors"></div>\n      </div>\n    </div>\n  </div>';
};

},{}]},{},[76]);
