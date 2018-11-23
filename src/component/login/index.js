import React from 'react'
import { Form } from '@auth0/cosmos'
import firebase from '../../firebase'

const styles = {
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: '5em',
        height: '100vh',
    }
}

const INITIAL_STATE = {
    email: '',
    password: '',
    loading: false,
    error: null
}
export class Login extends React.Component {

    state = { ...INITIAL_STATE }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            loading: true
        })
        firebase.login(this.state.email, this.state.password).then(user => {
            this.setState({ ...INITIAL_STATE })
            this.props.navigate('/admin')
        }).catch(err => {
            this.setState({
                error: err.message,
                loading: false,
            })
        })
    }

    handleInput = (key, e) => {
        this.setState({
            [key]: e.target.value,
            error: null
        })
    }

    render() {
        return <div style={styles.container}>
            <div style={{ padding: '5em', backgroundColor: 'lightgrey' }}>
                <Form layout="label-on-left">
                    <Form.TextInput
                        label="Email"
                        type="email"
                        placeholder="Enter email"
                        value={this.state.email}
                        onChange={(e) => this.handleInput('email', e)} />
                    <Form.TextInput
                        label="Password"
                        type="password"
                        placeholder="Enter password"
                        value={this.state.password}
                        onChange={(e) => this.handleInput('password', e)} />
                    <Form.Actions primaryAction={{ label: 'Login', loading: this.state.loading, handler: this.handleSubmit }} />
                </Form>
                {this.state.error && <p style={{ color: 'red' }}>{this.state.error}</p>}
            </div>
        </div>
    }
}