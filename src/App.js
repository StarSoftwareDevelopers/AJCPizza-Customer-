import React from 'react';
import { BrowserRouter, Route, Switch } 
  from 'react-router-dom'; 

import MainLayout from  './layout/mainLayout';
import HomeLayout from  './layout/HomeLayout';

import Homepage from './pages/Homepage';
import Registration from './pages/Registration';

import AppBar from './Admin/AdminComponents/AppBar';
import Home from './Admin/Pages/Home';

import './default.scss';


function App() {
  return (
    <div className="App">
      
      
      <Switch>
          <Route exact path='/' render={() => (
            <HomeLayout>
              <Homepage />
            </HomeLayout>
          )}/> 
          <Route exact path='/registration' render={() => (
            <MainLayout>
              <Registration />
            </MainLayout>
          )}/> 
          <AppBar/>
          <Route exact path="admin" component={Home}/>
         
          
      </Switch>
      
      </div>
  );
}

export default App;
