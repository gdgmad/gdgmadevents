import React from 'react'
import { CreateEvent } from '../event'
import { FormGroup, Button } from '@auth0/cosmos'
import { AddVenue } from '../venue'
import { Agenda } from '../agenda'
import _ from 'lodash'

const styles = {
    container: {
        padding: '1em',
        //height: '100vh',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
    }
}

export class Home extends React.Component {

    state = {}

    updateState = (key, e) => {
        const { target: { name, value } } = e
        let result = this.state
        const member = key ? `${key}.${name}` : `${name}`
        result = _.set(result, member, value)

        this.setState(result, () => {
            console.log(JSON.stringify(this.state))
        })
    }

    render() {
        return (
            <div style={styles.container}>

                <FormGroup>
                    <Agenda updateState={this.updateState} />
                    <AddVenue updateState={this.updateState} />
                    <CreateEvent updateState={this.updateState} />
                </FormGroup>
                <Button>Create Event</Button>
            </div>
        )
    }
}