"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Builds a default message signature for making the communication trackable
 * @param msg an IProtocoolMessage Object that has a type (default is default)
 * @returns JSON stringifed object
 */
function protocoolMessage(msg = { type: 'default' }) {
    if (msg.hasOwnProperty('type') === false) {
        msg.type = 'default';
    }
    return JSON.stringify(msg);
}
exports.default = protocoolMessage;
