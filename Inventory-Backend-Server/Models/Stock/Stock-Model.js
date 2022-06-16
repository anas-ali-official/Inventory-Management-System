const mongoose = require("mongoose");

const StockSchema = new mongoose.Schema({
 article_no:String, 
 description:String,
 uom:String,
 color:String,
 size:String,
 rate:Number,
 qty:Number,
 sale_rate:Number,
 location:String,
 active:Boolean,
 date_created:String,
 date_updated:String,
});

StockSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Stock", StockSchema);
