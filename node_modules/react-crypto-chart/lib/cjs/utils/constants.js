"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultChartLayout = exports.histogramDefaultConfig = exports.condleStickDefaultConfig = exports.WS_URL = exports.BASE_URL = void 0;
var lightweight_charts_1 = require("lightweight-charts");
exports.BASE_URL = "https://api.binance.com/api/v3/klines?";
exports.WS_URL = "wss://stream.binance.com:9443/ws";
exports.condleStickDefaultConfig = {
    upColor: "#00c176",
    downColor: "#cf304a",
    borderDownColor: "#cf304a",
    borderUpColor: "#00c176",
    wickDownColor: "#838ca1",
    wickUpColor: "#838ca1",
};
exports.histogramDefaultConfig = {
    base: 0,
    lineWidth: 2,
    priceFormat: {
        type: "volume",
    },
    overlay: true,
    scaleMargins: {
        top: 0.8,
        bottom: 0,
    },
};
exports.defaultChartLayout = {
    layout: {
        backgroundColor: "#ededed",
        textColor: "#253248",
    },
    grid: {
        vertLines: {
            color: "#838fa3",
            style: lightweight_charts_1.LineStyle.SparseDotted,
        },
        horzLines: {
            color: "#838fa3",
            style: lightweight_charts_1.LineStyle.SparseDotted,
        },
    },
    crosshair: {
        mode: lightweight_charts_1.CrosshairMode.Normal,
    },
    priceScale: {
        borderColor: "#485c7b",
    },
    timeScale: {
        borderColor: "#485c7b",
        timeVisible: true,
        secondsVisible: false,
    },
};
