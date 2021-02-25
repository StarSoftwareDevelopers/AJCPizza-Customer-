import React,{Component} from 'react';
import './style.scss';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from './../Forms/Button';
import { signInWithGoogle,auth } from './../../firebase/utils';
import FormInput from './../Forms/FormInput';

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
}
theme.typography.h6= {
    fontSize: '1rem',
    '@media (min-width:600px)': {
      fontSize: '1rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '12px',
    },
};

const initialState = {
    email: '',
    password: ''
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
          
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({
                ...initialState
            });
            
        }catch(err){
            console.log(err);
        }
    }

    render() {

        const { email, password} = this.state;

        return (
            <div className="signin">
                <div className="wrap">
                    <ThemeProvider theme = {theme}>
                        <Typography variant="h2" align="center" display="block" className="font">
                            Log In
                        </Typography>
                        <div className="formWrap">
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
                            </form>
                        </div>
                    </ThemeProvider>
                </div>
            </div>
        )
    }
   
}

export default SigninIn;