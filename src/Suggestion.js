import React from 'react';
import './Suggestion.css';


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
                <a href={this.props.link} target="_blank"> 
                    <div>
                        <h1 className="ItemTitle"> {this.props.title} </h1>
                        <img src={this.props.url} className="previewImg"/>
                        <h2 className="priceTitle">{this.props.price} </h2>
                    </div>
                </a>
            </div>
            </div>
        );
    }
}


export default Suggestion;

