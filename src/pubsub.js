'use strict';

let pubsub = function pubsub() {
  let subs = [];

  let on = function on(ev, handler) {
    if (!ev || typeof ev !== 'string' || typeof handler !== 'function') {
      throw 'pubsub on needs a valid event name and a handler function';
    }

    if (subs[ev] === undefined) {
      subs[ev] = [];
    }
    subs[ev].push(handler);
  };

  let off = function off(ev, handler) {
    if ((!ev && ev !== undefined) || (ev && typeof ev !== 'string') ||
      (!handler && handler !== undefined) ||
      (handler && typeof handler !== 'function') ||
      (ev === undefined && handler !== undefined)) {
      throw `pubsub off needs a valid event name (if provided) and a handler ` +
        `function (if provided). Also you can't provide a handler but not an ` +
        `event name.`;
    }

    if (ev) {
      if (handler) {
        if (subs[ev]) {
          for (let i = 0, length = subs[ev].length; i < length; i++) {
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

  let trigger = function trigger(ev, input) {
    if (!ev || typeof ev !== 'string') {
      throw 'pubsub trigger needs a valid event name';
    }

    if (subs[ev]) {
      for (let i = 0, length = subs[ev].length; i < length; i++) {
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

export default pubsub;
