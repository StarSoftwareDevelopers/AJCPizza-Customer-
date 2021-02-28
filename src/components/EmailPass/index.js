import React,{ useState, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { resetPassStart, resetStateUser } from './../../Redux/User/user.actions';
import './styles.scss';
import WrapAuth from './../WrapAuth';
import FormInput from './../Forms/FormInput';
import Button from  './../Forms/Button';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const theme = createMuiTheme();

theme.typography.h6 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
};

const mapState = ({ user}) => ({
    resetPassSuccess: user.resetPassSuccess,
    errorUser: user.errorUser
});

const EmailPass = props => {
    const { resetPassSuccess, errorUser } = useSelector(mapState);
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if(resetPassSuccess) {
            alert('Password reset successful. Please check your email');
            dispatch(resetStateUser());
            props.history.push('/login');
        }
    },[resetPassSuccess]);

    useEffect(() => {
        if (Array.isArray(errorUser) && errorUser.length > 0) {
            setErrors(errorUser);
        }
        
    },[errorUser]);

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(resetPassStart({email}));
    }

        const configAuth ={
            headLine: 'Forgot your password?'
        }

        return (
            <WrapAuth {...configAuth}>
                <ThemeProvider theme={theme}>
                <Typography variant="body1" align="center">
                    Enter your email and we'll send you a link to reset your password
                </Typography>
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

                    <form onSubmit = {handleSubmit}>

                        <FormInput
                            type="email"
                            name="email"
                            value={email}
                            placeholder="Email"
                            handleChange={e => setEmail(e.target.value)}
                        />

                        <Button type="submit">
                            <Typography variant="h6">
                                Reset Password
                            </Typography>
                        </Button>
                    </form>
                </div>
                </ThemeProvider>
            </WrapAuth>
        );
    }


export default withRouter(EmailPass);
