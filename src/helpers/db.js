import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDl_sutuQl8j00L0h0lV7orejPfDOuX1I4",
  authDomain: "maviasun-a5162.firebaseapp.com",
  projectId: "maviasun-a5162",
  storageBucket: "maviasun-a5162.appspot.com",
  messagingSenderId: "354286970794",
  appId: "1:354286970794:web:b61fd8c1514f07b0a16dd3",
  measurementId: "G-N001FRJSSC"
};
 const fire =  firebase.initializeApp(firebaseConfig);

 export default fire;