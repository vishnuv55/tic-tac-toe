import React from 'react';
import Game from './components/Game'
import Header from './components/Header'
import './style/App.css'

const App = () => {
	return (
    	<div className="app">
      		<Header />
      		<Game />
    	</div>
  	)
}

export default App;
