var moment = require('moment');

// Current date
console.log(moment().format());

// Current timestamp
var now = moment();
console.log('Current timestamp', now.unix());

// Formatted timestamp
var timestamp = 1470004428;
var currentMoment = moment.unix(timestamp);
console.log('Current moment', currentMoment.format('MMM D, YY @ h:mm a'));

// Format -> January 3rd, 2016 @ 12:13 AM
console.log('Current moment', currentMoment.format('MMMM Do, YYYY @ h:mm A'));
