/* 
Calculate the nth triangular number. A triangular 
number counts the objects that can form an equilateral 
triangle. The nth triangular number is the number of
dots composing a triangle with n dots on a side, and 
is equal to the sum of the n natural numbers from 1 to n. 
This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.
*/

/* ==================================================
Algorithm
    1st triangle is 0 + 1 = 1
    2nd triangle is 1 + 2 = 3
    3rd triangle is 3 + 3 = 6
    4th triangle is 6 + 4 = 10
    5th triangle is 10 + 5 = 15
    6th triangle is 15 + 6 = 21
===================================================*/

const nthTriangularNumber = (nth, tri = 0, inc = 1) => {
	if (inc > nth) {
		return tri;
	}

	tri += inc;
	inc += 1;

	return nthTriangularNumber(nth, tri, inc);
};

console.log(nthTriangularNumber(7));
