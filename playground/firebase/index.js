import firebase from 'firebase';
import {config} from './../../app/keys/firebase';

firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'ReactTodo',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Enrique',
    age: 22
  }
}).then(() => {
  console.log("set worked!");
}, (e) => {
  console.log("set failed!");
});

// firebaseRef.set({
//   isRunning: false
// });
//
// firebaseRef.child('app').set({
//   name: 'ReactTodo'
// });
//
// firebaseRef.child('user').set({
//   name: 'Henry'
// });
//
// firebaseRef.update({
//   isRunning: false,
//   'app/name': 'Todo App'
// });
//
// firebaseRef.child('app').update({
//   name: 'Todo Application'
// }).then(() => {
//   console.log('update worked!')
// }, (e) => {
//   console.log('updated failed!');
// });
//
// firebaseRef.update({
//   'app/name': 'My React App',
//   'user/name': 'Hen'
// });
//
// firebaseRef.child('app').update({name: 'My awesome React App'});
//
// firebaseRef.child('user').update({name: 'Enrique Benitez'});
//
// firebaseRef.remove();
//
// firebaseRef.child('app/name').remove();
//
// firebaseRef.child('app').update({
//   version: '2.0.0',
//   name: null
// });
//
// firebaseRef.update({
//   isRunning: null
// });
//
// firebaseRef.child('user/name').remove();
//
// firebaseRef.once('value').then((snapshot) => {
//   console.log('got entire database', snapshot.val());
// }, (e) => {
//   console.log('unable to fetch value');
// });
//
// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('got entire database', snapshot.key, snapshot.val());
// }, (e) => {
//   console.log('unable to fetch value');
// });
//
// var logData = (snapshot) => {
//   console.log('got value', snapshot.val());
// };
// firebaseRef.on('value', logData);
//
// firebaseRef.off(logData);
// firebaseRef.off();
//
// firebaseRef.update({isRunning: false});
//
// firebaseRef.child('user').on('value', (snapshot) => {
//   console.log('user ref changed', snapshot.val());
// });
//
// firebaseRef.child('user').update({name: 'bntz'});
//
// firebaseRef.child('app').update({name: 'My Awesome React Todo App'});
//
// var notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// });
//
// var newNoteRef = notesRef.push();
//
// newNoteRef.set({
//   text: 'Walk the dog'
// });
// var newNoteRef = notesRef.push({
//   text: 'Learn Firebase!'
// });
// console.log('Todo id', newNoteRef.key);
//
// notesRef.update({text: 'Go to gym'});
// notesRef.remove();
//
// var todosRef = firebaseRef.child('todos');
//
// todosRef.on('child_added', (snapshot) => {
//   console.log('New todo added', snapshot.key, snapshot.val());
// });
//
// todosRef.push({
//   text: 'My first todo item'
// });
//
// todosRef.push({
//   text: 'My second todo item'
// });
