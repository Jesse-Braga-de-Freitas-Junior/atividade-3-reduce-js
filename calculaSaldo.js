/*
function calculaSaldo(saldo, itens) {
	if (!saldo || !itens || !itens.length) return 'Envie todos os parâmetros';

	const saldoFinal = itens.reduce((acc, item) => acc - item.preco, saldo);

	return `O saldo final será de ${saldoFinal} reais`;
}

lista = [
	{
		preco: 2,
		nome: 'maçã',
	},
	{
		preco: 30,
		nome: 'roupa',
	},
	{
		preco: 25,
		nome: 'carne',
	},
];

saldo = 100;

console.log(calculaSaldo(saldo, lista));
*/

const lista = [
	{
		name:'sabao em po',
		preco: 30,
	},
	{
		name:'cereal',
		preco: 10,
	},
	{
		name:'acucar',
		preco: 10,
	},
	{
		name:'sabonete',
		preco: 7,
	},
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
	return lista.reduce(function(prev, current, index) {
		console.log('rodada', index + 1);
		console.log({ prev });
		console.log({ current });
		return prev - current.preco;
	}, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));
