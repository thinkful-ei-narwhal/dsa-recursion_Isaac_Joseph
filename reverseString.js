/* 
Write a function that reverses a string. 
Take a string as input, reverse the string,
and return the new string.
 */

const reversesSTR = (str) => {
	if (str === '') return '';

	return reversesSTR(str.slice(1)) + str[0];
};

console.log(reversesSTR('dog'));
