function updateType(response) {
	console.log("MODIFY 200 " + response.url);
	response.responseHeaders.forEach(function(header) {
		if (header.name.toLowerCase() == "content-type") {
			header.value = "application/x-mpegurl";
		}
	});
	return {responseHeaders: response.responseHeaders};
}

browser.webRequest.onHeadersReceived.addListener(
	updateType,
	{urls: ["*://*/*/*.m3u", "*://*/*/*.m3u8"]},
	["blocking", "responseHeaders"]
);
