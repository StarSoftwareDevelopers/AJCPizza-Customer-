import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';
import './styles.scss';

import { auth, handleUserProfile } from './../../firebase/utils';

import Typography from '@material-ui/core/Typography';

import FormInput from './../Forms/FormInput';
import Button from './../Forms/Button';

import WrapAuth from './../WrapAuth';

const Signup = props => {
  const [displayName, setdisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const reset = () => {
    setdisplayName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setErrors([]);
  };

  const handleFormSubmit = async event => {
    event.preventDefault();

    //validation for password and confirmPassword
     if( password !== confirmPassword) {
       const err =['Password does not match'];
       setErrors(err);
       return;
     }

     try{

      const { user } = await auth.createUserWithEmailAndPassword(email,password);
      // await user.sendEmailVerification();
      await handleUserProfile(user, { displayName});
      reset();
      props.history.push('/');//access to history and possible due to withRouter

     }catch(err){
       alert(err);
     }
  }


        const configAuth = {
          headLine : 'Registration'
        }

        return(
            <WrapAuth {...configAuth}>
                  <div className="formWrap">
                    
                  {/* Render any errors */}
                  {errors.length > 0 && (
                     <Typography color="error" align="center">
                      {errors.map((err,index) => {
                        return(
                          <li key={index} style={{listStyleType: "none"}}>
                            {err}
                          </li>
                        )
                      })}
                    </Typography>
                  )}

                    <form onSubmit={handleFormSubmit}>
                       <FormInput
                          type="text"
                          name="displayName"
                          value={displayName}
                          placeholder="Full Name"
                          handleChange = {e => setdisplayName(e.target.value)}
                       />
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
                          title="Password should be at least 6 characters long"
                       /> 
                 
                        <FormInput
                          type="password"
                          name="confirmPassword"
                          value={confirmPassword}
                          placeholder="Confirm Password"
                          handleChange = {e => setConfirmPassword(e.target.value)}
                       />

                       <Button type="submit">
                          <Typography variant="h6" align="center" display="block">
                                {/* This styling could be enhanced in Button - styles.scss */}
                                Register
                          </Typography>
                       </Button>
                    </form>
                    </div>
            </WrapAuth>
        );
    }


export default withRouter(Signup);
