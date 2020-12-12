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
            <div className="wrapper">
            <div className="itemDiv">
                <a href={this.props.link}>
                <h1 className="ItemTitle"> {this.props.title} </h1>
                <img src={this.props.url} className="previewImg"/>
                <h2>${this.props.price} </h2>
                </a>
            </div>
            </div>
        );
    }
}


export default Suggestion;

