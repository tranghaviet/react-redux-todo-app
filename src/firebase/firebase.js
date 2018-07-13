import firebase from 'firebase'

const config = {
  // TODO: replace by your configuration
  apiKey: "AIzaSyCK4crPEjFL8B8Bt2Shg_RWJgjk-Cf-IyY",
  authDomain: "tranghv-react-redux-todo.firebaseapp.com",
  databaseURL: "https://tranghv-react-redux-todo.firebaseio.com",
  projectId: "tranghv-react-redux-todo",
  storageBucket: "",
  messagingSenderId: "441451901990"
}

firebase.initializeApp(config);

export default firebase
