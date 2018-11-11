import React from 'react'
import { Form } from '@auth0/cosmos'

const styles = {
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        paddingRight: '5em',
    }
}

export class CreateEvent extends React.Component {
    state = {
        name: ''
    }

    handleInput = (key, e) => {
        this.setState({
            [key]: e.target.value
        })
    }

    render() {
        return (
            <div style={styles.container}>
                <Form>
                    <Form.TextInput
                        label="Name"
                        type="text"
                        placeholder="Enter Name"
                        value={this.state.name}
                        onChange={(e) => this.handleInput('name', e)} />
                    <Form.TextInput
                        label="Name"
                        type="text"
                        placeholder="Enter Name"
                        value={this.state.name}
                        onChange={(e) => this.handleInput('name', e)} />
                </Form>
            </div>
        )
    }
}