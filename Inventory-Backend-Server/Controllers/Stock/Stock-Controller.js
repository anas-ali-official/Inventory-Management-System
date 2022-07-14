const Stock = require("../../Models/Stock/Stock-Model");

const getAllStocks = (req, res, next) => {
  Stock.find({}).then((Stocks) => {
    res.json(Stocks);
  });
};


const newStock = (req, res, next) => {
  const body = req.body;
  console.log(req.body);

 if (body.article_no == undefined || body.article_no == null) {
    return res.status(400).json({ error: "Article No is Missing" });
  }
 else if (body.description == undefined) {
    return res.status(400).json({ error: "Description Name Missing" });
  }
  else if(body.uom == undefined || body.uom == null){
    return res.status(400).json({ error: "Uom is Missing" });
  }
  else if(body.color == undefined || body.color == null){
    return res.status(400).json({ error: "Color is Missing" });
  }
  else if(body.size == undefined || body.size == null){
    return res.status(400).json({ error: "Size is Missing" });
  }
  else if(body.rate == undefined || body.rate == null){
    return res.status(400).json({ error: "Rate is Missing" });
  }
  else if(body.qty == undefined || body.qty == null){
    return res.status(400).json({ error: "Qty is Missing" });
  }
  /*else if(body.sale_rate == undefined || body.sale_rate == null){
    return res.status(400).json({ error: "Sale Rate is Missing" });
  }*/
  else if(body.location == undefined || body.location == null){
    return res.status(400).json({ error: "Location is Missing" });
  }
  else if (body.active == undefined || body.active == null){
  return res.status(400).json({ error: "Active is Null" });
}

  const StockObject = new Stock({
   
   article_no:body.article_no, 
   description:body.description,
   uom:body.uom,
   color:body.color,
   size:body.size,
   rate:body.rate,
   qty:body.qty,
   sale_rate:body.sale_rate,
   location:body.location,
   active:body.active,
   date_created:body.date_created,
   date_updated:body.date_updated
  });

  // console.log(body);
  // console.log(UOMObject);

  StockObject.save().then((saveStock) => {
    res.json(saveStock);
  });
};

//DELETE '/tea/:name'
const deleteOneStock = (req, res, next) => {
  Stock.findByIdAndRemove(req.params.id)
      .then((result) => {
        res.status(204).end();
      })
      .catch((error) => next(error));
};

//export controller functions
module.exports = {
  getAllStocks,
  newStock,
  deleteOneStock,
};
