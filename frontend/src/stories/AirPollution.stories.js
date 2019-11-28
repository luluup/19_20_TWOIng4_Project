import React from "react";
import { storiesOf } from "@storybook/react";
import AirPollution from "../Widgets/AirPollution/AirPollution"

export const airPollution = {
	titre : "Air Pollution",
	icon: "https://cdn.icon-icons.com/icons2/567/PNG/512/drop_icon-icons.com_54400.png",
	airpol: 3.1
};


storiesOf('AirPollution', module)

	.add('default', () => <AirPollution {...airPollution} />
		);

