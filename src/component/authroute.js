import * as firebase from 'firebase'
import React, { Component } from 'react'
import { Redirect } from '@reach/router'

export class AuthorizedRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pending: true,
            loggedIn: undefined
        }
    }

    componentWillMount() {
        this.removeListerner = firebase.auth().onAuthStateChanged(user => {
            this.setState({
                pending: false,
                loggedIn: !!user
            });
        });
    }

    componentWillUnmount() {
        this.removeListerner()
    }

    render() {
        //const { component: Component, ...rest } = this.props
        const { children } = this.props
        {
            if (this.state.pending) return null

            //return this.state.loggedIn ? <Component {...rest} /> : <Redirect noThrow to='/' />
            return this.state.loggedIn ? <React.Fragment>{children}</React.Fragment> : <Redirect noThrow to='/' />
        }
    }
}