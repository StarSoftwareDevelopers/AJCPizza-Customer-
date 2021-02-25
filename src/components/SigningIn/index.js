import React from 'react';
import Buttons from './../Forms/Button';
import { signInWithGoogle} from './../../firebase/utils';
import './style.scss';

const SigninIn = props => {
    return (
        <div className="signin">
            <div className="wrap">
                <h2>
                    Login
                </h2>

                <div className="formWrapping">
                    <form>
                        <div className="socialSigningIn">
                            <div className="row">
                                <Buttons onClick>
                                    Sign in with Google
                                </Buttons>
                            </div>
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SigninIn;