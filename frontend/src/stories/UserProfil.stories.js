import React from "react";
import { storiesOf } from "@storybook/react";
import UserProfil from "../Widgets/UserProfil/UserProfil"

export const userProfil = {
    userID: 1,
    country: "France",
    personsInHouse: 4,
    houseSize: 200,

    userName: "Dimitry",
    avatar: "hhttps://media.giphy.com/media/11TyfGbDbBv4be/giphy.gif"
};

storiesOf('UserProfil', module)

    .add('default', () => <UserProfil {...userProfil} />

    );