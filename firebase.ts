import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBNncvvu_kxX8CPG29NRiHHNkOm7hiWxaw",
  authDomain: "fakeflix-96c95.firebaseapp.com",
  projectId: "fakeflix-96c95",
  storageBucket: "fakeflix-96c95.appspot.com",
  messagingSenderId: "305172393704",
  appId: "1:305172393704:web:c1572bc75ef84ad4cca35d"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }