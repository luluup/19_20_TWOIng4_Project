import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

class Formulaire extends Component {
  render() {
    return (
      <div className="formulaire">
        <InputGroup>
          <InputGroupAddon addonType="append">
            <InputGroupText>Nom</InputGroupText>
          </InputGroupAddon>
          <Input />
        </InputGroup>
        <br />
        <InputGroup>
          <InputGroupAddon addonType="append">
            <InputGroupText>Prenom</InputGroupText>
          </InputGroupAddon>
          <Input />
        </InputGroup>
        <br />
        <InputGroup>
          <InputGroupAddon addonType="append">
            <InputGroupText>Email</InputGroupText>
          </InputGroupAddon>
          <Input />
        </InputGroup>
      </div>
    );
  }
}

export default Formulaire;