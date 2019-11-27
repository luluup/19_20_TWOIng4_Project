import React, {Component} from 'react';

class Temperature extends Component {
	
 constructor(props) {
        super(props);
        this.state = {
            icon: props.icon,
            temp: 20
        }
    }


  render() {
    return (
        <div className="temperature">
		<p>{this.state.temp}</p>
            
      </div>
    );
  }
}
export default Temperature;
