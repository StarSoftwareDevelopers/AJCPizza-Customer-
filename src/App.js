import React from 'react';
import { BrowserRouter, Route, Switch } 
  from 'react-router-dom'; 
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import AppBar from './Admin/AdminComponents/AppBar';
import './default.scss';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <div className="main"> 
      <Switch>
          <Route exact path='/' component={Homepage}/> 
          <Route exact path='/registration' component={Registration}/> 
          <AppBar>
          
          </AppBar>
          
      </Switch>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
