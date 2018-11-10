import React from 'react'
import firebase from '../firebase'

export * from './authroute'

export const Login = (props) => {
    return <div onClick={() => {
        firebase.anonymous().then(user => {
            props.navigate('/admin')
        })
    }}>This is a login page.</div>
}
export const Home = (props) => {
    return <div onClick={() => {
        firebase.signOut().then(() => {
            props.navigate('/')
        })
    }}>This is a home page.</div>
}
export const NotFound = () => <div><h2>Not found</h2></div>