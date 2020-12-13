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
        console.log("Suggestion.js props URL", this.props.url);
        console.log("Suggestion.js props link", this.props.link);
        return (
            <div className="wrapper">
            <div className="itemDiv">
                    <div>
                        <a href={this.props.link} target="_blank"> 
                            <h1 className="ItemTitle"> {this.props.title} </h1>
                        </a>
                        <img src={this.props.url} className="previewImg"/>
                        <h2>{this.props.price} </h2>
                    </div>
            </div>
            </div>
        );
    }
}


export default Suggestion;

