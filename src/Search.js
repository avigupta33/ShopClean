/*global chrome*/
import React from 'react';
import Suggestion from './Suggestion.js';
import SuggestionFeed from './SuggestionFeed.js';
import API_KEY from './Constants.js';


var companies = ['Acer',
    'Adidas',
    'Alstom',
    'BAIC Motor',
    'BMW',
    'Bombardier',
    'Bosch',
    'BYD',
    'Calvin Klein',
    'Candy Carter’s',
    'Cerruti 1881',
    'Changan Automobile',
    'Cisco',
    'CRRC',
    'Electrolux',
    'Fila', 
    'Founder Group',
    'Gap',
    'Geely Auto',
    'General Motors',
    'Goertek',
    'H&M',
    'Haier',
    'Hart Schaffner Marx',
    'Jack & Jones',
    'Jaguar',
    'Japan Display Inc.',
    'L.L.Bean',
    'Lacoste',
    'Land Rover',
    'Li-Ning Mayor',
    'Mercedes-Benz',
    'MG',
    'Mitsubishi',
    'Nike',
    'The North Face',
    'Polo Ralph Lauren',
    'Puma',
    'Roewe',
    'SAIC Motor',
    'Skechers',
    'SGMW',
    'Skechers',
    'Tommy Hilfiger',
    'Uniqlo',
    'Victoria\’s Secret',
    'Volkswagen',
    'Zara',
    'Zegna' ]

export class Search extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: '', 
        msg: 'placeholder text. this text states whether item is ethically sourced',
        brand: 'empty',
        category: '',
        url: '',
        findSuggestion: false
      };
    }

    // getting the url from chrome browser
    componentDidMount() {
      chrome.tabs.query({
        active: true,
        currentWindow: true
      },
      (tabs) => {
        this.setState({url: tabs[0].url}); 
        this.getData(tabs[0].url);
      });
      
      // check if this.state.url is goodd 

    }


    async getData(givenURL) {
      // prints the brand to console  using link 
      const axios = require('axios');
      console.log("getDataURL ", givenURL);

      // set up the request parameters
      const params = {
        api_key: API_KEY,
        type: "product",
        url: givenURL
      }



      // make the http GET request to Rainforest API
      const data = await axios.get('https://api.rainforestapi.com/request', { params })
      .then(response => {
        var brand = response.data["product"]["brand"];
        var categories = response.data["product"]["categories"];
        var category = categories[categories.length - 1]["name"];
        this.setState({category: category});
        this.setState({brand: brand});
        this.updateStuff();
      }).catch(error => {
        // catch and print the error
        console.log(error);
      });

  
    }
    
    updateStuff() {
        
      var brand = this.state.brand;
      var found = companies.some((company => 
        (brand.toLowerCase()).includes(company.toLowerCase())));

      if (found) {
        this.setState({
          msg: "Unfortunately, this item was made using forced labor. Here are some alternatives",
          findSuggestion: true  
        }); 
      }
      else {
        this.setState({
          msg: "this comp is chill",
          findSuggestion: false  
        });
      }
    }


    render() {
      console.log("in the render function");
      console.log(this.state.findSuggestion);
      console.log("The API KEY is..", API_KEY);

      return(
        <div>
          { this.state.findSuggestion == true && 
            <SuggestionFeed 
              category={this.state.category} 
              brand={this.state.brand} 
              companies={companies}/> 
          }
          {this.state.findSuggestion == false &&
          <h1 className="ethicalText"> This product is ethically sourced—shop away! </h1>}
        </div>
        
      );
  }
}

