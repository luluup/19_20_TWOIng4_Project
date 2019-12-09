import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Formulaire.css';
import axios from 'axios';

class Formulaire extends Component {

    /*
 
   
 
     
     userSubmit = (event) => {
 
         alert('Un essai a été envoyé : ' + this.state.value);
         event.preventDefault();
 
   
         var request = {
             location:this.inputLocation,
             personsInHouse:this.inputPersonsInHouse,
             houseSize:this.inputHouseSize
         }
       
         axios.post('mongodb://localhost:27017/DashboardProject/User', request)
             .then(res => {
                 console.log(res);
                 console.log(res.data);
             })
     }*/


    constructor(props) {
        super(props)
        this.state = {
            inputLocation: '',
            inputPersonsInHouse: '',
            inputHouseSize: '',
        };
        this.userSubmit = this.userSubmit.bind(this);
        this.changeLocation = this.changeLocation.bind(this);
        this.changePersonsInHouse = this.changePersonsInHouse.bind(this);
        this.changeHouseSize = this.changeHouseSize.bind(this);

    }


    changeLocation = event => {
        this.setState({ inputLocation: event.target.value });
    }

    changePersonsInHouse = event => {
        this.setState({ inputPersonsInHouse: event.target.value });
    }
    changeHouseSize = event => {
        this.setState({ inputHouseSize: event.target.value });
    }
    userSubmit = (event) => {
        alert('Le formulaire a été soumis : ' + this.state.inputLocation);
        event.preventDefault();

        const request = {
            location: this.inputLocation,
            personsInHouse: this.inputPersonsInHouse,
            houseSize: this.inputHouseSize
        };


        /*axios.post('http://localhost:3000/user', request)
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                })*/


        axios.post('http://localhost:3001/users/create', request)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

    }

    render() {
        return (
            <div className="container-fluid" >
                <div className="formulaire">

                    <form onSubmit={this.userSubmit}>
                        <div className="row justify-content-center">
                            <div className="test">
                                <p>Rentrez les informations de l'utilisateur</p>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label for="Location" className="nom col-sm-1 col-form-label">Location</label>
                            <div className="col-sm-5">
                                <Input type="text" name="location" id="nom" placeholder="Location" onChange={this.changeLocation} />
                            </div>
                        </div>


                        <div className="form-group row">
                            <label for="PersonInHouse" className="prenom col-sm-1 col-form-label">PersonInHouse</label>
                            <div className="col-sm-5">
                                <Input type="text" name="PersonInHouse" id="PersonInHouse" placeholder=" PersonInHouse" onChange={this.changePersonsInHouse} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label for="houseSize" className="prenom col-sm-1 col-form-label">houseSize</label>
                            <div className="col-sm-5">
                                <Input type="text" name="houseSize" id="houseSize" placeholder=" HouseSize" onChange={this.changeHouseSize} />
                            </div>
                        </div>

                        <input type="submit" value="Envoyer" />
                    </form>
                </div>
            </div >
        );
    }
}













export default Formulaire;