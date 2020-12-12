// passed the image, text, and caption, displays it 
// props
import React from 'react';
import './Suggestion.css';

// props structure
// props {
//     url: '',
//     title: '', 
//     price: ''
    
// }
class Suggestion extends React.Component {
    constructor(props) {
      super(props);
    }
	 

    render() {
        console.log(this.props.url);
        return (
            <div>
                <img src={this.props.url}/>
                <h1> <a>{this.props.title} </a> </h1>
                <h2>{this.props.price} </h2>
            </div>
        );
    }
}


export default Suggestion;

