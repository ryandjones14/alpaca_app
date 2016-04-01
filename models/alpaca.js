var mongoose = require('mongoose');

var alpacaSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true  },
  image: { type: String, required: true, unique: true },
  bio: String,
  created_at: Date,
  updated_at: Date
});

// alpacaSchema.methods.sayHello = function() {
//   return `Hi, I'm ${this.name} and ${this.favorite} is my favorite`;
// };

var Alpaca = mongoose.model('Alpaca', alpacaSchema);

// Make this available to our other files
module.exports = Alpaca;
