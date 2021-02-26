import React,{Component} from 'react';
import { withRouter } from 'react-router-dom';
import './styles.scss';
import WrapAuth from './../WrapAuth';
import FormInput from './../Forms/FormInput';
import Button from  './../Forms/Button';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { auth } from './../../firebase/utils';
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

const initialState = {
    email: '',
    errors: []
};

class EmailPass extends Component {
    constructor(props){
        super(props);
        this.state={
            ...initialState
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        const { name, value} = e.target;
        this.setState ({
            [name] : value
        });
    };

    handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const{ email } = this.state;

            //the page you want to send the user to once they've reset the password
            //pass the url for the live site or the domain site when the site has gone live 
            const config = {
                url: 'http://localhost:3000/login'  
            };

            await auth.sendPasswordResetEmail(email, config)
                //specify what happens if successful
                .then(() => {
                    this.props.history.push('/login');
                })
                .catch(() => {
                    const err = ['Email does not exist. Please try again'];
                    this.setState({
                        errors: err
                    });
                });

        }catch(err){
            console.log(err);
        }
    }


    render() {

        const { email, errors } = this.state;

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

                    <form onSubmit = {this.handleSubmit}>

                        <FormInput
                            type="email"
                            name="email"
                            value={email}
                            placeholder="Email"
                            onChange={this.handleChange}
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
}

export default withRouter(EmailPass);
