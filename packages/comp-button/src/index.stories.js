import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from ".";

storiesOf("Button", module)
  .add("with text", () => <Button onClick={action("clicked")}>Button</Button>)

  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>😀 😎 👍 💯</Button>
  ))
  .add("with a theme card", () => (
    <Button onClick={action("clicked")}>
      <div>
        <div>card-header</div>
        <div>card-content</div>
        <div>card-footer</div>
      </div>
    </Button>
  ));
