import React from "react";

import { storiesOf } from "@storybook/react";

import UserProfil from "../Widgets/UserProfil"

export const userProfil = {
    userID: 1,
    country: "France",
    personsInHouse: 4,
    houseSize: 200,

    userName: "Dimitry",
    avatar: "https://starsinformer.com/wp-content/uploads/2019/04/Greta-Thunberg.jpg"
};

storiesOf('UserProfil', module)

    .add('default', () => <UserProfil {...userProfil} />

    );