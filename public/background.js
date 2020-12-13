chrome.browserAction.setIcon({
    path: "shopcleanlogo_icon.png"
});
/*USELESS!!!!*/
//chrome.runtime.onMessage.addListener((msg, sender, response) => {
//	switch (msg.type) {
//		 case 'popupInit':
//			 getCurrentTabUrl(response);
//			  break;
//		 default:
//			  response('unknown request');
//			  break;
//	}
//});
//
//function getCurrentTabUrl(callback) {  
//	var queryInfo = {
//	  active: true, 
//	  currentWindow: true
//	};
// 
//	chrome.tabs.query(queryInfo, function(tabs) {
//	  var tab = tabs[0]; 
//      var url = tab.url;
//		console.log(url);
//		console.log(callback);
//	  callback(url);
//	});
// }