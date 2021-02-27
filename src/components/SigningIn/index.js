import React,{ useState } from 'react';
import {Link, withRouter} from 'react-router-dom';
import './style.scss';
import Typography from '@material-ui/core/Typography';
import Button from './../Forms/Button';
import { signInWithGoogle,auth } from './../../firebase/utils';
import FormInput from './../Forms/FormInput';
import WrapAuth from './../WrapAuth';

const SigninIn = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const resetForm = () =>{
        setEmail('');
        setPassword('');
        setErrors([]);
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try{
            await auth.signInWithEmailAndPassword(email,password)
            .then(()=> {
              resetForm();
              props.history.push('/');
            })
            .catch(()=> {
                const err = ['Wrong Email or Password. Please try again.'];
                setErrors(err);
            });
           
            
        }catch(err){
            console.log(err);
        }
    }

    const configAuth ={
        headLine: 'Log In'
    }

        return (
            <WrapAuth {...configAuth} >
                        <div className="formWrap">
      
                    {errors.length > 0 && (
                        <Typography color="error" align="center">
                            {errors.map((e, index) => {
                                return (
                                    <li key={index} style={{listStyleType: "none"}}>
                                        {e}
                                    </li>
                                );
                            })}
                        </Typography>
                    )}
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

                                <Button type="submit">
                                    <Typography variant="h6" align="center" display="block">
                                        {/* This styling could be enhanced in Button - styles.scss */}
                                        Log In
                                    </Typography>
                                </Button>

                                    <div className="socialSignin">
                                        <div className="row">
                                            
                                            {/* Put a google Icon after the <Button> */}
                                            <Button onClick={signInWithGoogle}>
                                                <Typography variant="h6" align="center" display="block">
                                                    {/* This styling could be enhanced in Button - styles.scss */}
                                                    Sign In With Google
                                                </Typography>
                                            </Button>
                                        </div>
                                    </div>

                                    <Link to="/recovery">
                                        <Typography align="center" variant="subtitle1" display="block">
                                            Forgot Password?
                                        </Typography>
                                    </Link>
                                    {/* <Link to="/registration">
                                        <Typography variant="h6" align="center" display="block" style={{marginTop: '.5rem'}}>
                                        Not yet Registered? Register here.
                                        </Typography>
                                    </Link> */}
                            </form>
                        </div>
            </WrapAuth>
        );
    }

export default withRouter(SigninIn);