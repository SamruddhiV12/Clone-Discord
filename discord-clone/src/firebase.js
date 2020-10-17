import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAB3Fz5Qv6kHosiAPDxPfG5gjiqz-aQ32s",
  authDomain: "discord-clone-e97bf.firebaseapp.com",
  databaseURL: "https://discord-clone-e97bf.firebaseio.com",
  projectId: "discord-clone-e97bf",
  storageBucket: "discord-clone-e97bf.appspot.com",
  messagingSenderId: "452648173778",
  appId: "1:452648173778:web:0c35b40597cb5375596d0b"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider} ;
  export default db;