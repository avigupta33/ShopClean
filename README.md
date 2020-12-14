# Shop Clean

## Tagline
Ethical Shopping for the 21st Century

## Problem
Despite the rapidly growing prevalence of online shopping, it is difficult for consumers to know whether the products they're spending their hard-earned money on are made ethically. For example, many reputable brands, including Nike and Adidas, sell products made with forced Uyghur labor in China.

## Description
Shop Clean is a browser extension for Chrome that flags these products on Amazon and suggests alternatives, so consumers can leverage their purchase power for good. When a user is on a product page, they simply click the browser extension. A script grabs the product URL and calls the Rainforest Product Data API to determine product information. This information is compared against several datasets to determine and display whether the product was manufactured ethically. If it wasn't we use a custom algorithm along with the Rainforest Search API to recommend similar products that were manufactured ethically.

## Challenges
We encountered many challenges in the development of this project. One key challenge was integrating our tech stack with the Chrome extension infrastructure in order to automatically check whether the Amazon product the user was browsing was made using ethical means. This required acquiring the URL of the browser, which is only accessible by certain scripts. Another challenge was determining which alternative products to suggest when a user was interested in a product made with forced labor.

## Build Instructions (Google Chrome)
1. Run `npm install`
2. Type your Rainforest API key in the Search.js file
3. Run `npm run build`
4. Navigate to chrome://extensions/
5. Press `load unpacked` and select the build folder. You can run the browser extension now!
NOTE: You may need to update the manifest.json file with the custom security code given to you by chrome extensions.

## Contributors
[Safiyah Lakhany](https://github.com/safiyahlakhany)

[Kenny Oseleononmen](https://github.com/Kenny1G)

[Lauren Ng](https://github.com/laurenng)

[Avi Gupta](https://github.com/avigupta33)
