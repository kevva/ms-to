'use strict';

module.exports = val => {
	if (typeof val !== 'number') {
		throw new TypeError(`Expected a number, got ${typeof val}`);
	}

	const roundTowardZero = val > 0 ? Math.floor : Math.ceil;

	return {
		days: roundTowardZero(val / 86400000),
		hours: roundTowardZero(val / 3600000),
		minutes: roundTowardZero(val / 60000),
		seconds: roundTowardZero(val / 1000),
		milliseconds: roundTowardZero(val)
	};
};
