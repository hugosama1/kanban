import React from 'react';
import ListItem from 'material-ui/lib/lists/list-item';
import TextField from 'material-ui/lib/text-field';
import Delete from 'material-ui/lib/svg-icons/action/delete'

export default class Note extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editing:false
		}
	}

	render() {
		if(this.state.editing) {
			return this.renderEdit();
		}
		return <ListItem onClick={this.enableEdit} primaryText={this.props.task} rightIconButton={<Delete onClick={this.onDelete} />}/>;
	}

	onDelete = (e) => {
		e.stopPropagation();
		if(this.props.onDelete) {
			this.props.onDelete();
		}
	}

	enableEdit = () => {
		this.setState({
			editing:true
		});
	}

	disableEdit = () => {
		if(this.props.onEdit) {
			this.props.onEdit(this.refs.txtNote.getValue());
		}
		this.setState({
			editing:false
		});

	}

	renderEdit = () => {
		return <TextField onBlur={this.disableEdit} ref='txtNote' onEnterKeyDown={this.disableEdit} defaultValue={this.props.task} />;		
	}

	componentDidUpdate() {
		if( this.state.editing) {	
			this.refs.txtNote.focus();
		}
	}
} 