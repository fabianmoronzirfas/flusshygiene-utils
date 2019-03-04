"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asyncRoute = (route) => (req, res, next) => {
    Promise.resolve(route(req, res)).catch(next);
};
exports.default = asyncRoute;
