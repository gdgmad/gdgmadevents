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
        this.auth = firebase.initializeApp(config).auth()
    }

    login = (username, password) => {
        return this.auth.signInWithEmailAndPassword(username, password)
    }

    anonymous = () => {
        return this.auth.signInAnonymously()
    }

    signOut = () => {
        return this.auth.signOut()
    }
}
const instance = new Firebase()

export default instance