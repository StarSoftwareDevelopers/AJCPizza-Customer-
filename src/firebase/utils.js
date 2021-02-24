import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { firebaseConfig } from "./config";

firebase.initializeApp(firebaseConfig);

//instances of Auth and Firestore
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//utility function for the onclick event with the Sign in of Google button
const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider);

export const handleUserProfile = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const {uid} = userAuth;

    const userRef = firestore.doc(`users/${uid}`);

    //create new user
    const snapshot = await userRef.get();
    if (!snapshot.exists){
        const { displayName, email} = userAuth;
        const timestamp = new Date();
        //if the user exist  does not exist
        try{
            await userRef.set({
                displayName,
                email,
                createdDate: timestamp,
                ...additionalData
            });

        }catch(err){
            console.log(err);
        }
    }
    return userRef;
};