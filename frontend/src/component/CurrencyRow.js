import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currencyDetails } from '../store/action/currencyAction';
import { Card, Form } from 'react-bootstrap';
import Loader from './Loader';
import Message from './Message';
import { Link } from 'react-router-dom';
import FormContainer from './FormContainer';

const CurrencyRow = ({ match }) => {
  const [curr, setCurr] = useState(0);
  const [curr2, setCurr2] = useState(0);

  const dispatch = useDispatch();

  const currencyDetailsList = useSelector(state => state.currencyDetailsList);
  const { currency, loading, error } = currencyDetailsList;

  useEffect(() => {
    dispatch(currencyDetails(match.params.id));
  }, [dispatch, match]);

  return (
    <>
      <Link className='btn btn-secondary my-2' to='/'>
        Go back
      </Link>
      { loading ? <Loader/> : error ? <Message variant='danger'>{ error }</Message> : (
        <FormContainer>
          <Card text="white" className="text-center p-2">
            <Form>
              <Form.Group>
                <Form.Label>
                  <h2>Exchange from { currency.ccy }</h2>
                </Form.Label>
                <Form.Control
                  type='number'
                  placeholder={ `Enter the amount in ${ currency.ccy }` }
                  onChange={ (e) => setCurr(e.target.value) }
                />
                <h2
                  className='d-flex justify-content-center pt-2'>{ (curr * currency.buy).toFixed(2) } { currency.base_ccy }
                </h2>
              </Form.Group>
              <hr/>
              <Form.Group>
                <Form.Label><h2>Exchange from { currency.base_ccy }</h2></Form.Label>
                <Form.Control
                  type='number'
                  placeholder={ `Enter the amount in ${ currency.base_ccy }` }
                  onChange={ (e) => setCurr2(e.target.value) }
                />
                <h2
                  className='d-flex justify-content-center pt-2'>{ (curr2 / currency.buy).toFixed(2) } { currency.ccy }</h2>
              </Form.Group>
            </Form>
          </Card>
        </FormContainer>
      ) }

    </>
  );
};

export default CurrencyRow;
