import React from 'react'
import { Tabs } from '@auth0/cosmos'
import { CreateEvent } from '../create-event'

const styles = {
    container: {
        padding: '2em',
        height: '100vh'
    }
}

export class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = { selected: 0 }
    }

    handleSelected(selected) {
        this.setState({ selected })
    }

    render() {
        return (
            <div style={styles.container}>
                <Tabs onSelect={nextIndex => this.handleSelected(nextIndex)} selected={this.state.selected}>
                    <Tabs.Tab label="Create Event"><CreateEvent/></Tabs.Tab>
                    <Tabs.Tab label="Add Speaker">You can render anything you want here</Tabs.Tab>
                </Tabs>
            </div>
        )
    }
}