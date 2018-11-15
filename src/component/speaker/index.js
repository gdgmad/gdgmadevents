import React from 'react'
import { Form } from '@auth0/cosmos'

export class AddSpeaker extends React.Component {
    state = {
        name: '',
        email: '',
        twitter: ''
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        this.props.updateState(`${this.props.agenda}.speaker`, e)
    }

    render() {
        return (
            <div style={{ marginTop: '2em' }}>
                <Form.FieldSet label="Add Speaker" >
                    <Form.TextInput
                        label="Name"
                        type="text"
                        placeholder="Enter Name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleInput} />
                    <Form.TextInput
                        label="Email"
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={this.state.email}
                        onChange={this.handleInput} />
                    <Form.TextInput
                        label="Twitter"
                        type="text"
                        name="twitter"
                        placeholder="Enter twitter handle"
                        value={this.state.twitter}
                        onChange={this.handleInput} />
                </Form.FieldSet>
            </div>
        )
    }
}