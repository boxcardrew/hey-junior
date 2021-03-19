import React from "react";
import RichTextEditor, { EditorValue } from "react-rte";



export const Editor = ({}) => {
	const toolbarConfig = {
		display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS', 'BLOCK_TYPE_DROPDOWN' ],

	}
	const [value, setValue] = React.useState(
		RichTextEditor.createEmptyValue()
  );
  const [string, setString] = React.useState('')
	return (
		<RichTextEditor
			toolbarConfig={toolbarConfig}
			onChange={(newValue) => {
        setValue(newValue);
        setString(value.toString('markdown'))
			}}
      value={value}
      
		/>
	);
};

export default Editor;