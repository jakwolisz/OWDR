import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

 
const config = {
  apiKey: "AIzaSyAUzxEeJRbN4TgUJ0OVxqwhjCge-o_JqMw",
  authDomain: "owdr-4b372.firebaseapp.com",
  databaseURL: "https://owdr-4b372.firebaseio.com",
  projectId: "owdr-4b372",
  storageBucket: "owdr-4b372.appspot.com",
  messagingSenderId: "120964700288",
  appId: "1:120964700288:web:79125411b06979166fae65",
  measurementId: "G-G7SVGJKRMH"
};
 
class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }
    // *** Auth API ***
 
doCreateUserWithEmailAndPassword = (email, password) =>
this.auth.createUserWithEmailAndPassword(email, password);

doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

doSignOut = () => this.auth.signOut();

doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
 
doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  // *** Fundations API Endpoint ***

  fundations = () => this.db.ref('fundations');

  // *** Contact Form message API Endpoint ***

  message = () => this.db.ref('message');

  // *** Share Form API Endpoint ***

  share = () => this.db.ref('share');

}
 
export default Firebase;