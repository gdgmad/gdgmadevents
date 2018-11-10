import React from 'react'
import { Router } from '@reach/router'
import { Login, Home, NotFound } from './component'
import firebase from './firebase'
import {AuthorizedRoute} from './component'

const App = () => {
    return (
        <Router>
            <Login path='/' firebase={firebase} />
            <AuthorizedRoute path='/admin'>
                <Home path='/' />
                <NotFound default />
            </AuthorizedRoute>
            <NotFound default />
        </Router>
    )
}

export default App