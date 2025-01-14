import firebase from "firebase/compat/app";
import "firebase/compat/performance";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyCTiNugUANm1FiEe-wTQlZIsGm1RrC1rfI",
    authDomain: "portdifolido.firebaseapp.com",
    projectId: "portdifolido",
    storageBucket: "portdifolido.firebasestorage.app",
    messagingSenderId: "206830902580",
    appId: "1:206830902580:web:be11a63bbdb93feb9a5961",
    measurementId: "G-EMM0EW2T85"
};

// Initialize Firebase
if(typeof window !== 'undefined' && !firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
    // Initialize Performance Monitoring and get a reference to the service
    const perf = firebase.performance();
}

export default firebase;

