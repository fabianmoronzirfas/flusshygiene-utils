/**
 * Builds a default message signature for making the communication trackable
 * @param msg an IProtocoolMessage Object that has a type (default is default)
 * @returns JSON stringifed object
 */
export default function protocoolMessage(msg = {
  type: 'DEFAULT'
}) {
  if (msg.hasOwnProperty('type') === false && typeof msg === 'object') {
    msg = { ...msg,
      ...{
        type: 'DEFAULT'
      }
    };
  }

  if (typeof msg === 'string') {
    msg = {
      type: 'DEFAULT',
      payload: msg
    };
  }

  return JSON.stringify(msg);
}