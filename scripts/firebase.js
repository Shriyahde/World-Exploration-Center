// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCQLsEsYaxUcFwd-oht5UwE0P1AhU1TBp0",
    authDomain: "worldexplorationcenter.firebaseapp.com",
    projectId: "worldexplorationcenter",
    storageBucket: "worldexplorationcenter.appspot.com",
    messagingSenderId: "8596084542",
    appId: "1:8596084542:web:abeb19d7aba0b2773a7e6f",
    measurementId: "G-8HL487X37V"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

export default db;