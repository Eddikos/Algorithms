// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
	// Solution #1
	// WILL RETURN AN ERROR IN CASE OF str = "hello there "
	// const words = [];
	// for (let word of str.split(' ')) {
	//  if (word[0]) // My Addition - solve the problem mentioned above
	// 	    words.push(word[0].toUpperCase() + word.slice(1));
	// }
	// return words.join(' ');

	// Solution #2
	// This one doesnt give the error first one does, but it will not work with Spanish for example '?Que tal?'
	let result = str[0].toUpperCase();

	for (let i = 1; i < str.length; i++) {
		if (str[i - 1] === ' ') result += str[i].toUpperCase();
		else result += str[i];
	}

	return result;
}

module.exports = capitalize;
