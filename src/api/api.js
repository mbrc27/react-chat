import firebase from 'firebase';
import database from '../db/firebase';

export const getRoomsListener = emitter =>
  database.ref('chatrooms').on('value', data => emitter(data.val()));

export const stopRoomsListener = () => database.ref('chatrooms').off();

export const getMessageListener = (emitter, roomId) =>
  database.ref(`rooms/${roomId}`).on('value', data => emitter(data.val()));

export const stopMessageListener = roomId => database.ref(`rooms/${roomId}`).off();

export const createChatRoom = roomId =>
  database
    .ref('rooms')
    .child(roomId)
    .push({
      username: 'ChatBot',
      photoURL: 'http://placeskull.com/50/50/8D38C9',
      message: `Welcome to: '${roomId}' room!`,
      timestamp: Date.now(),
    })
    .then(database.ref('chatrooms').push(roomId));

export const postMessage = ({ roomId, username, message, photoURL }) => {
  const key = database.ref(`rooms/${roomId}`).push().key;
  return database.ref(`rooms/${roomId}/${key}`).set({
    username,
    photoURL,
    message,
    timestamp: Date.now(),
  });
};

export const googleLogin = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithRedirect(provider);
};

export const getGoogleToken = () => firebase.auth().getRedirectResult();
