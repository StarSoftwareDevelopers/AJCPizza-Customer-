import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Route, Switch, Redirect } 
  from 'react-router-dom'; 
import { setCurrentUser } from './Redux/User/user.actions';


  //layout
import MainLayout from  './layout/mainLayout';
import HomeLayout from  './layout/HomeLayout';

//pages
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import Recovery from './pages/Recovery';
import Login from './pages/Login';

import AppBar from './Admin/AdminComponents/AppBar';
import Home from './Admin/Pages/Home';

import './default.scss';

import { auth, handleUserProfile } from './firebase/utils';

class App extends Component {
  //eventListener
  authListener = null;

  componentDidMount(){
      const { setCurrentUser } = this.props;

    	this.authListener = auth.onAuthStateChanged(async userAuth => {
        if (userAuth){
          const userRef = await handleUserProfile(userAuth);
          userRef.onSnapshot(snapshot => {
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            });
          })
        }

        //when the user is logged out
        setCurrentUser(userAuth);
      });
  }

  componentWillUnmount(){
      this.authListener();
  }

  render() {
    const { currentUser } = this.props;

    return (
      <div className="App"> 
        <Switch>
            <Route exact path='/' render={() => (
              <HomeLayout>
                <Homepage />
              </HomeLayout>
            )}/> 
            <Route exact path='/registration' render={() => currentUser ? <Redirect to="/"/> : (
              <MainLayout>
                <Registration />
              </MainLayout>
            )}/> 
             <Route exact path='/login' 
              render={() => currentUser ? <Redirect to="/"/> :  (
                <MainLayout>
                  <Login />
                </MainLayout>
              )}/> 
              <Route exact path='/recovery' render={() => (
                <MainLayout>
                  <Recovery/>
                </MainLayout>
              )}/>      
              
            <AppBar/>
            <Route exact path="admin" component={Home}/>  
        </Switch>
        
        </div>
    );
  }
 
}

const mapStateToProps = ({user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
