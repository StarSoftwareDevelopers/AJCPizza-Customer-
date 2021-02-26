import React,{Component} from 'react';
import './style.scss';
import Typography from '@material-ui/core/Typography';
import Button from './../Forms/Button';
import { signInWithGoogle,auth } from './../../firebase/utils';
import FormInput from './../Forms/FormInput';
import {Link} from 'react-router-dom';
import WrapAuth from './../WrapAuth';

const initialState = {
    email: '',
    password: '',
    errors: []
};

class SigninIn extends Component {
    constructor(props){
        super(props);
        this.state={
            ...initialState
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name] : value
        });
    }

    handleSubmit = async e => {
        e.preventDefault();
        const { email, password } = this.state;

        try{
          
            await auth.signInWithEmailAndPassword(email,password)
            .then(()=> {
                this.setState({
                    ...initialState
                });
            })
            .catch(()=> {
                const err = ['Wrong Email or Password. Please try again.'];
                this.setState({
                    errors: err
                }); 
            });
           
            
        }catch(err){
            console.log
        }
    }

    render() {

        const { email, password, errors} = this.state;

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
                            <form onSubmit={this.handleSubmit}>

                                <FormInput  
                                    type="email"
                                    name="email"
                                    value={email}
                                    placeholder="Email"
                                    handleChange = {this.handleChange}
                                />

                                
                                <FormInput  
                                    type="password"
                                    name="password"
                                    value={password}
                                    placeholder="Password"
                                    handleChange = {this.handleChange}
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

                                    <Typography align="center" variant="subtitle1" display="block">
                                        <Link to="/recovery">
                                            Forgot Password?
                                        </Link>
                                    </Typography>

                                    <Link to="/registration">
                                        <Typography variant="h6" align="center" display="block" style={{marginTop: '.5rem'}}>
                                        Not yet Registered? Register here.
                                        </Typography>
                                    </Link>
                            </form>
                        </div>
            </WrapAuth>
        )
    }
   
}

export default SigninIn;