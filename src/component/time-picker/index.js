import React from 'react'
import DateTime from 'react-datetime'

export default function TimePicker(props) {
    return (
        <div>
            <label>{props.title}</label>
            <DateTime dateFormat={false} timeConstraints={{minutes:{step: 15}}} onChange={(time) => props.onChange(time, props.name)} />
        </div>
    )
}