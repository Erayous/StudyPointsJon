import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BookStore from "./bookStore";

ReactDOM.render(<App bookstore={BookStore}/>, document.getElementById('root'));
