const React = require("react");

const App = () => ({
    render() {
        let styles = {
            color: "white",
            fontWeight: 300,
            lineHeight: 1.6,
            position: "absolute", 
            textAlign: "center",
            top: "20%", 
            width: "100%"
        };

        return (
            <h1 style={styles}>
                <b>Hello!</b> 
                <br />
                Welcome to notes.
            </h1>
        );
    },
});

module.exports = App;