import React from 'react';
import './App.css';
import { Route, Link } from 'wouter'
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import { GifsContextProvider } from './context/GifsContext';
import Detail from './pages/Detail';


function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/">
          <h1 className="App-logo">AnyGifs</h1>
        </Link>
        <GifsContextProvider>
          <Route
            component={Home}
            path="/"
          />
          <Route 
            component={SearchResults}
            path="/search/:keyword" 
          />
          <Route
            component={Detail}
            path="/gif/:id"
          />
        </GifsContextProvider>
      </section>
    </div>
  );
}

export default App;
/* */