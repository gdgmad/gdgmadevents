import React from 'react'
import { Form } from '@auth0/cosmos'

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

export class Login extends React.Component {

    constructor(props) {
        super(props)
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        return <div style={styles.container}>
                <Form layout="label-on-left">
                    <Form.TextInput
                        label="Email"
                        type="text"
                        placeholder="Enter email" />
                    <Form.TextInput
                        label="Password"
                        type="password"
                        placeholder="Enter password" />
                    <Form.Actions primaryAction={{ label: 'Login', handler: this.handleSubmit }} />
                </Form>
        </div>
    }
}