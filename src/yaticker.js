'use strict'; // code generated by pbf v3.2.1

// yaticker ========================================

var yaticker = exports.yaticker = {};

yaticker.read = function (pbf, end) {
    return pbf.readFields(yaticker._readField, {id: "", price: 0, time: 0, currency: "", exchange: "", quoteType: 0, marketHours: 0, changePercent: 0, dayVolume: 0, dayHigh: 0, dayLow: 0, change: 0, shortName: "", expireDate: 0, openPrice: 0, previousClose: 0, strikePrice: 0, underlyingSymbol: "", openInterest: 0, optionsType: 0, miniOption: 0, lastSize: 0, bid: 0, bidSize: 0, ask: 0, askSize: 0, priceHint: 0, vol_24hr: 0, volAllCurrencies: 0, fromcurrency: "", lastMarket: "", circulatingSupply: 0, marketcap: 0}, end);
};
yaticker._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.id = pbf.readString();
    else if (tag === 2) obj.price = pbf.readFloat();
    else if (tag === 3) obj.time = pbf.readSVarint();
    else if (tag === 4) obj.currency = pbf.readString();
    else if (tag === 5) obj.exchange = pbf.readString();
    else if (tag === 6) obj.quoteType = pbf.readVarint();
    else if (tag === 7) obj.marketHours = pbf.readVarint();
    else if (tag === 8) obj.changePercent = pbf.readFloat();
    else if (tag === 9) obj.dayVolume = pbf.readSVarint();
    else if (tag === 10) obj.dayHigh = pbf.readFloat();
    else if (tag === 11) obj.dayLow = pbf.readFloat();
    else if (tag === 12) obj.change = pbf.readFloat();
    else if (tag === 13) obj.shortName = pbf.readString();
    else if (tag === 14) obj.expireDate = pbf.readSVarint();
    else if (tag === 15) obj.openPrice = pbf.readFloat();
    else if (tag === 16) obj.previousClose = pbf.readFloat();
    else if (tag === 17) obj.strikePrice = pbf.readFloat();
    else if (tag === 18) obj.underlyingSymbol = pbf.readString();
    else if (tag === 19) obj.openInterest = pbf.readSVarint();
    else if (tag === 20) obj.optionsType = pbf.readVarint();
    else if (tag === 21) obj.miniOption = pbf.readSVarint();
    else if (tag === 22) obj.lastSize = pbf.readSVarint();
    else if (tag === 23) obj.bid = pbf.readFloat();
    else if (tag === 24) obj.bidSize = pbf.readSVarint();
    else if (tag === 25) obj.ask = pbf.readFloat();
    else if (tag === 26) obj.askSize = pbf.readSVarint();
    else if (tag === 27) obj.priceHint = pbf.readSVarint();
    else if (tag === 28) obj.vol_24hr = pbf.readSVarint();
    else if (tag === 29) obj.volAllCurrencies = pbf.readSVarint();
    else if (tag === 30) obj.fromcurrency = pbf.readString();
    else if (tag === 31) obj.lastMarket = pbf.readString();
    else if (tag === 32) obj.circulatingSupply = pbf.readDouble();
    else if (tag === 33) obj.marketcap = pbf.readDouble();
};
yaticker.write = function (obj, pbf) {
    if (obj.id) pbf.writeStringField(1, obj.id);
    if (obj.price) pbf.writeFloatField(2, obj.price);
    if (obj.time) pbf.writeSVarintField(3, obj.time);
    if (obj.currency) pbf.writeStringField(4, obj.currency);
    if (obj.exchange) pbf.writeStringField(5, obj.exchange);
    if (obj.quoteType) pbf.writeVarintField(6, obj.quoteType);
    if (obj.marketHours) pbf.writeVarintField(7, obj.marketHours);
    if (obj.changePercent) pbf.writeFloatField(8, obj.changePercent);
    if (obj.dayVolume) pbf.writeSVarintField(9, obj.dayVolume);
    if (obj.dayHigh) pbf.writeFloatField(10, obj.dayHigh);
    if (obj.dayLow) pbf.writeFloatField(11, obj.dayLow);
    if (obj.change) pbf.writeFloatField(12, obj.change);
    if (obj.shortName) pbf.writeStringField(13, obj.shortName);
    if (obj.expireDate) pbf.writeSVarintField(14, obj.expireDate);
    if (obj.openPrice) pbf.writeFloatField(15, obj.openPrice);
    if (obj.previousClose) pbf.writeFloatField(16, obj.previousClose);
    if (obj.strikePrice) pbf.writeFloatField(17, obj.strikePrice);
    if (obj.underlyingSymbol) pbf.writeStringField(18, obj.underlyingSymbol);
    if (obj.openInterest) pbf.writeSVarintField(19, obj.openInterest);
    if (obj.optionsType) pbf.writeVarintField(20, obj.optionsType);
    if (obj.miniOption) pbf.writeSVarintField(21, obj.miniOption);
    if (obj.lastSize) pbf.writeSVarintField(22, obj.lastSize);
    if (obj.bid) pbf.writeFloatField(23, obj.bid);
    if (obj.bidSize) pbf.writeSVarintField(24, obj.bidSize);
    if (obj.ask) pbf.writeFloatField(25, obj.ask);
    if (obj.askSize) pbf.writeSVarintField(26, obj.askSize);
    if (obj.priceHint) pbf.writeSVarintField(27, obj.priceHint);
    if (obj.vol_24hr) pbf.writeSVarintField(28, obj.vol_24hr);
    if (obj.volAllCurrencies) pbf.writeSVarintField(29, obj.volAllCurrencies);
    if (obj.fromcurrency) pbf.writeStringField(30, obj.fromcurrency);
    if (obj.lastMarket) pbf.writeStringField(31, obj.lastMarket);
    if (obj.circulatingSupply) pbf.writeDoubleField(32, obj.circulatingSupply);
    if (obj.marketcap) pbf.writeDoubleField(33, obj.marketcap);
};

yaticker.QuoteType = {
    "NONE": {
        "value": 0,
        "options": {}
    },
    "ALTSYMBOL": {
        "value": 5,
        "options": {}
    },
    "HEARTBEAT": {
        "value": 7,
        "options": {}
    },
    "EQUITY": {
        "value": 8,
        "options": {}
    },
    "INDEX": {
        "value": 9,
        "options": {}
    },
    "MUTUALFUND": {
        "value": 11,
        "options": {}
    },
    "MONEYMARKET": {
        "value": 12,
        "options": {}
    },
    "OPTION": {
        "value": 13,
        "options": {}
    },
    "CURRENCY": {
        "value": 14,
        "options": {}
    },
    "WARRANT": {
        "value": 15,
        "options": {}
    },
    "BOND": {
        "value": 17,
        "options": {}
    },
    "FUTURE": {
        "value": 18,
        "options": {}
    },
    "ETF": {
        "value": 20,
        "options": {}
    },
    "COMMODITY": {
        "value": 23,
        "options": {}
    },
    "ECNQUOTE": {
        "value": 28,
        "options": {}
    },
    "CRYPTOCURRENCY": {
        "value": 41,
        "options": {}
    },
    "INDICATOR": {
        "value": 42,
        "options": {}
    },
    "INDUSTRY": {
        "value": 1000,
        "options": {}
    }
};

yaticker.OptionType = {
    "CALL": {
        "value": 0,
        "options": {}
    },
    "PUT": {
        "value": 1,
        "options": {}
    }
};

yaticker.MarketHoursType = {
    "PRE_MARKET": {
        "value": 0,
        "options": {}
    },
    "REGULAR_MARKET": {
        "value": 1,
        "options": {}
    },
    "POST_MARKET": {
        "value": 2,
        "options": {}
    },
    "EXTENDED_HOURS_MARKET": {
        "value": 3,
        "options": {}
    }
};
