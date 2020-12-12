import React from 'react';
import Suggestion from './Suggestion.js';
var officialmsg= 'Deafult';
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
        msg: '',
        brand: 'empty'
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    async getData() {
      // prints the brand to console  using link 
      const axios = require('axios');

      // set up the request parameters
      const params = {
        api_key: "541AA8716959427CAFC720D5B7149B78",
        type: "product",
        url: this.state.value,
      }

      // make the http GET request to Rainforest API
      const data = await axios.get('https://api.rainforestapi.com/request', { params })
      .then(response => {
        // print the JSON response from Rainforest API
        var brand = response.data["product"]["brand"];
        this.setState({brand: brand });
        this.updateStuff();
      }).catch(error => {
        // catch and print the error
       
      })

      // undefined 
      return data; 
    }
    
    updateStuff() {
      var brand = this.state.brand;
      var found = companies.some((company => 
        (brand.toLowerCase()).includes(company.toLowerCase())));

      if (found) {
        this.setState({msg: "this comp is bad"}); 
      }
      else {
        this.setState({msg: "this comp is chill"});
      }
    }

    handleSubmit(event) {
        var result = this.getData();
        event.preventDefault();
    }
    
   
    // componentDidUpdate() {
    //   console.log(this.state.msg);
    // }
    //TODO: compnent, states, suggest 5 item, feed component,
    // TODO(NEXT): Shop Suggestions:
    // suggest 5 items
    // Fetch 'em from rainforest api
    // Make whole new component
    render() {
     
      return (
        <div>
            <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Item URL:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit"/>
          <Suggestion item={}></Suggestion>
        </form>
        </div>
        <p >{this.state.msg}</p>
        </div>
      );
    }
}

