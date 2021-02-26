import React, {Component} from 'react';
import './styles.scss';

import { auth, handleUserProfile } from './../../firebase/utils';

import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import VisibilityIcon from '@material-ui/icons/Visibility';

import FormInput from './../Forms/FormInput';
import Button from './../Forms/Button';

const initialSate = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
  errors: []
};

const theme = createMuiTheme();
theme.typography.h2 = {
  fontSize: '1rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};

class Signup extends Component {

  constructor(props){
    super(props);
    this.state = {
      ...initialSate
    };

    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;

    this.setState({
     [name] : value 
    });
  }

  handleFormSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword} = this.state;

    //validation for password and confirmPassword
     if( password !== confirmPassword) {
       const err =['Password does not match'];
       this.setState({
        errors :  err
       });
       return;
     }

     try{

      const { user } = await auth.createUserWithEmailAndPassword(email,password);
      // await user.sendEmailVerification();
      await handleUserProfile(user, { displayName});

      this.setState({
        ...initialSate
      });

     }catch(err){
       console.log(err);
     }
  }

    render(){

        const { displayName, email, password, confirmPassword, errors} = this.state;

        return(
            <div className="signup">
                <div className="wrap">
                    <ThemeProvider theme={theme}>
                      <Typography variant="h2" align="center" display="block">
                             Sign Up
                        </Typography>
                    </ThemeProvider>

                  {/* Render any errors */}
                  {errors.length > 0 && (
                    <ul>
                      {errors.map((err,index) => {
                        return(
                          <li key={index}>
                            {err}
                          </li>
                        )
                      })}
                    </ul>
                  )}

                  <div className="formWrap">
                    <form onSubmit={this.handleFormSubmit}>
                       <FormInput
                          type="text"
                          name="displayName"
                          value={displayName}
                          placeholder="Full Name"
                          onChange={this.handleChange}
                       />
                        <FormInput
                          type="email"
                          name="email"
                          value={email}
                          placeholder="Email"
                          onChange={this.handleChange}
                       />
                       <FormInput
                          type="password"
                          name="password"
                          value={password}
                          placeholder="Password"
                          onChange={this.handleChange}
                       /> 
                        <FormInput
                          type="password"
                          name="confirmPassword"
                          value={confirmPassword}
                          placeholder="Confirm Password"
                          onChange={this.handleChange}
                       />

                       <Button type="submit">
                          <Typography variant="h6" align="center" display="block">
                                {/* This styling could be enhanced in Button - styles.scss */}
                                Register
                          </Typography>
                       </Button>
                    </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;