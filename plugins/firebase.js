/* eslint-disable no-unused-expressions */
import * as firebase from 'firebase/app'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'NOT_MY_API_KEY',
  authDomain: '_IDK_',
  databaseURL: '_IDK_',
  projectId: '_IDK_',
  storageBucket: '_IDK_',
  messagingSenderId: '_ID_',
  appId: 'NOT_MINE',
}
// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : ''

export const auth = firebase.auth()
export default firebase
