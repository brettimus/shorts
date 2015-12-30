const React = require("react");

const NoteInput = React.createClass({
    componentDidMount() {
        let input = this.refs.noteInput;
        this.focus(input);
    },

    focus(input) {
        if (!input) return;
        input.focus();
        input.setSelectionRange(0, input.value.length);
    },

    render() {
        return (
            <input 
              ref="noteInput"
              onBlur={ this.props.handleBlur }
              onChange={ this.props.handleChange } 
              value={ this.props.value } />
        );
    }
});

const Note = () => ({

    handleChange(event) {
        let { id } = this.props;
        let { value } = event.target;
        this.props.store.dispatch({
            type: "EDIT_EXISTING_NOTE_INPUT",
            id,
            value,
        });
    },

    toggleEdit() {
        let { id } = this.props;
        this.props.store.dispatch({
            type: "TOGGLE_NOTE_EDIT",
            id,
        }); 
    },

    updateNote() {
        let { id } = this.props;
        this.props.store.dispatch({
            type: "UPDATE_NOTE",
            id,
        }); 
    },

    render() {
        let { isEditing, editValue, body } = this.props.note;

        if (isEditing) {
            return (
                <li>

                    <NoteInput handleBlur={ () => this.toggleEdit() }
                      handleChange={ (event) => this.handleChange(event) } 
                      value={editValue} />

                    <span onClick={ () => this.updateNote() } >
                        Update
                    </span>

                    &nbsp; | &nbsp;

                    <span onClick={ () => this.toggleEdit() } >
                        X
                    </span>
                </li>
            );
        }
        return (
            <li onClick={ () => this.toggleEdit() }>
                {body}
            </li>
        );
    },
});

const NoteList = () => ({
    getNotes() {
        let {notes} = this.props.store.getState();
        return notes.map((note, i) => <Note key={i} id={i} note={note} store={this.props.store} />)
    },

    render() {
        return (
            <ul>
                {this.getNotes()}
            </ul>
        );
    },
});

module.exports = NoteList;