chrome.browserAction.onClicked.addListener(tab => {
  chrome.windows.create({
    url: tab.url,
    incognito: true
  });
});
