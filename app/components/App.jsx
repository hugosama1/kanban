import React from 'react';
import uuid from 'node-uuid';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import Notes from './Notes.jsx';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {			
		    notes : [
			  	{
			  		id:uuid.v4(),
			  		task:'Learn Webpack'	
			  	},
			  	{
			  		id:uuid.v4(),
			  		task:'Learn React'	
			  	},
			  	{
			  		id:uuid.v4(),
			  		task:'Do laundry'	
			  	}
			]
		}
	}

	render() {
	const style = {
	  marginRight: 20,
	};
	const notes = this.state.notes;
	return (    
      	<div>	   
		    <FloatingActionButton onClick={this.addNote} mini={true} style={style}>
		      <ContentAdd />
		    </FloatingActionButton>
		    <Notes onEdit={this.editNote} notes={notes} onDelete={this.deleteNote}/>
      	</div>
		);
	} 

	deleteNote =(id,e) =>{
		this.setState({
			notes: this.state.notes.filter(note => note.id !== id)
		});
	}

	addNote = () => {
		let note = [{
			id: uuid.v4(),
			task:'new Note'
		}];
		this.setState({
			notes: this.state.notes.concat(note)
		});
	}

	editNote = (id,task) => {
		if( !task || !task.trim()) {
			return;
		}
		const notes = this.state.notes.map(note => {
			if(note.id === id ) {
				note.task = task;
			}
			return note;
		});

		this.setState({notes});
	}

}