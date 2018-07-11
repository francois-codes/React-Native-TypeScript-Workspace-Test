"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
function DecorateHello(WrappedComponent) {
    const componentProps = {
        name: "name",
        enthusiasmLevel: 1,
        foo: "bar"
    };
    return class DecoratedHello extends React.Component {
        render() {
            return React.createElement(WrappedComponent, Object.assign({}, componentProps));
        }
    };
}
exports.DecorateHello = DecorateHello;
//# sourceMappingURL=DecorateHello.js.map