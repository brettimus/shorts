const React = require("react");

const NoteInput = () => ({
    render() {
        return (
            <input onChange={this.props.handleChange} value={this.props.value} />
        );
    },
});

const NoteButton = () => ({
    render() {
        return (
            <button onClick={this.props.handleClick}>
                {this.props.children}
            </button>
        );
    },
});

const NoteForm = React.createClass({
    handleButtonClick(event) {
        event.stopPropagation();
        event.preventDefault();

        let {store} = this.props;

        store.dispatch({ type: "ADD_NOTE", });
    },

    handleInputChange(event) {
        event.stopPropagation();
        event.preventDefault();

        let {store} = this.props;
        let {value} = event.target;

        store.dispatch({
            type: "EDIT_NOTE_INPUT",
            value,
        });
    },

    render() {
        let {store} = this.props;
        let state = store.getState();
        return (
            <form>
                This is a form
                <NoteInput 
                  handleChange={this.handleInputChange} 
                  value={state.input} />

                <NoteButton handleClick={this.handleButtonClick}>
                    Add
                </NoteButton>
            </form>
        );
    },
});

module.exports = NoteForm;