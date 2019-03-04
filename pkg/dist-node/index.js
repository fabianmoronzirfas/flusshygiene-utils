'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function devlogGen(port) {
  const devlog = () => {
    if (process.env.NODE_ENV === 'development') {
      // tslint:disable-next-line:no-console
      console.log(`listening on port http://localhost:${port}`);
    }
  };

  return devlog;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

/**
 * Builds a default message signature for making the communication trackable
 * @param msg an IProtocoolMessage Object that has a type (default is default)
 * @returns JSON stringifed object
 */
function protocoolMessage(msg = {
  type: 'DEFAULT'
}) {
  if (msg.hasOwnProperty('type') === false && typeof msg === 'object') {
    msg = _objectSpread({}, msg, {
      type: 'DEFAULT'
    });
  }

  if (typeof msg === 'string') {
    msg = {
      type: 'DEFAULT',
      payload: msg
    };
  }

  return JSON.stringify(msg);
}

const devlogger = devlogGen;
const protomessage = protocoolMessage;

exports.devlogger = devlogger;
exports.protomessage = protomessage;
