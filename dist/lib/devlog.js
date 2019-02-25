"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function devlogGen(port) {
    const devlog = () => {
        if (process.env.NODE_ENV === 'development') {
            // tslint:disable-next-line:no-console
            console.log(`listening on port ---> http://localhost:${port}`);
        }
    };
    return devlog;
}
exports.default = devlogGen;
