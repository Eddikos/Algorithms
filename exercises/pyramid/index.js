// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = '') {
	const midpoint = Math.floor((2 * n - 1) / 2);
	// Solution #1 - with arguments pyramid(n)
	// for (let row = 0; row < n; row++) {
	// 	let level = '';

	// 	for (let column = 0; column < 2 * n - 1; column++) {
	// 		if (midpoint - row <= column && midpoint + row >= column) level += '#';
	// 		else level += ' ';
	// 	}
	// 	console.log(level);
	// }

	// Solution #2
	if (n === row) return; // Completed all work

	// Hit the end of the Row
	if (2 * n - 1 === level.length) {
		console.log(level);
		return pyramid(n, ++row);
	}

	if (midpoint - row <= level.length && midpoint + row >= level.length) level += '#';
	else level += ' ';

	pyramid(n, row, level);
}

module.exports = pyramid;
