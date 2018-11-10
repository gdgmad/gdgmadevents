import React from 'react'
import { Router } from '@reach/router'
import { Login, Home } from './component'

const App = () => {
    return (
        <Router>
            <Login path='/' />
            <Home path='/home' />
        </Router>
    )
}

export default App