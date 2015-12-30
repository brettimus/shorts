const React = require("react");

const Note = () => ({
    render() {
        return (
            <li>
                {this.props.note}
            </li>
        );
    },
});

const NoteList = () => ({
    notes() {
        let {notes} = this.props.store.getState();
        return notes.map((note, i) => <Note key={i} note={note} />)
    },

    render() {
        return (
            <ul>
                {this.notes()}
            </ul>
        );
    },
});

module.exports = NoteList;