// takes as input the specific item category item
// does a search using rainforest api
// shows top 3 results that are ethical

import React from 'react';
import Suggestion from './Suggestion';
import sample from './data/sample_output.json'


// suggesstion props structure
// props {
//     url: '', [0].link
//     title: '', [0].title
//     price: '', [0].ratings
    
// }

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
        giantData: [],
      };
    }
    
    manipulateData() {
        console.log(this.state.giantData);
        console.log(this.state.giantData[0]);

    }

	async getData() {
        const axios = require('axios');
        console.log("Setting state");
        
        await this.setState({giantData: bigSampleData.search_results});
        
        console.log(this.state.giantData[0].title)
		// set up the request parameters
		// const params = {
		// 	api_key: "541AA8716959427CAFC720D5B7149B78",
		// 	amazon_domain: "amazon.com",
		// 	type: "search",
		// 	search_term: ("sustainable " + (this.props.category))
		// }
	
		// // make the http GET request to Rainforest API
		// const data = await axios.get('https://api.rainforestapi.com/request', { params })
	  	// 	.then(response => {
		// 		// print the JSON response from Rainforest API
        //         console.log(JSON.stringify(response.data, 0, 2));
		// 		var results = response.data["search_results"];
		// 		this.setState({giantData: results});
        //         this.manipulateData();
			
		// 	}).catch(error => {
		// 		// catch and print the error
		// 		console.log(error);
        // 	});
        

        // everything below is unused code

			//fs.readFile('sample_output.json', 'utf8', (err, data) => {
			//	if (err) {
			//		console.log(err);
			//	}
			//	console.log(data)
			//});
			//var response = require('./sample_output.json');
			// var response = sample
            // console.log(sample);
            this.manipulateData();
	}

	componentDidMount() {
		this.getData();
        
    
	}



    render() {
		var list = this.state.giantData.map((object) => {
			return(
				<div>
					<p>{object.position}</p>
                    <Suggestion url={object.image} title={object.title} price={1}/>
				</div>
			)
		})
        // pass hard coded data for now
        return (
            
            
            <div>
                {list}
            </div>
        );
    }
}

export default SuggestionFeed;