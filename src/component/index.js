import React from 'react'
import firebase from '../firebase'

export * from './authroute'
export * from './login'

export const Home = (props) => {
    return <div onClick={() => {
        firebase.signOut().then(() => {
            props.navigate('/')
        })
    }}>This is a home page.</div>
}
export const NotFound = () => <div><h2>Not found</h2></div>