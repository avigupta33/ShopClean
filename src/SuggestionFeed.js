// takes as input the specific item category item
// does a search using rainforest api
// shows top 3 results that are ethical

import React from 'react';
import Suggestion from './Suggestion';
import sample from './data/sample_output.json'
import { Carousel, Image } from '@fluentui/react-northstar'

// TODO 

// suggesstion props structure
// props {
//     imageUrl: '', [0].image,
// /     link: [0].link,
//     title: '', [0].title
//     price: '', [0].ratings
    
// }


/// DUMMY DATA DONT BE CONFUSED 

const bigSampleData = {"search_results": [
    {
      "position": 1,
      "title": "FANTURE Men Loafer Slip On Sneakers Casual Comfort Lightweight Travel Stretch Canvas Shoes -U419XXXME001",
      "asin": "B08B1CHHG4",
      "link": "https://www.amazon.com/dp/B08B1CHHG4",
      "brand": "FANTURE",
      "categories": [
        {
          "name": "All Departments"
        }
      ],
      "image": "https://m.media-amazon.com/images/I/61KThCIRmBL._AC_UL320_.jpg",
      "coupon": {
        "badge_text": "Save 10%",
        "text": "with coupon (some sizes/colors)"
      },
      "is_prime": true,
      "is_amazon_fresh": false,
      "is_whole_foods_market": false,
      "rating": 4.3,
      "ratings_total": 593,
      "sponsored": true,
      "prices": [
        {
          "symbol": "$",
          "value": 32.99,
          "currency": "USD",
          "raw": "$32.99"
        }
      ],
      "price": {
        "symbol": "$",
        "value": 32.99,
        "currency": "USD",
        "raw": "$32.99"
      },
      "delivery": {
        "price": {
          "raw": "FREE Shipping by Amazon",
          "symbol": "$",
          "currency": "USD",
          "value": 0,
          "is_free": true
        }
      }
    },
    {
      "position": 2,
      "title": "Reebok Lifestyle Unisex NPC UK Cotton & Corn",
      "asin": "B07GYTTB7V",
      "link": "https://www.amazon.com/dp/B07GYTTB7V",
      "brand": "Reebok",
      "categories": [
        {
          "name": "All Departments"
        }
      ],
      "image": "https://m.media-amazon.com/images/I/71OsOXve2TL._AC_UL320_.jpg",
      "is_prime": true,
      "is_amazon_fresh": false,
      "is_whole_foods_market": false,
      "rating": 4.3,
      "ratings_total": 29,
      "sponsored": false,
      "prices": [
        {
          "symbol": "$",
          "value": 40.94,
          "currency": "USD",
          "raw": "$40.94",
          "name": "primary"
        },
        {
          "symbol": "$",
          "value": 80,
          "currency": "USD",
          "raw": "$80.00",
          "name": "original"
        }
      ],
      "price": {
        "symbol": "$",
        "value": 40.94,
        "currency": "USD",
        "raw": "$40.94",
        "name": "primary"
      },
      "delivery": {
        "price": {
          "raw": "FREE Shipping by Amazon",
          "symbol": "$",
          "currency": "USD",
          "value": 0,
          "is_free": true
        }
      }
    },
    {
      "position": 3,
      "title": "ALDO Men's Rpplclear1a Sustainable Lace-Up Sneaker",
      "asin": "B08CPNRF2K",
      "link": "https://www.amazon.com/dp/B08CPNRF2K",
      "brand": "ALDO",
      "categories": [
        {
          "name": "All Departments"
        }
      ],
      "image": "https://m.media-amazon.com/images/I/8163464ixZL._AC_UL320_.jpg",
      "is_prime": true,
      "is_amazon_fresh": false,
      "is_whole_foods_market": false,
      "rating": 5,
      "ratings_total": 2,
      "sponsored": false,
      "prices": [
        {
          "symbol": "$",
          "value": 66.52,
          "currency": "USD",
          "raw": "$66.52"
        }
      ],
      "price": {
        "symbol": "$",
        "value": 66.52,
        "currency": "USD",
        "raw": "$66.52"
      },
      "delivery": {
        "price": {
          "raw": "FREE Shipping by Amazon",
          "symbol": "$",
          "currency": "USD",
          "value": 0,
          "is_free": true
        }
      }
    },
    {
      "position": 4,
      "title": "Sanuk Men's Vagabond Tripper Mesh",
      "asin": "B07D2VNCZ4",
      "link": "https://www.amazon.com/dp/B07D2VNCZ4",
      "brand": "Sanuk",
      "categories": [
        {
          "name": "All Departments"
        }
      ],
      "image": "https://m.media-amazon.com/images/I/61EqN4HpxnL._AC_UL320_.jpg",
      "is_prime": true,
      "is_amazon_fresh": false,
      "is_whole_foods_market": false,
      "rating": 4.7,
      "ratings_total": 603,
      "sponsored": false,
      "prices": [
        {
          "symbol": "$",
          "value": 47.99,
          "currency": "USD",
          "raw": "$47.99"
        }
      ],
      "price": {
        "symbol": "$",
        "value": 47.99,
        "currency": "USD",
        "raw": "$47.99"
      },
      "delivery": {
        "price": {
          "raw": "FREE Shipping by Amazon",
          "symbol": "$",
          "currency": "USD",
          "value": 0,
          "is_free": true
        }
      }
    }
  ]};


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
    
    // manipulateData() {
    //     console.log(this.state.giantData);
    //     console.log(this.state.giantData[0]);
    // }

	async getData() {
        const axios = require('axios');
        console.log("Setting state");
        

        console.log("THIS IS VEYR IMPORTANT");
        console.log("THIS IS VEYR IMPORTANT");
        console.log(this.props.category);

        if (this.props.category != ''){
            // set up the request parameters
          const params = {
            api_key: "541AA8716959427CAFC720D5B7149B78",
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
// Removes unethical products from list
//   filterData() { 
//     this.state.giantData.forEach((item, index) => { 
//       var found = this.props.some((company => 
//         (item.brand.toLowerCase()).includes(company.toLowerCase())));
//     });
//     var brand = "kenny";

//       if (true) {
//         this.setState({msg: "Unfortunately, this item was made using forced labor. Here are some alternatives"}); 
//       }
//       else {
//         this.setState({msg: "this comp is chill"});
//       }
//   }

    componentDidUpdate() {
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
            //costPrice = object.prices[0].value;
          }
            return(
                <div key={object.position}>
                    <Suggestion url={object.image} title={shortenTitle} price={costPrice} link={object.link}/>
                </div>
            );
         });
        // pass hard coded data for now
        // <Carousel
          //   circular
          //   ariaRoleDescription="carousel"
          //   ariaLabel="Portrait collection"
          //   navigation={{
          //     'aria-label': 'people portraits',
          //     items: list.map((item, index) => ({
          //       key: index,
          //       'aria-controls': item.id,
          //       'aria-label': item.key,
          //     })),
          //   }}
          //   items={list}
          //   getItemPositionText={(index, size) => `${index + 1} of ${size}`}
          // />
          console.log(list);
        return (

          <div>
            <h2>Here's a few sustainable product we suggest as an alternative</h2>
            {list}
          </div>
        );
    }
}

export default SuggestionFeed;