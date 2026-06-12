"use strict";
const getDataType = (data) => {
    return Object.prototype.toString.call(data);
};
module.exports = { getDataType };
