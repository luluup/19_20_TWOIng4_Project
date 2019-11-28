import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Formulaire.css'

class Formulaire extends Component {
	render() {
		return (
			<div classNamName="container-fluid">
			<div className = "formulaire">
			<div classNmae="row ">
			<Form>
				<p className = "titre">Rentrez les informations suivantes </p>
			   
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
		    <button type="button" className="bouton btn btn-light ">Submit</button>
			</div> 
			
			</Form>
			</div>
			</div>
			</div>

		);
	}
}

export default Formulaire;