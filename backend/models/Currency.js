import mongoose from 'mongoose';

const Currency = new mongoose.Schema({
    ccy: { type: String, required: true },
    base_ccy: { type: String, required: true },
    buy: { type: String, required: true },
    sale: { type: String, required: true }
  },
  { timestamps: true, });

export default mongoose.model('Currency', Currency);
