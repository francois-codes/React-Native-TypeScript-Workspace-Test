import * as React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export type Props = {
  name: string;
  enthusiasmLevel?: number;
  foo: "bar";
};

export type State = {
  enthusiasmLevel: number;
};

export class Hello extends React.Component<Props, State> {
  state = {
    enthusiasmLevel: 1
  };

  constructor(props: Props) {
    super(props);

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

  getExclamationMarks = (numChars: number) => Array(numChars + 1).join("!");

  render() {
    console.log(this.props, this.state);

    return (
      <View style={styles.root}>
        <Text style={styles.greeting}>
          Hello{" "}
          {this.props.name +
            this.getExclamationMarks(this.state.enthusiasmLevel)}
        </Text>
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button title="-" onPress={this.onDecrement} color="red" />
          </View>
          <View style={styles.button}>
            <Button title="+" onPress={this.onIncrement} color="red" />
          </View>
          <View style={styles.button}>
            <Button title="reset" onPress={this.reset} color="red" />
          </View>
        </View>
      </View>
    );
  }
}

// styles
const styles = StyleSheet.create({
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
