import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${ keyword }`);
    } else {
      history.push('/');
    }

  };

  return (
    <Form onSubmit={ submitHandler } inline className='d-flex'>
      <Form.Control
        type='text'
        name='q'
        onChange={ (e) => setKeyword(e.target.value) }
        placeholder='Search currency...'
        className='me-2'
      />
      <Button type='submit' variant='outline-success' className='p-lg-2'>
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
