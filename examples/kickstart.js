var cellcode = require('../lib/mccmnc.js');

var someMCCMNC = String(20201);
var someMCC = cellcode.MCC(someMCCMNC);

console.log('network', cellcode.network[someMCCMNC]);
console.log('country MCC', someMCC);

var mcc = cellcode.MCC(someMCCMNC)  // returns 'MCC' part
var mnc = cellcode.MNC(someMCCMNC)  // returns 'MNC' part
console.log('mcc', mcc);
console.log('mnc', mnc);

var country = cellcode.countryOf(someMCCMNC)
console.log('country',country);
