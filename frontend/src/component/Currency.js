import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Currency = ({ currency }) => {
  return (
    <Link to={ `/currency/${ currency._id }` } style={{textDecoration: 'none'}}>
      <Card className="text-center p-2 mb-3">
        <Card.Title as='h3'>
          <strong>{ currency.ccy }</strong>
        </Card.Title>
        <Card.Body>
          <Card.Text as='h3'>
            buy: { Number(currency.buy) } { currency.base_ccy }
          </Card.Text>
          <Card.Text as='h3'>
            sale: { Number(currency.sale) } { currency.base_ccy }
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default Currency;
