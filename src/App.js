import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Route, Link } from 'wouter'


function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to='/gif/dragon ball z'>Gifs de Dragon Ball Z</Link>
        <Link to='/gif/naruto'>Gifs de Naruto</Link>
        <Route 
          path="/gif/:keyword" 
          component={ListOfGifs}
        />
      </section>
    </div>
  );
}

export default App;
