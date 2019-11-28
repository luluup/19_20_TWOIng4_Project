import React from "react";
import { storiesOf } from "@storybook/react";
import Humidite from "../Widgets/Humidite/Humidite"

export const humidite = {
	titre : "Humidité",
	icon: "https://cdn.icon-icons.com/icons2/567/PNG/512/drop_icon-icons.com_54400.png",
	humidite: 3.1
};


storiesOf('Humidite', module)

	.add('default', () => <Humidite {...humidite} />
		);

