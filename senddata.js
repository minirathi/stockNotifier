function send(e) {
	e.preventDefault();

	let name = document.getElementById('in1').value;
	let entryPrice = document.getElementById('in2').value;
	let exitPrice = document.getElementById('in3').value;

	axios
		.post('http://localhost:9000/savestock', {
			name,
			entryPrice,
			exitPrice,
		})
		.then((res) => {
			console.log(res.data);
		})
		.catch((e) => {
			console.log(e);
		});
}
