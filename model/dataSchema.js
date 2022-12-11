import mongoose from 'mongoose';


var dataSchema = new mongoose.Schema({
  productName :{
    type: String,
  },

  manufacturer:{
    type: String,
  },

  isFrame:{
    type: Boolean,
  },
  productType:{
    type: String,
  },
  numberGears:{
    type: Number,
  },
  breakType:{
    type: String,
  },

  material:{
    type: String,
  },

  weight:{
    type: Number,
  },

  productPrice:{
    type: Number,
  },

  productURL:{
    type:String,
  },

  productImg:{
    type:String,
  }
});
module.exports = mongoose.models.product || mongoose.model('product', dataSchema);