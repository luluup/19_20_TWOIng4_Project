import React from "react";
import { storiesOf } from "@storybook/react";
import Temperature from "../Widgets/Temperature/Temperature"


storiesOf('Temperature', module)

	.add('default', () => <Temperature />
		);
