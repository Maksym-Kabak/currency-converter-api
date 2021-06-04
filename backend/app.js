import express from 'express';
import morgan from 'morgan';
import { errorHandler, notFound } from './middleware/error.midleware.js';
import connectDb from './config/db.js';

import currencyRouter from './routes/currency.router.js';
import { updateCron } from './cron-job/update-currency.cron.js';

const NODE_ENV = 'development';


const app = express();

if (NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use('/api/currency', currencyRouter);

app.use(notFound);
app.use(errorHandler);


const PORT = 5000;

(async () => {
  try {

    await connectDb();
    await updateCron();
    app.listen(PORT, () => console.log(`Server running in ${ NODE_ENV } on PORT: ${ PORT }`));
  } catch (e) {
    throw new Error('Something went wrong//');
  }
})();






