"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const devlog_1 = __importDefault(require("./lib/devlog"));
const protocool_1 = __importDefault(require("./lib/protocool"));
module.exports = { devlogGen: devlog_1.default, protocoolMessage: protocool_1.default };
