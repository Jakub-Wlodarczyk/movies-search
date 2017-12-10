import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory } from 'react-router';
import MoviesSearch from './components/MoviesSearch';

ReactDOM.render(
<Router history={browserHistory}>
	<Route path="/" component={MoviesSearch}/>
</Router>
, document.querySelector('.js-main'));
