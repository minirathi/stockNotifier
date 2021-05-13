var mongoose = require('mongoose');

// create an schema
var stockSchema = new mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	stockName: {
		type: String,
		required: true,
	},
	entryPrice: {
		type: Number,
		required: true,
	},
	exitPrice: {
		type: Number,
		required: true,
	},
});

module.exports = mongoose.model('stock', stockSchema);
