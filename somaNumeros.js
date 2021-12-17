/*function somaNumeros(arr) {
	if (!arr || !arr.length) return;
	const soma = arr.reduce((prev, curr) => prev + curr);

	return soma;
}

console.log(somaNumeros([1, 1, 1, 3]));
*/

function somaNumeros(arr) {
	arr.reduce(function(prev, current) {
		console.log({prev});
		console.log({current});
		return prev + current;
	}, 0);
}

const arr = [2, 3];

console.log(somaNumeros(arr));
