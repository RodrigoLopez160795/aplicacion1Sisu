const {initializeApp} = require('firebase/app');
const {getFirestore} = require('firebase/firestore');
const firebaseConfig = {
    apiKey: "AIzaSyCDIHEEdl8yV8VC8aoWc1Z5rZRg9RwtFu8",
    authDomain: "aplicacion1-8700e.firebaseapp.com",
    projectId: "aplicacion1-8700e",
    storageBucket: "aplicacion1-8700e.appspot.com",
    messagingSenderId: "264867475035",
    appId: "1:264867475035:web:95fcaa44b7278dfdc9d97e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
module.exports = db;

