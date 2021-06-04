import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Route } from 'react-router-dom';
import SearchBox from './SearchBox';

const Header = () => {
  return (
    <header>
      <Navbar>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand href='/'>
              <h2>Currency Converter</h2>
            </Navbar.Brand>
          </LinkContainer>
          <Route render={ ({ history }) => <SearchBox history={ history }/> }/>
        </Container>
      </Navbar>
    </header>);
};

export default Header;
