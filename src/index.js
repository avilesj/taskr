import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import NavBar from './nav/NavBar';
import Board from './board/Board';

ReactDOM.render(<NavBar/>, document.getElementById('nav'));
ReactDOM.render(<Board/>, document.getElementById('main'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
