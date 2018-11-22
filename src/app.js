import React from 'react'
import { Router } from '@reach/router'
import { Login, Home, NotFound, AuthorizedRoute } from './component'

const App = () => {
    return (
        <Router>
            <Login path='/'/>
            <AuthorizedRoute path='/admin'>
                <Home path='/' />
                <NotFound default />
            </AuthorizedRoute>
            <NotFound default />
        </Router>
    )
}

export default App