import React from "react";
import { storiesOf } from "@storybook/react";
import Temperature from "../Widgets/Temperature/Temperature"

export const temperature = {
	icon: "https://www.icone-png.com/png/27/26653.png",
	temp: 30
};


storiesOf('Temperature', module)

	.add('default', () => <Temperature {...temperature} />
		);
