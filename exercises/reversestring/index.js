// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	// Solution 1
	// return str.split('').reverse().join('');

	// Solution 2
	// let reversed = '';
	// for (let character of str){
	//     reversed = character + reversed
	// }
	// return reversed;
	// This is a linear Runtime or 'N' complexity

	// Solution 3
	// debugger;
	return str.split('').reduce((rev, char) => char + rev, '');
}

// reverse('asdf'); -- for debugging

module.exports = reverse;
