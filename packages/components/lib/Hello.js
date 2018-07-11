"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            enthusiasmLevel: 1
        };
        this.getExclamationMarks = (numChars) => Array(numChars + 1).join("!");
        if ((props.enthusiasmLevel || 0) <= 0) {
            throw new Error("you could be a little more enthusiastic :o");
        }
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
        this.reset = this.reset.bind(this);
        console.log("these are initial props", props, this.state);
        this.state = {
            enthusiasmLevel: props.enthusiasmLevel || 1
        };
    }
    onIncrement() {
        this.setState({ enthusiasmLevel: this.state.enthusiasmLevel + 1 });
    }
    onDecrement() {
        this.state.enthusiasmLevel > 1
            ? this.setState({ enthusiasmLevel: this.state.enthusiasmLevel - 1 })
            : this.setState({ enthusiasmLevel: 0 });
    }
    reset() {
        this.setState({ enthusiasmLevel: 1 });
    }
    render() {
        console.log(this.props, this.state);
        return (React.createElement(react_native_1.View, { style: styles.root },
            React.createElement(react_native_1.Text, { style: styles.greeting },
                "Hello",
                " ",
                this.props.name +
                    this.getExclamationMarks(this.state.enthusiasmLevel)),
            React.createElement(react_native_1.View, { style: styles.buttons },
                React.createElement(react_native_1.View, { style: styles.button },
                    React.createElement(react_native_1.Button, { title: "-", onPress: this.onDecrement, color: "red" })),
                React.createElement(react_native_1.View, { style: styles.button },
                    React.createElement(react_native_1.Button, { title: "+", onPress: this.onIncrement, color: "red" })),
                React.createElement(react_native_1.View, { style: styles.button },
                    React.createElement(react_native_1.Button, { title: "reset", onPress: this.reset, color: "red" })))));
    }
}
exports.Hello = Hello;
// styles
const styles = react_native_1.StyleSheet.create({
    root: {
        alignItems: "center",
        alignSelf: "center"
    },
    buttons: {
        flexDirection: "row",
        minHeight: 70,
        alignItems: "stretch",
        alignSelf: "center",
        borderWidth: 5
    },
    button: {
        flex: 1,
        paddingVertical: 0
    },
    greeting: {
        color: "#999",
        fontWeight: "bold"
    }
});
//# sourceMappingURL=Hello.js.map