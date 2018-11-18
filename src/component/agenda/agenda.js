import React from 'react'
import { Form } from '@auth0/cosmos'
import { AddSpeaker } from '../speaker'
import { TimePicker } from '../picker'
import './agenda.css'

const styles = {
    container: {
        paddingLeft: '1em',
        paddingRight: '1em',
        width: '50vw'
    }
}

export class Session extends React.Component {

    state = {
        name: '',
        slot: ''
    }

    agendaKey = `agenda.${this.props.agenda}`

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        this.props.updateState(this.agendaKey, e)
    }

    onChange = (time, key) => {
        const slot = time.format('hh:mm a')
        const e = { target: { name: key, value: slot } }
        this.setState({
            slot
        })
        this.props.updateState(this.agendaKey, e)
    }

    render() {
        return (
            <div style={styles.container}>
                <Form layout="label-on-top" style={{ marginTop: '2em' }}>
                    <Form.FieldSet label="Add Session">
                        <Form.TextInput
                            label="Talk Title"
                            type="text"
                            placeholder="Enter Title"
                            value={this.state.tile}
                            name="name"
                            onChange={this.handleInput} />
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '1em' }}>
                            <TimePicker onChange={this.onChange} name="start" title="Start" />
                            <TimePicker onChange={this.onChange} name="end" title="End" />
                        </div>
                        <AddSpeaker agenda={this.agendaKey} updateState={this.props.updateState} />
                    </Form.FieldSet>
                </Form>
            </div>
        )
    }
}