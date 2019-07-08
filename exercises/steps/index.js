// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
	// Solution #1 - with arguments steps(n, row)
	// for (let row = 0; row < n; row++) {
	// 	let stair = '';
	// 	for (let column = 0; column < n; column++) {
	// 		if (column <= row) stair += '#';
	// 		else stair += ' ';
	// 	}
	// 	console.log(stair);
	// }
	// This would be N^2 or quadratic runtime complexity

	// Solution #2
	if (n === row) return; // Completed all work

	// Hit the end of the Row
	if (n === stair.length) {
		console.log(stair);
		return steps(n, ++row);
	}

	if (stair.length <= row) stair += '#';
	else stair += ' ';

	steps(n, row, stair);
}

module.exports = steps;
