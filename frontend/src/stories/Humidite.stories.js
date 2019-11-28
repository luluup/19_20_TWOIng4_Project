import React from "react";
import { Progress } from 'reactstrap';
import { storiesOf } from "@storybook/react";
import Humidite from "../Widgets/Humidite/Humidite"

export const humidite = {
   
};


storiesOf('Humidite', module)

	.add('default', () => <Humidite {...humidite} />
		);