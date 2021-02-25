import React,{Component} from 'react';
import './style.scss';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from './../Forms/Button';
import { signInWithGoogle } from './../../firebase/utils';

//responsive font size that only covers around the ThemeProvider or you can omit the typography and the material-ui here
const theme = createMuiTheme();
theme.typography.h2 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
},
theme.typography.h6= {
    fontSize: '1rem',
    '@media (min-width:600px)': {
      fontSize: '1rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '12px',
    },
};

class SigninIn extends Component {

    handleSubmit = async e => {
        e.preventDefault();
    }

    render() {
        return (
            <div className="signin">
                <div className="wrap">
                    <ThemeProvider theme = {theme}>
                        <Typography variant="h2" align="center" display="block" className="font">
                            Log In
                        </Typography>
                        <div className="formWrap">
                            <form onSubmit={this.handleSubmit}>
                                <div className="socialSignin">
                                    <div className="row">
                                        {/* Put an google Icon after the <Button> */}
                                        <Button onClick={signInWithGoogle}>
                                            <Typography variant="h6" align="center" display="block">
                                                {/* This styling could be enhanced in Button - styles.scss */}
                                                Sign In With Google
                                            </Typography>
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </ThemeProvider>
                </div>
            </div>
        )
    }
   
}

export default SigninIn;