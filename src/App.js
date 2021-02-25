import React,{Component} from 'react';
import { BrowserRouter, Route, Switch, Redirect } 
  from 'react-router-dom'; 

import MainLayout from  './layout/mainLayout';
import HomeLayout from  './layout/HomeLayout';

import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import Login from './pages/Login';

import AppBar from './Admin/AdminComponents/AppBar';
import Home from './Admin/Pages/Home';

import './default.scss';

import { auth, handleUserProfile } from './firebase/utils';

const initialState = {
  currentUser : null
};

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      ...initialState
    };
  }

  //eventListener
  authListener = null;

  componentDidMount(){
    	this.authListener = auth.onAuthStateChanged(async userAuth => {
        if (userAuth){
          const userRef = await handleUserProfile(userAuth);
          userRef.onSnapshot(snapshot => {
            this.setState({
              currentUser: {
                id: snapshot.id,
                ...snapshot.data()
              }
            })
          })
        }

        this.setState({
          ...initialState
        });
      });
  }

  componentWillUnmount(){
      this.authListener();
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div className="App"> 
        <Switch>
            <Route exact path='/' render={() => (
              <HomeLayout currentUser={currentUser}>
                <Homepage />
              </HomeLayout>
            )}/> 
            <Route exact path='/registration' render={() => currentUser ? <Redirect to="/"/> : (
              <MainLayout currentUser={currentUser}>
                <Registration />
              </MainLayout>
            )}/> 
             <Route exact path='/login' 
              render={() => currentUser ? <Redirect to="/"/> :  (
                <MainLayout currentUser={currentUser}>
                  <Login />
                </MainLayout>
              )}/> 
            <AppBar/>
            <Route exact path="admin" component={Home}/>
           
            
        </Switch>
        
        </div>
    );
  }
 
}

export default App;
