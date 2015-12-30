const React = require("react");

const NoteInput = () => ({
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
            <form ref="noteForm" onSubmit={ this.props.handleSubmit }>
                <input className="input input-update"
                  ref="noteInput"
                  onChange={ this.props.handleChange } 
                  value={ this.props.value } />
            </form>
        );
    }
});

const NoteUpdateButton = () => ({
    handleClick(event) {
        event.stopPropagation;
        event.preventDefault;

        this.props.updateNote();
    },

    render() {
        return (
            <span onClick={(e) => this.handleClick(e) } >
                ok
            </span>
        );
    },
});

const Note = () => ({

    deleteNote() {
        let { id } = this.props;
        this.props.store.dispatch({
            type: "DELETE_NOTE",
            id,
        }); 
    },

    handleChange(event) {
        let { id } = this.props;
        let { value } = event.target;
        this.props.store.dispatch({
            type: "EDIT_EXISTING_NOTE_INPUT",
            id,
            value,
        });
    },

    handleSubmit(event) {
        event.stopPropagation();
        event.preventDefault();

        this.updateNote();
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
                <li className="note">
                    <NoteInput value={editValue}
                      handleSubmit= { (e) => this.handleSubmit(e) }
                      handleChange={ (e) => this.handleChange(e) } />

                    <div style={{ textAlign: "right", }}>
                        <NoteUpdateButton updateNote={ () => this.updateNote() } />
                        &nbsp; | &nbsp;
                        <span onClick={ () => this.toggleEdit() }>
                            nvm
                        </span>
                        &nbsp; | &nbsp;
                        <span onClick={ () => this.deleteNote() }>
                            del
                        </span>
                    </div>
                </li>
            );
        }
        return (
            <li className="note" onClick={ () => this.toggleEdit() }>
                {body}
            </li>
        );
    },
});

const NoteList = () => ({
    getNotes() {
        let {notes} = this.props.store.getState();
        if (notes.length === 0) return this.noNotesMessage();
        return notes.map((note, i) => <Note key={i} id={i} note={note} store={this.props.store} />)
    },

    noNotesMessage() {
        return (
            <p>
                No notes? No problem!
                <br />
                Add a note below.
            </p>
        );
    },

    render() {
        return (
            <div className="notes-container">
                <ul className="notes-list">
                    {this.getNotes()}
                </ul>
            </div>
        );
    },
});

module.exports = NoteList;