import React from 'react'
import { Form } from '@auth0/cosmos'

const styles = {
    container: {
        paddingLeft: '1em',
        paddingRight: '1em',
        width: '50vw'
    }
}

export class AddVenue extends React.Component {
    state = {
        address: '',
        link: ''
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        this.props.updateState('venue', e)
    }

    render() {
        return (
            <div style={styles.container}>
                <Form layout="label-on-top">
                    <Form.FieldSet label="Add Venue">
                        <Form.TextArea
                            label="Address"
                            type="text"
                            placeholder="Enter address"
                            value={this.state.address}
                            onChange={this.handleInput}
                            name="address" />
                        <Form.TextInput
                            label="Google Map Link"
                            name="link"
                            type="text"
                            placeholder="Enter"
                            value={this.state.link}
                            onChange={this.handleInput} />
                    </Form.FieldSet>
                </Form>
            </div>
        )
    }
}