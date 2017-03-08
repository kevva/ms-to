import test from 'ava';
import m from './';

test(t => {
	const err = t.throws(() => m('foo'), TypeError);
	t.is(err.message, 'Expected a number, got string');

	t.deepEqual(m(1000 * 60), {
		days: 0,
		hours: 0,
		minutes: 1,
		seconds: 60,
		milliseconds: 60000
	});

	t.deepEqual(m(1000 * 60 * 60 * 24), {
		days: 1,
		hours: 24,
		minutes: 1440,
		seconds: 86400,
		milliseconds: 86400000
	});

	t.deepEqual(m(-1000 * 60), {
		days: 0,
		hours: 0,
		minutes: -1,
		seconds: -60,
		milliseconds: -60000
	});

	t.deepEqual(m(-1000 * 60 * 60 * 24), {
		days: -1,
		hours: -24,
		minutes: -1440,
		seconds: -86400,
		milliseconds: -86400000
	});
});
