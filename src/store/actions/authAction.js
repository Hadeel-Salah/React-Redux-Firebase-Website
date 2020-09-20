export const signIn = (info) => {
    return (dispatch, getState, {getFirebase}) => {
      const firebase = getFirebase();

      firebase.auth().signInWithEmailAndPassword(
        info.email,
        info.password
      ).then(() => {
        dispatch({ type: 'LOGIN_SUCCESS' });
      }).catch((err) => {
        dispatch({ type: 'LOGIN_ERROR'});
      });
  
    }
  }
  export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
      const firebase = getFirebase();
  
      firebase.auth().signOut().then(() => {
        dispatch({ type: 'SIGNOUT_SUCCESS' })
      });
    }
  }