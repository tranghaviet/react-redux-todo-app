import firebase from './firebase'

export const todosRef = firebase.database().ref('todos')

export const updateFirebase = (payload, errorHandler) => todosRef.update(payload, errorHandler)

// Listen on data change from server on firebase
// events: value, child_added, child_changed, child_removed, child_moved (ordered data)
todosRef.on('value', snapshot => {
  console.log('Firebase updated')
  console.log(snapshot.val())
})
