import React,{ useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import { emailSignInStart, googleSignInStart } from './../../Redux/User/user.actions';

import './style.scss';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from './../Forms/Button';
import FormInput from './../Forms/FormInput';
import WrapAuth from './../WrapAuth';

const mapState = ({ user }) => ({
    currentUser: user.currentUser
}); //to get from the redux store 

const SigninIn = props => {
    const { currentUser } = useSelector(mapState);
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        //whenever signinsuccess is true
        if (currentUser) {
            resetForm();
            props.history.push('/');
        }

    },[currentUser]); 

    const resetForm = () =>{
        setEmail('');
        setPassword('');
        setErrors([]);
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(emailSignInStart({ email, password }));   
    }

    const handleGoogleSignIn = () => {
        dispatch(googleSignInStart());
    }

    const configAuth ={
        headLine: 'Log In'
    }

        return (
            <WrapAuth {...configAuth} >
                        <div className="formWrap">
      
                    {/* {errors.length > 0 && (
                        <Typography color="error" align="center">
                            {errors.map((e, index) => {
                                return (
                                    <li key={index} style={{listStyleType: "none"}}>
                                        {e}
                                    </li>
                                );
                            })}
                        </Typography>
                    )} */}
                            <form onSubmit={handleSubmit}>

                                <FormInput  
                                    type="email"
                                    name="email"
                                    value={email}
                                    placeholder="Email"
                                    handleChange = {e => setEmail(e.target.value)}
                                />

                                
                                <FormInput  
                                    type="password"
                                    name="password"
                                    value={password}
                                    placeholder="Password"
                                    handleChange = {e => setPassword(e.target.value)}
                                />          
                                <Link to="/recovery">
                                        <Typography align="center" variant="subtitle1" display="block">
                                            Forgot Password?
                                        </Typography>
                                    </Link>
                             
                                <Divider/> 
                                <br></br>
                                <Button type="submit">
                                    <Typography variant="h6" align="center" display="block">
                                        {/* This styling could be enhanced in Button - styles.scss */}
                                        Log In
                                    </Typography>
                                </Button>

                                    <div className="socialSignin">
                                        <div className="row">
                                            
                                            {/* Put a google Icon after the <Button> */}
                                            <Button onClick={handleGoogleSignIn}>
                                                <Typography variant="h6" align="center" display="block">
                                                    {/* This styling could be enhanced in Button - styles.scss */}
                                                    Sign In With Google
                                                </Typography>
                                            </Button>
                                        </div>
                                    </div>
                            </form>
                        </div>
            </WrapAuth>
        );
    }

export default withRouter(SigninIn);