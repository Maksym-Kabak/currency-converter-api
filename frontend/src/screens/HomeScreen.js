import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Currency from '../component/Currency';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrency } from '../store/action/currencyAction';
import Loader from '../component/Loader';
import Message from '../component/Message';


const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;

  const dispatch = useDispatch();

  const currencyPb = useSelector((state) => state.currencyPb);
  const { currency, loading, error } = currencyPb;

  useEffect(() => {
    dispatch(fetchCurrency(keyword));
  }, [dispatch, keyword]);

  return (
    <>
      { loading ? <Loader/> : error ? <Message variant='danger'>{ error }</Message> : (
        <Row className='justify-content-center'>
          { currency.map(cash => (
            <Col key={ cash._id } sm={ 13 } md={ 6 } lg={ 4 } xl={ 4 }>
              <Currency currency={ cash }/>
            </Col>
          )) }
        </Row>
      ) }
    </>
  );
};

export default HomeScreen;
