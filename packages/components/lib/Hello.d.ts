import * as React from "react";
export declare type Props = {
    name: string;
    enthusiasmLevel?: number;
    foo: "bar";
};
export declare type State = {
    enthusiasmLevel: number;
};
export declare class Hello extends React.Component<Props, State> {
    state: {
        enthusiasmLevel: number;
    };
    constructor(props: Props);
    onIncrement(): void;
    onDecrement(): void;
    reset(): void;
    getExclamationMarks: (numChars: number) => string;
    render(): JSX.Element;
}
