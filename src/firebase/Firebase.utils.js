import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyBTxuaOnRLtSF2kCt9sVmvJIz0o7ERDHsM',
  authDomain: 'grogoapp.firebaseapp.com',
  databaseURL: 'https://grogoapp.firebaseio.com',
  projectId: 'grogoapp',
  storageBucket: 'grogoapp.appspot.com',
  messagingSenderId: '581815556254',
  appId: '1:581815556254:web:ed6c7ef37abafa6bc9438f',
  measurementId: 'G-W07FGNBS2B'
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
