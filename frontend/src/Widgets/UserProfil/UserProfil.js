import React, { Component } from 'react';
import './UserProfil.css'

class UserProfil extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userID: 1,
            country: "France",
            personsInHouse: 4,
            houseSize: 200,

            userName: "Stitch",
            avatar: "https://media.giphy.com/media/11TyfGbDbBv4be/giphy.gif"
        }
    }

    render() {
        return (
            <div className="profil">
                <p>
                    <img className="userAvatar" src={this.state.avatar}></img>
                </p>
                <p>
                    Identifiant : {this.state.userID}
                </p>
                <p>
                    Nom : {this.state.userName}
                </p>

                <p>
                   Pays : {this.state.country}
                </p>
                <p>
                   Nombre d'habitants dans la maison : {this.state.personsInHouse}
                </p>
                <p>
                   Taille de la maison : {this.state.houseSize}
                </p>
            </div>

        );
    }
}

export default UserProfil;