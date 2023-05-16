const { Schema, model, Types } = require("mongoose");

const orderSchema = new Schema({
	user_id: {
		type: Types.ObjectId,
		required: true,
		ref: "User",
	},
	prompt_id: {
		type: Types.ObjectId,
		required: true,
		ref: "Prompt",
	},
	image_id: {
		type: Types.ObjectId,
		required: true,
		ref: "Image",
	},
	status: {
		type: String,
		required: true,
	},
	framing_options: {
		type: String,
		required: true,
	},
	print_type: {
		type: String,
		required: true,
	},
	print_size: {
		type: String,
		required: true,
	},
});

const Order = model("Order", orderSchema);

module.exports = Order;