import React from 'react'
import { CreateEvent } from '../event'
import { FormGroup, Button } from '@auth0/cosmos'
import { AddVenue } from '../venue'
import { Agenda } from '../agenda'
import _ from 'lodash'
import firebase from '../../firebase'

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

    state = {
        submitStatus: ''
    }

    updateState = (key, e) => {
        const { target: { name, value } } = e
        let result = this.state
        const member = key ? `${key}.${name}` : `${name}`
        result = _.set(result, `data.${member}`, value)

        this.setState(result)
    }

    createEvent = () => {
        this.setState({
            submitStatus: 'loading'
        })

        firebase.createEvent(this.state.data).then(() => {
            this.setState({
                submitStatus: 'success'
            })
            setTimeout(() => {
                this.setState({
                    submitStatus: ''
                })
            }, 2000)
            console.log('Success')
        }).catch(err => {
            alert(`${err}`)
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
                <Button 
                    onClick={this.createEvent}
                    appearance="primary"
                    loading={this.state.submitStatus === 'loading'}
                    success={this.state.submitStatus === 'success'}>Create Event</Button>
            </div>
        )
    }
}