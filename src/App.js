import React from 'react';
import Game from './components/Game'
import Footer from './components/Footer'
import Header from './components/Header'
import './style/App.css'

const App = () => {
	return (
    	<div className="app">
      		<Header />
      		<Game />
      		<Footer />
    	</div>
  	)
}

export default App;
