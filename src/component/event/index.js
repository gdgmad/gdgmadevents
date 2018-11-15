import React from 'react'
import { Form } from '@auth0/cosmos'

import { lastSatOfMonth } from '../../utils'
import * as moment from 'moment'

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
        date: ''
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
        const name = `${this.eventName} ${date.format('MMMM')} ${date.format('YYYY')}`
        const formatedDate = date.format('DD-MM-YYYY')
        this.handleInput({ target: { name: "name", value: name } })
        this.handleInput({ target: { name: "date", value: formatedDate } })
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
                        <Form.TextInput
                            label="Date"
                            type="text"
                            name="date"
                            placeholder="Enter"
                            value={this.state.date}
                            onChange={this.handleInput} />
                    </Form.FieldSet>
                </Form>
            </div>
        )
    }
}