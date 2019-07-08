// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
	// Solution #1
	// const reversed = str.split('').reverse().join('');
	// return str === reversed;

	// Solution #2
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
	// This method does twice the job though, it checks everything even after the center to the right
	return str.split('').every((char, i) => {
		return char === str[str.length - i - 1];
	});
}

module.exports = palindrome;
