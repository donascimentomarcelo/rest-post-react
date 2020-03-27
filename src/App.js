import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Routes from './main/routes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider>
            <Routes/>
        </Provider>
      </header>
    </div>
  );
}

export default App;
