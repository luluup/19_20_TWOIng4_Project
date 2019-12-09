import React, { Component } from 'react';
import './UserProfil.css'
import { Z_NEED_DICT } from 'zlib';
import { copyFileSync } from 'fs';
import axios from 'axios';

class UserProfil extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userID: 1,
            pays: [],
            personsInHouse: 4,
            houseSize: 200,

            userName: "Stitch",
            avatar: "https://media.giphy.com/media/11TyfGbDbBv4be/giphy.gif"
        }

        axios.get('http://localhost:3000/user/5ddb94c6fc13ae640c000027')
        .then(response => {
            console.log('je get dans api');
            console.log(response.data);
            this.setState({pays : response.data.message});
        })
        .catch(function (error) {

            console.log(error);

        });
    }

    render() {
        return (
            <div className="profil">
                <div className="photo">
                <p>
                    <img src={this.state.avatar}></img>
                    </p>
                </div>
                <div className="infos">
                <p>
                    Identifiant : {this.state.userID}
                </p>
                <p>
                    Nom : {this.state.userName}
                </p>

                <p>
                   Pays : {this.state.pays}
                </p>
                <p>
                   Nombre d'habitants dans la maison : {this.state.personsInHouse}
                </p>
                <p>
                   Taille de la maison : {this.state.houseSize}
                    </p>
                    </div>
            </div>

        );
    }
}

export default UserProfil;