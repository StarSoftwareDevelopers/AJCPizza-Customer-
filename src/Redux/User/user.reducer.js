import UserTypes from './user.types';

const INITIAL_STATE ={
    currentUser: null,
    signInSuccess: false,
    signUpSuccess: false,
    signUpError: [],
    resetPasswordSuccess: false,
    resetPasswordError: []
};

const userReducer = (state=INITIAL_STATE, action) => {
   switch(action.type){
       case UserTypes.SET_CURRENT_USER:
           return {
               ...state,
               currentUser: action.payload
           }
        case UserTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                signInSuccess: action.payload
            }
        case UserTypes.SIGN_UP_SUCCESS:
            return{
                ...state,
                signUpSuccess: action.payload
            }
        case UserTypes.SIGN_UP_ERROR:
            return{
                ...state,
                signUpError: action.payload
            }
        case UserTypes.RESET_PASSWORD_SUCCESS:
            return{
                ...state,
                resetPasswordSuccess: action.payload
            }
        case UserTypes.RESET_PASSWORD_ERROR:
            return{
                ...state,
                RESET_PASSWORD_ERROR: action.payload
            }
        case UserTypes.RESET_AUTH_FORMS:
            return{
                ...state,
                signInSuccess: false,
                signUpSuccess: false,
                signUpError: [],
                resetPasswordSuccess: false,
                resetPasswordError: []
            }
       default:
        return state;
   }
};
 
export default userReducer;
