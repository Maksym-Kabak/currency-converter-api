import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import CurrencyRow from './component/CurrencyRow';
import Header from './component/Header';
import Footer from './component/Footer';

function App() {
  return (
    <Router>
      <Header/>
      <main className='py-1'>
        <Container>
          <Route path='/currency/:id' component={ CurrencyRow }/>
          <Route path='/search/:keyword' component={ HomeScreen } exact/>
          <Route path='/' component={ HomeScreen } exact/>
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
