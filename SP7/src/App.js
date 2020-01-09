import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from "react-router-dom";

import './App.css';


const Header = () => {
  return (
    <ul className="header">
      <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
      <li><NavLink activeClassName="active" to="/products">Products</NavLink></li>
      <li><NavLink activeClassName="active" to="/company">Company</NavLink></li>
    </ul>
  )
}

export default function App(props) {
  
  return (

  <Router >
        <div>
          <Header />
          <Route exact path="/" render={() => <Home />} />
          <Route path="/products" render={() => <Product bookstore={props.bookstore}/>} />
          <Route path="/company" render={() => <Company />} />
        </div>
  </Router>
  );
}



function Product(props){
  const books = props.bookstore.books;

  return (
    <ul>
    {books.map((book) => <li key={book.id}>
      {book.title} 
      </li>)}
    </ul>
  )
}


const Home = () => (
  <div>
    <h2>Home View</h2>
    <p>Info about this site</p>
  </div>
)

const Company = () => {
  return (
    <div>
      <h2>About Us</h2>
      <p>Our about page</p>
    </div>
  )
}
