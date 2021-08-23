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

  const fullTextSearch = req.query.search ? {$text: {$search:req.query.search }}: {};
  const fullTextScoreMeta = req.query.search?{score: {$meta: "textScore"}}:{};
  const fullTextSortOrder = req.query.search ?{score:{$meta:"textScore"}}:{_id: -1}

  const searchKeyword = req.query.search ? {$or: [{name: {$regex: req.query.search,$options: 'i'}},
      {brand: {$regex: req.query.search,$options: 'i'}},{description: {$regex: req.query.search,$options: 'i'}}
    ]}: {};
   //   {$text: {$search:req.query.search }}
    const sortOrder = req.query.sortOrder ? req.query.sortOrder === 'lowest'
        ? { price: 1 }
        : { price: -1 }
      : { _id: -1 };
     try{
        let products = await Product.find({...fullTextSearch},{...fullTextScoreMeta}).sort({...fullTextSortOrder}); 
        if(products.length){
          return res.status(201).send(products);
        }
        else{
          products = await Product.find({...searchKeyword}).sort(sortOrder);
          return res.status(201).send(products);
        }
     } 
     catch(e){
        return res.status(500).send(e)
     }
});

const upload =multer({storage});

router.post('/',upload.array('images',5) ,async(req, res) => {

    let images = req.files.map((image)=>image.filename);

      const product = new Product({
      name: req.body.title,
      description:req.body.description,
      price: req.body.price,
      images:images,
      brand: req.body.brand,
    });

    try{

        const newProduct = await product.save();
        return res.status(201).send(newProduct);
    }
    catch(e){
        return res.status(500).send(e);        
    }
    
  });

  router.get('/:id', async (req, res) => {

    try{
      const product = await Product.findOne({ _id: req.params.id });
      res.status(201).send(product);

    }catch(e){
      res.status(500).send(e);
    }
  });

module.exports = router;