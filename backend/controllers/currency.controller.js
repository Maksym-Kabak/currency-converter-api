import asyncHandler from 'express-async-handler';
import Currency from '../models/Currency.js';


const getCurrency = asyncHandler(async (req, res) => {
  const keyword = req.query.keyword ? {
    ccy: {
      $regex: req.query.keyword,
      $options: 'i'
    }
  } : {};

  const currency = await Currency.find({ ...keyword });
  res.status(200).json(currency);
});


const getOneCurrencyById = asyncHandler(async (req, res) => {
  const currency = await Currency.findById(req.params.id);

  if (currency) {
    res.json(currency);
  } else {
    res.status(404);
    throw new Error('Currency not found');
  }
});

export {
  getCurrency,
  getOneCurrencyById
};
