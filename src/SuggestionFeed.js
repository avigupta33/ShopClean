// takes as input the specific item category item
// does a search using rainforest api
// shows top 3 results that are ethical

import React from 'react';
import Suggestion from './Suggestion';
import sample from './data/sample_output.json';
import API_KEY from '../common/Constants.js';
import './Suggestion.css';
import { Carousel, Image } from '@fluentui/react-northstar';


// suggesstion props structure
// props {
//     imageUrl: '', [0].image,
// /     link: [0].link,
//     title: '', [0].title
//     price: '', [0].ratings
    
// }



// props structure
// props {
//     url: '',
//     title: '', 
//     price: ''
    
// }

class SuggestionFeed extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        giantData: []
      };
    }
    

	async getData() {
        const axios = require('axios');
        console.log("Setting state");
        

        console.log("THIS IS VEYR IMPORTANT");
        console.log("THIS IS VEYR IMPORTANT");
        console.log(this.props.category);

        if (this.props.category != ''){
            // set up the request parameters
          const params = {
            api_key: API_KEY,
            amazon_domain: "amazon.com",
            type: "search",
            search_term: ("sustainable " + (this.props.category))
          }
    
          // make the http GET request to Rainforest API
          const data = await axios.get('https://api.rainforestapi.com/request', { params })
              .then(response => {
              // print the JSON response from Rainforest API
              //console.log(JSON.stringify(response.data, 0, 2));
              var results = response.data["search_results"];
              this.setState({giantData: results});
              console.log("result dataaaaa");
                      //this.manipulateData();
            
            }).catch(error => {
              // catch and print the error
              console.log(error);
                });
              

                  //this.manipulateData();

        } 
  }

    componentDidMount(){
      console.log("Category" + this.props.category);
      console.log("Giant Data " + this.state.giantData);
      if( this.state.giantData == "") {
          console.log("INSIDE THE GIANT DATAAA");
          this.getData();
      }
    }
    
    shortenLength(inputString) {
        if(inputString.length >= 60 )
        {
          inputString = inputString.slice(0,59);
          inputString += "...";
        }
        return inputString; 
    }

    render() {
        console.log("In SuggestionFeed Render dunction wooooooooo");
        console.log(this.state.giantData);
        var list = this.state.giantData.map((object) => {
          var shortenTitle = this.shortenLength(object.title);
          var costPrice;

          if (typeof(object.prices) == "undefined" ||
              typeof(object.prices[0]) == "undefined" ||
              typeof(object.prices[0].value) == "undefined")
          {
              costPrice = "No price avaliable";
          } else {
            costPrice = '$' + (Math.ceil(parseFloat(object.prices[0].value) * 100)/100).toString();
           
          }
            return(
                <div key={object.position}>
                    <Suggestion url={object.image} title={shortenTitle} price={costPrice} link={object.link}/>
                </div>
            );
         });
        
          console.log(list);
        return (

          <div>
            <h2 className="theClass">The current item is made using some form of forced labor. 
              Here are a few suggested alternatives. </h2>
            {list}
          </div>
        );
    }
}

export default SuggestionFeed;