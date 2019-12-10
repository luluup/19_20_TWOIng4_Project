import React from "react";
import { storiesOf } from "@storybook/react";
import AirPollution from "../Widgets/AirPollution/AirPollution"

storiesOf('AirPollution', module)

	.add('default', () => <AirPollution />
		);

