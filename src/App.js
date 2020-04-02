import React from 'react';
import './App.css';
import Routes from './routes/routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './layouts/header/header';
import Sidebar from './layouts/menu/sidebar';

function App() {
  return (
    <div className="wrapper">
        <Header/>
        <Sidebar/>
        <div className="content-wrapper">
            <Routes/>
        </div>
    </div>
  );
}

export default App;
