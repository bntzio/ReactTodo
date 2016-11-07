import firebase from 'firebase';
import {config} from 'firebaseConfig';

try {
  firebase.initializeApp(config);
} catch (e) {
  console.log('There was an error: ', e);
};

export var firebaseRef = firebase.database().ref();

export default firebase;
