import cron from 'node-cron';
import axios from 'axios';
import CircularJSON from 'circular-json';
import Currency from '../models/Currency.js';


const PB_API = `https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`;

export const updateCron = () => {

  cron.schedule('0 8 * * *', async () => {
    console.log('Crone start');
    const response = await axios.get(PB_API);
    const { data } = JSON.parse(CircularJSON.stringify(response));

    const updated = await Currency.bulkWrite(data.map(item => (
      {
        updateMany: {
          filter: { ccy: item.ccy, base_ccy: item.base_ccy },
          update: {
            $set: { buy: item.buy, sale: item.sale }
          }
        },
        multi: true,
        upsert: true
      }
    )));
    console.log(updated);
    console.log('Cron finish');
  });

};
