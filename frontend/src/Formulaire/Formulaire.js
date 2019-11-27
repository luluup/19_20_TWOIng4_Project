import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Formulaire extends Component {
	render() {
		return (
			<Form>
			<FormGroup>
			<Label for="Nom">Nom</Label>
			<Input type="text" name="nom" id="nom" placeholder="Votre nom" />
			</FormGroup>
			<FormGroup>
			<Label for="Prenom">Prenom</Label>
			<Input type="text" name="prenom" id="prenom" placeholder=" Votre prenom" />
			</FormGroup>
			<Button>Submit</Button>
			</Form>

		);
	}
}

export default Formulaire;