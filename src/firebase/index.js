import * as firebase from 'firebase'
import config from './firebaseConfig'

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