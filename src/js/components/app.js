const React = require("react");

const NoteList = require("./note-list");
const NoteForm = require("./note-form");

const App = () => ({
    render() {
        console.log("Current State:", this.props.store.getState());
        return (
            <div>
                <h1>
                    Keep track of yourself.
                </h1>
                <p>
                    Shorts is a simple way to make short notes for yourself.
                </p>
                <hr/>
                <NoteList store={this.props.store} />
                <NoteForm store={this.props.store}/>
            </div>
        );
    },
});

module.exports = App;