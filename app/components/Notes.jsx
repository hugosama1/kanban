import React from 'react';
import Note from './Note.jsx';
import List from 'material-ui/lib/lists/list';

export default ({notes,onEdit,onDelete}) => {
	const style = {
	  width:'30%',
	};
	return (
	        <List style={style}> {notes.map(note =>
	        	<Note onDelete={onDelete.bind(null,note.id)} onEdit ={onEdit.bind(null,note.id)} key={note.id} task={note.task} />
	        )}
	        </List>
		)
}