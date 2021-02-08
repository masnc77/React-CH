import firebase from 'firebase/app'
import '@firebase/firestore'

const app = firebase.initializeApp({
        apiKey: "AIzaSyAUfMB43OnePN-4wRhNw_wda0BqmSM-xXU",
        authDomain: "ch-ecom.firebaseapp.com",
        projectId: "ch-ecom",
        storageBucket: "ch-ecom.appspot.com",
        messagingSenderId: "776613034361",
        appId: "1:776613034361:web:0120fc789dc2e681f417a8",
        measurementId: "G-EP7FTK80M4"
      })



      export function getFirebase () {
          return app
      }



      export function getFirestore () {
          return firebase.firestore(app)
      }