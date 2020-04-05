import React from 'react';
import './App.css';
import Routes from './routes/routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './layouts/header/header';
import Sidebar from './layouts/menu/sidebar';
import Rightbar from './layouts/bars/rightbar';

function App() {
  return (
    <div className="wrapper">
        <Header/>
        <Sidebar/>
        <div className="content-wrapper">
            <Routes/>
        </div>
        <Rightbar/>
    </div>
  );
}

export default App;
