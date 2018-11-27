import React, { Component } from 'react'
import { EditorState, convertToRaw } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { Heading, TextArea } from '@auth0/cosmos'
import draftToHtml from 'draftjs-to-html'

export class DraftEditor extends Component {
    state = {
        editorState: EditorState.createEmpty(),
        desc: ''
    }

    onEditorStateChange = (editorState) => {
        const desc = draftToHtml(convertToRaw(editorState.getCurrentContent()))

        this.setState({
            editorState,
            desc
        }, () => {
            const e = {
                target: {
                    name: 'desc',
                    value: desc
                }
            }
            this.props.onChange(e)
        })
    }

    render() {
        const { editorState, desc } = this.state
        return (
            <React.Fragment>
                <Heading size={4}>Description</Heading>
                <div style={{ border: '1px solid', minHeight: '40vh', paddingLeft: '.5em', paddingRight: '0.5em', }}>
                    <Editor
                        editorState={editorState}
                        wrapperClassName="demo-wrapper"
                        editorClassName="demo-editor"
                        onEditorStateChange={this.onEditorStateChange} />
                </div>
                <TextArea
                    readOnly
                    value={desc} />
            </React.Fragment>
        )
    }
}