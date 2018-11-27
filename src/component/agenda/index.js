import React from 'react'
import { Session } from './agenda'
import { Button } from '@auth0/cosmos'

const styles = {
    container: {
        paddingLeft: '1em',
        paddingRight: '1em',
        width: '50vw'
    }
}

export class Agenda extends React.Component {
    state = {
    
    }

    components = [
        Session
    ]

    handleClick = () => { 
        this.components.push(Session)
        //to trigger re-render
        this.setState((prev) => prev)
    }

    render() {
        const controls = this.components.map((value, index) => {
            const Control = value
            const agenda = `agenda${index+1}`
            return <Control key={agenda} agenda={agenda} updateState={this.props.updateState} />
        })
        
        return (
            <div style={styles.container}>
                {controls}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Button style={{ marginLeft: '1em', alignSelf: 'flex-end' }} onClick={this.handleClick}>Add</Button>
                </div>
            </div>
        )
    }
}