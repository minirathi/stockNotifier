const express = require('express');
var app = express();
var cors = require('cors');
var mongoose = require('mongoose');
require('./db.js');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const Stock = require('./stockModel');

app.post('/savestock', async (req, res) => {
	console.log(req.body);
	const name = req.body.name;
	const entryPrice = req.body.entryPrice;
	const exitPrice = req.body.exitPrice;
	try {
		const saveStock = new Stock({
			_id: new mongoose.Types.ObjectId(),
			stockName: name,
			entryPrice: entryPrice,
			exitPrice: exitPrice,
		});

		const stock = await saveStock.save();

		console.log(stock);
		res.status(201).json({ status: 'success', stock });
	} catch (err) {}
});

app.get('/getstock', async (req, res) => {
	const name = req.query.name;

	try {
		const stock = await Stock.findOne({ stockName: name });
		res.status(201).json({ stock });
	} catch (e) {
		console.log(e);
	}
});

app.listen(9000, () => {
	console.log('Web application running on 9000');
});
