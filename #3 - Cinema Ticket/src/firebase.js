import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
  apiKey: "AIzaSyCqwIOlRb2KnmnGThApySUqtm14Ie51mK0",
  authDomain: "cinema-ticket-df224.firebaseapp.com",
  databaseURL: "https://cinema-ticket-df224-default-rtdb.firebaseio.com",
  projectId: "cinema-ticket-df224",
  storageBucket: "cinema-ticket-df224.appspot.com",
  messagingSenderId: "519945132603",
  appId: "1:519945132603:web:f842a036b8254753dd9a1e"
})
// Initialize Firebase
export const db = firebaseApp.database();