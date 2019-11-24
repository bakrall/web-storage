localStorage.setItem('item1', 'I');
localStorage.setItem('item2', 'love');
localStorage.setItem('item3', 'coding');

function getStoredValues() {
	let valuesNum = localStorage.length,
		values = [];

	for (let i=0; i < valuesNum; i++) {
		values.push(localStorage.getItem(localStorage.key(i)));
	}

	console.log(values.reverse().join(' '));
}

getStoredValues();