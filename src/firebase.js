import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export const auth = firebase
  .initializeApp({
    apiKey: 'AIzaSyAUS1Aj6GQilp0JzdyjfjJeGLy2tddvQuQ',
    authDomain: 'chat-30a6f.firebaseapp.com',
    projectId: 'chat-30a6f',
    storageBucket: 'chat-30a6f.appspot.com',
    messagingSenderId: '803691883180',
    appId: '1:803691883180:web:8a7535f4bae65ff2ce4d09',
  })
  .auth();
