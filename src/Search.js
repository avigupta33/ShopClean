/*global chrome*/
import React from 'react';
import Suggestion from './Suggestion.js';
import SuggestionFeed from './SuggestionFeed.js';
//import companies from './data/companies.json'


var officialmsg= 'Deafult';
var targetCategories = [

]
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
  
      //this.handleChange = this.handleChange.bind(this);
      //this.handleSubmit = this.handleSubmit.bind(this);
    }

    //handleChange(event) {
    //  this.setState({value: event.target.value});
    //}

    // getting the url from chrome browser
    componentDidMount() {
      chrome.tabs.query({
        active: true,
        currentWindow: true
      },
      (tabs) => {
        console.log("NANIII ", tabs[0].url);
        this.setState({url: tabs[0].url}); 
        this.getData(tabs[0].url);
      });
      
      // check if this.state.url is goodd 


      // get data and run!! 
      // if (this.state.url !== '' ) {
      //     console.log(" THERE SHOULD BE A URL IN STATE ", this.state.url);
      //     console.log("running get data");
      //     var result = this.getData();
      //     // event.preventDefault();
      // }
    }


    async getData(givenURL) {
      // prints the brand to console  using link 
      const axios = require('axios');
      console.log("getDataURL ", givenURL);

      // set up the request parameters
      const params = {
        api_key: "541AA8716959427CAFC720D5B7149B78",
        type: "product",
        //url: this.state.value,
        url: givenURL
      }

      // solution
      // onload get active url javascript


      // make the http GET request to Rainforest API
      const data = await axios.get('https://api.rainforestapi.com/request', { params })
      .then(response => {
        // print the JSON response from Rainforest API
        var brand = response.data["product"]["brand"];
        var categories = response.data["product"]["categories"];
        var category = categories[categories.length - 1]["name"];
        console.log(category);
        this.setState({category: category});
        this.setState({brand: brand});
        console.log("Inside thhe vent");
        //console.log(this.state);
        this.updateStuff();
      }).catch(error => {
        // catch and print the error
      })

    // var brand = "Nike";
    // var category = "Shoes";
    // this.setState({category: category});
    // this.setState({brand: brand});
      // undefined 
      console.log("Stuff Should've dunhappened by now")
      //return data; 
    }
    
    updateStuff() {
        // check if company is ethical 
        // brand name we get from api "visit nike store"
        // if unethical array elem is substring of brand name 
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

    // unecesasary we aren't using form anymore 
    handleSubmit(event) {
        console.log(this.props.url);
        if(this.state.value !== '' || this.state.value !== undefined)
        {
            var result = this.getData();
            event.preventDefault();
        }
        
    } 

    render() {
      console.log("in the render function");
      console.log(this.state.findSuggestion)
    
{/* <div>
            { (this.state.category == true) ? (
                <SuggestionFeed category={this.state.category}
                  brand={this.state.brand}
                  companies={companies}
            />
            ) : (
              <h1>Ethical Company Wooohoooooooooooo</h1>
            )

            }
        </div> */}

      return(
        <SuggestionFeed category={this.state.category} brand={this.state.brand} companies={companies}/>
        
      );
  }
}

