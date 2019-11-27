import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Formulaire.css'

class Formulaire extends Component {
	render() {
		return (
			<div className = "formulaire">
			<Form>
				<p className = "titre">Formulaire :</p>
				<FormGroup>
					<Label for="Nom">Nom :</Label>
					<Input type="text" name="nom" id="nom" placeholder="Votre nom" />
				</FormGroup>
				<FormGroup>
					<Label for="Prenom">Prénom :</Label>
					<Input type="text" name="prenom" id="prenom" placeholder=" Votre prenom" />
				</FormGroup>
				<Button>Submit</Button>
			</Form></div>

		);
	}
}

export default Formulaire;