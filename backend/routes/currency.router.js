import express from 'express';
import { getCurrency, getOneCurrencyById } from '../controllers/currency.controller.js';

const currencyRouter = express.Router();


currencyRouter.route('/').get(getCurrency);

currencyRouter.route('/:id').get(getOneCurrencyById);

export default currencyRouter;
