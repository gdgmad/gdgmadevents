import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCAY1A2gh4-B11ebfYLojU2_Erug0C-64c",
    authDomain: "gdgmadevents.firebaseapp.com",
    databaseURL: "https://gdgmadevents.firebaseio.com",
    projectId: "gdgmadevents",
    storageBucket: "gdgmadevents.appspot.com",
    messagingSenderId: "561574056380"
}

class Firebase {

    constructor() {
        firebase.initializeApp(config)
    }

    login = (username, password) => {
        return firebase.auth().loginWithUsenameAndPassword(username, password)
    }

    anonymous = () => {
        return firebase.auth().signInAnonymously()
    }

    signOut = () => {
        return firebase.auth().signOut()
    }
}
const instance = new Firebase()

export default instance