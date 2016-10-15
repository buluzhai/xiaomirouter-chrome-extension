var baseUrl = "http://d.miwifi.com/d2r/";

function genMiwifiUrl(url) {
    var srcParam = "src=chrome_ext_zc";
    if (url) return baseUrl + "?url=" + Base64.encodeURI(url) +"&"+srcParam;
    return baseUrl + "?" + srcParam;
}

chrome.contextMenus.create({
	title: '下载到小米路由器',
	contexts: ["link"],
	onclick: function(clickInfo) {
    window.open(genMiwifiUrl(clickInfo.linkUrl));
	}
});
