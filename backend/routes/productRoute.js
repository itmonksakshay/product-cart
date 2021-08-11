const router = require('express').Router();
const Product = require('../models/productsModel');


router.get('/', async (req, res) => {

  const category = req.query.category ? { category: req.query.category } : {};
    const searchKeyword = req.query.searchKeyword
      ? {
          name: {
            $regex: req.query.searchKeyword,
            $options: 'i',
          },
        }
      : {};
    const sortOrder = req.query.sortOrder
      ? req.query.sortOrder === 'lowest'
        ? { price: 1 }
        : { price: -1 }
      : { _id: -1 };
     try{
        const products = await Product.find({});
         return res.send(products);   

     } 
     catch(e){
         console.log(e);
        return res.send({})
     }

});

router.post('/',async(req, res) => {
    console.log(req.body);
    const product = new Product({
      name: req.body.name,
      description:req.body.desc,
      price: req.body.price,
      image: req.body.image,
      brand: req.body.brand,
    });

    try{

        const newProduct = await product.save();
        return res.status(201).send({ message: 'New Product Created', data: newProduct });
    }
    catch(e){
        return res.status(500).send(e);        
    }

    
  });





module.exports = router;