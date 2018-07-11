import * as React from "react";
import { Props } from "./Hello";
import { sayFoo } from "./pureJs";

export function DecorateHello(
  WrappedComponent: React.ComponentType<Props>
): React.ComponentClass<{}> {
  const componentProps: Props = {
    name: "name",
    enthusiasmLevel: 1,
    foo: "bar"
  };

  sayFoo();

  return class DecoratedHello extends React.Component<{}> {
    render() {
      return <WrappedComponent {...componentProps} />;
    }
  };
}
