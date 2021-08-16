const router = require('express').Router();
const Product = require('../models/productsModel');
const multer = require('multer');
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');

  },
  filename(req, file, cb) {
    cb(null,Date.now()+file.originalname.match(/\.[0-9a-z]+$/i)[0]);
  }
});

router.get('/', async (req, res) => {
  console.log(req.query);
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

const upload =multer({storage});

router.post('/',upload.array('images',5) ,async(req, res) => {

    let images = req.files.map((image)=>image.filename);

    /*const product = new Product({
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
    */


    
  });





module.exports = router;