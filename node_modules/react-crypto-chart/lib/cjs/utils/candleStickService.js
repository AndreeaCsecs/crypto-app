"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCandleStickData = void 0;
var adaptor_1 = require("./adaptor");
var parseCandleStickData = function (candleArray) {
    if (candleArray === void 0) { candleArray = []; }
    var transformedData = candleArray.reduce(function (accu, curr) {
        var candle = (0, adaptor_1.candleStickAdaptor)(curr);
        accu.push(candle);
        return accu;
    }, []);
    return transformedData;
};
exports.parseCandleStickData = parseCandleStickData;
