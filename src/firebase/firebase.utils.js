import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  
    apiKey: "AIzaSyAwdPNqXNEid4K6ifTJbcEjXgGXB7baETA",
    authDomain: "ken-lange-digital-collage-art.firebaseapp.com",
    projectId: "ken-lange-digital-collage-art",
    storageBucket: "ken-lange-digital-collage-art.appspot.com",
    messagingSenderId: "2235736760",
    appId: "1:2235736760:web:a7022ab75d5b5d68f08a4d",
    measurementId: "G-1NR3042LMG"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;