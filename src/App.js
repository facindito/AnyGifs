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
          <div className="App-logo">
            <h1>AnyGifs</h1>
          </div>
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
          <Route
            component={()=> <h1>404 ERROR</h1>} 
            path="/404"
          />
        </GifsContextProvider>
      </section>
    </div>
  );
}

export default App;
/* */