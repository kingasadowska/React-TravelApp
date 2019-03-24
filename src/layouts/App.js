import React, { Component } from 'react';
import '../styles/App.css';
import {BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import Page from './Page';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '.App.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="app">

      <header> {<Header/>} </header>
    
      <main>

        <aside> {<Navigation/>} </aside>
          
        <section className="page">  {<Page/>} </section>
         
      </main>

        <footer> {<Footer />}</footer>

      </div>
      </BrowserRouter>
    );
  }
}

export default App;
