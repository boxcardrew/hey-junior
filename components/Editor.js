import React from "react";
import RichTextEditor, { EditorValue } from "react-rte";



export const Editor = ({}) => {
	const [value, setValue] = React.useState(
		RichTextEditor.createEmptyValue()
  );
  const [string, setString] = React.useState('')
	return (
		<RichTextEditor
			onChange={(newValue) => {
        setValue(newValue);
        setString(value.toString('markdown'))
			}}
      value={value}
      
		/>
	);
};

export default Editor;