//all redux actions 
import UserTypes from './user.types';
import { auth, handleUserProfile, GoogleProvider, } from './../../firebase/utils';

export const setCurrentUser = user => ({
    type: UserTypes.SET_CURRENT_USER,
    payload: user
});

export const resetAuthForms = () => ({
    type: UserTypes.RESET_AUTH_FORMS
});

export const signInUser = ({ email, password }) => async dispatch => {
    try{
        await auth.signInWithEmailAndPassword(email,password);       
        dispatch({ 
            type: UserTypes.SIGN_IN_SUCCESS,
            payload: true
        });
        
    }catch(err){
        console.log(err);
    }
};

export const signUpUser = ({ displayName, email, password, confirmPassword}) => async dispatch => {
     //validation for password and confirmPassword
     if( password !== confirmPassword) {
       const err =['Password does not match'];
       dispatch({
        type: UserTypes.SIGN_UP_ERROR,
        payload: err
       });
       return;
     }

     try{

      const { user } = await auth.createUserWithEmailAndPassword(email,password);
      // await user.sendEmailVerification();
      await handleUserProfile(user, { displayName});
      dispatch({
          type: UserTypes.SIGN_UP_SUCCESS,
          payload: true
      });
    

     }catch(err){
       alert(err);
     }
};

export const resetPassword = ({ email}) => async dispatch => {
    const config = {
        url: 'http://localhost:3000/login'  
    };
        try{
            //the page you want to send the user to once they've reset the password
            //pass the url for the live site or the domain site when the site has gone live 
            await auth.sendPasswordResetEmail(email, config)
                //specify what happens if successful
                .then(() => {
                    dispatch({
                        type: UserTypes.RESET_PASSWORD_SUCCESS,
                        payload: true
                    });
                })
                .catch(() => {
                    const err = ['Email does not exist. Please try again'];
                    dispatch({
                        type: UserTypes.RESET_PASSWORD_ERROR,
                        payload: err
                    });
                });

        }catch(err){
            console.log(err);
        }
};

export const signInWithGoogle = () => async dispatch => {
    try {
        await auth.signInWithPopup(GoogleProvider)
            .then(() => {
                dispatch({ 
                    type: UserTypes.SIGN_IN_SUCCESS,
                    payload: true
                });
            });

    }catch(err) {
        console.log(err);
    }
   
};

