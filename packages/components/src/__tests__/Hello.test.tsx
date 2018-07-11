import React from "react";
import renderer from "react-test-renderer";

import { Hello } from "../Hello";

it("renders correctly", () => {
  const button = renderer
    .create(<Hello name="foo" enthusiasmLevel={14} />)
    .toJSON();
  expect(button).toMatchSnapshot();
});
