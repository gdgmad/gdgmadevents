import React from 'react'
import firebase from '../../firebase'
import { Heading, Spinner, Icon } from '@auth0/cosmos'

export default class FileUpload extends React.Component {

    state = {
        uploadState: ''
    }

    handleChange = (e) => {
        const file = e.nativeEvent.target.files[0]
        firebase.uploadPicture(this.props.folderName, file)
            .then(url => {
                this.setState({
                    uploadState: ''
                })
                this.props.onSuccess(url)
            }).catch(err => {
                this.setState({
                    uploadState: 'error'
                })
                this.props.onError()
            })
        this.setState({
            uploadState: 'loading'
        })
    }

    render() {
        return (
            <div style={{ marginTop: '1.5em' }}>
                <Heading size={4}>{this.props.label}</Heading>
                <input type='file' onChange={this.handleChange} accept="image/*" />
                {this.state.uploadState === 'loading' && <Spinner size="medium" />}
                {this.state.uploadState === 'error' && <Icon name="danger" />}
            </div>)
    }
}