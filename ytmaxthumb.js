var maxres = function (info) {
	// var url = info['srcUrl'];
	// var newTab = url;
	
	// function containsAny(str, substrings) {
	// 	for (var i = 0; i != substrings.length; i++) {
	// 		var substring = substrings[i];
	// 		if (str.indexOf(substring) != - 1) {
	// 			return substring;
	// 		}
	// 	}
	// 	return null; 
	// }
	
	// var result = containsAny(url, ["/default", "/hqdefault", "/mqdefault", "/sddefault", "/hd720"]);
	
	// var height, width = '';
	// var img = new Image();
	// var imgSrc = newTab;
	// var brokenThumb = 0;
	
	// $(img).load(function () {
	// 	if(img.height == 90) {
	// 		brokenThumb = 1;
	// 	}		
	// 	// garbage collect img
	// 	delete img;
	// }).error(function () {
	// 	// image could not be loaded
	// 	alert('An error occurred: image could not be loaded. Please try again.');
	// }).attr({ src: imgSrc });
	
	// if(brokenThumb == 1) {
	// 	newTab = newTab.replace(result, "/hq720");
	// }else{
	// 	newTab = newTab.replace(result, "/maxresdefault");
	// }
	
	// newTab = newTab.replace(/&w=([0-9]+)&h=([0-9]+)/, "&w=1920&h=1080");

	var url = info['srcUrl'];
	var newTab = url;

	if (url.includes(".webp")) {
		var vidID = /https:\/\/i.ytimg.com\/an_webp\/(.+)\/(?:.+)\.webp/.exec(url);
		newTab = `https://i.ytimg.com/vi/${vidID[1]}/maxresdefault.jpg`;
	} else if (url.includes(".jpg")) {
		var vidID = /https:\/\/i.ytimg.com\/vi\/(.+)\/(?:.+)\.jpg/.exec(url);
		newTab = `https://i.ytimg.com/vi/${vidID[1]}/maxresdefault.jpg`;
	}
	
    chrome.tabs.create({ url: newTab });
}

var patterns = ["*://*.youtube.com/*"];

chrome.contextMenus.create({
	"title": "Open larger thumbnail in new tab", 
	"contexts": ["image"], 
	"documentUrlPatterns": patterns,
	"onclick": maxres
});