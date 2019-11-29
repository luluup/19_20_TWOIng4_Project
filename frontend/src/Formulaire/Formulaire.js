import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Formulaire.css'

class Formulaire extends Component {
    render() {
        return (
            <div className="container-fluid">
                    <div className="formulaire">
                        <Form>
                        <div className="row justify-content-center">
                                <div className="test">
                                    <p>Rentrez les informations suivantes</p>
                                 </div>
                            </div>

                            <div className="form-group row">
                                <label for="Nom" className="nom col-sm-1 col-form-label">Nom</label>
                                <div className="col-sm-5">
                                    <Input type="text" name="nom" id="nom" placeholder="Votre nom" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label for="Prenom" className="prenom col-sm-1 col-form-label">Prenom</label>
                                <div className="col-sm-5">
                                    <Input type="text" name="prenom" id="prenom" placeholder="Votre prenom" />
                                </div>
                            </div>

                            <div className="row">
                            <button type="button" className="bouton btn btn-light col-offset-3 col-1  ">Submit</button>
                            </div>

                        </Form>
                </div>
            </div>

        );
    }
}

export default Formulaire;