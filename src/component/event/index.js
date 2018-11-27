import React from 'react'
import { Form } from '@auth0/cosmos'
import { lastSatOfMonth } from '../../utils'
import { DatePicker } from '../picker'
import FileUpload from '../file-upload'
import { DraftEditor } from '../editor'

const styles = {
    container: {
        paddingLeft: '1em',
        paddingRight: '1em',
        width: '50vw'
    }
}

export class CreateEvent extends React.Component {
    state = {
        name: '',
        date: '',
        desc: ''
    }

    eventName = "GDGMAD"

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        this.props.updateState(null, e)
    }

    componentDidMount() {
        const date = lastSatOfMonth()
        const name = `${this.eventName} ${date.format('MMMM')}, ${date.format('YYYY')}`
        this.handleInput({ target: { name: "name", value: name } })
        this.handleInput({ target: { name: "date", value: date.format('DD-MM-YYYY') } })
        this.handleChange(date, 'time')
    }

    handleChange = (input, key) => {
        const date = input.format('DD-MM-YYYY')
        this.setState({
            date
        })
        const e = { target: { name: key, value: input.valueOf() } }
        this.props.updateState(null, e)
    }

    onFileUploadSuccess = (url) => {
        const e = {
            target: {
                name: 'image',
                value: url
            }
        }
        this.props.updateState(null, e)
    }

    onFileUploadError = () => {
        const e = {
            target: {
                name: 'image',
                value: undefined
            }
        }
        this.props.updateState(null, e)
    }

    render() {
        return (
            <div style={styles.container}>
                <Form layout="label-on-top">
                    <Form.FieldSet label="Event">
                        <Form.TextInput
                            label="Name"
                            type="text"
                            name="name"
                            placeholder="Enter Name"
                            value={this.state.name}
                            onChange={this.handleInput} />
                        <DatePicker name="time" title="Date" val={this.state.date} onChange={this.handleChange} />
                        <DraftEditor name="desc" onChange={this.handleInput} />
                        <FileUpload label="Pick image" folderName="events" onSuccess={this.onFileUploadSuccess}
                            onError={this.onFileUploadError} />
                    </Form.FieldSet>
                </Form>
            </div>
        )
    }
}