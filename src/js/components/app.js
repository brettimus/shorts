const React = require("react");

const NoteList = require("./note-list");
const NoteForm = require("./note-form");

const App = () => ({
    render() {
        console.log("Current State:", this.props.store.getState());

        return (
            <div>
                <p>
                    <b>Shorts</b>
                </p>
                <NoteList store={this.props.store} />
                <NoteForm store={this.props.store}/>
            </div>
        );
    },
});

module.exports = App;