import { Editor } from "react-draft-wysiwyg";
import { useState } from 'react';
import { EditorState } from 'draft-js'
import { convertToHTML } from 'draft-convert';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Form } from "formik";

export default function DraftEditor({ touched, setFieldValue, setTouched }) {
  
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  )
  const [convertedContent, setConvertedContent] = useState("");

  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
    setTouched({...touched, 'jobDescription': true })
  }

  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
    setFieldValue('jobDescription', convertedContent)
  }

  const createMarkup = (html) => {
    return {__html: html}
  }

  return (
    <>
    <Editor 
    editorState={editorState}
    onEditorStateChange={handleEditorChange}
      toolbar={{
        options: ['inline', 'blockType', 'fontSize', 'list', 'image', 'embedded', 'link'],
        inline: { 
          inDropdown: false,
          options: ['bold', 'italic', 'underline', 'monospace']
        },
        list: { 
          inDropdown: false,
          options: ['unordered', 'ordered']
        },
        link: { inDropdown: false },
      }}
    />
    {/* <div className="preview" dangerouslySetInnerHTML={createMarkup(convertedContent)} /> */}
    </>
  )
}