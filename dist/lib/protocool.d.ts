export interface IPayload {
    [possible: string]: any;
}
export interface IProtocoolMessage {
    type?: string;
    payload?: IPayload;
}
/**
 * Builds a default message signature for making the communication trackable
 * @param msg an IProtocoolMessage Object that has a type (default is default)
 * @returns JSON stringifed object
 */
export default function protocoolMessage(msg?: IProtocoolMessage): string;
