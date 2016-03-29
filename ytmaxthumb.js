function maxres(info) {
	var url = info['srcUrl'];
	var newTab = url;
	
    function containsAny(str, substrings) {
		for (var i = 0; i != substrings.length; i++) {
			var substring = substrings[i];
			if (str.indexOf(substring) != - 1) {
				return substring;
			}
		}
		return null; 
	}
	
	var result = containsAny(url, ["/default", "/hqdefault", "/mqdefault", "/sddefault"]);
	newTab = newTab.replace(result,"/maxresdefault");
	
    chrome.tabs.create({ url: newTab });
}

var patterns = ["*://*.youtube.com/*"];

chrome.contextMenus.create({
	"title": "Open larger thumbnail in new tab", 
	"contexts": ["image"], 
	"documentUrlPatterns": patterns,
	"onclick": maxres
});