import React from 'react'
import { Form } from '@auth0/cosmos'
import FileUpload from '../file-upload';

export class AddSpeaker extends React.Component {
    state = {
        name: '',
        twitter: '',
        image: ''
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        this.props.updateState(`${this.props.agenda}.speaker`, e)
    }

    onFileUploadSuccess = (url) => {
        const e = {
            target: {
                name: 'image',
                value: url
            }
        }
        this.props.updateState(`${this.props.agenda}.speaker`, e)
    }

    onFileUploadError = () => {
        const e = {
            target: {
                name: 'image',
                value: undefined
            }
        }
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
                        label="Twitter"
                        type="text"
                        name="twitter"
                        placeholder="Enter twitter handle"
                        value={this.state.twitter}
                        onChange={this.handleInput} />
                    <FileUpload label="Pick image" folderName="speakers"
                        onSuccess={this.onFileUploadSuccess}
                        onError={this.onFileUploadError} />
                </Form.FieldSet>
            </div>
        )
    }
}