import React from 'react'
import DateTime from 'react-datetime'
import { Heading } from '@auth0/cosmos'

export function TimePicker(props) {
    return (
        <div>
            <Heading size={4}>{props.title}</Heading>
            <DateTime dateFormat={false} timeConstraints={{minutes:{step: 15}}} onChange={(time) => props.onChange(time, props.name)} />
        </div>
    )
}

export function DatePicker(props) {
    return (
        <div>
            <Heading size={4}>{props.title}</Heading>
            <DateTime value={props.val} onChange={(date) => props.onChange(date, props.name)} />
        </div>
    )
}