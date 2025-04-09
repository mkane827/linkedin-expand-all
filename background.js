chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.sendMessage(tab.id, "expand-all");
});

chrome.tabs.onActivated.addListener(async ({ tabId }) => {
  const tab = await chrome.tabs.get(tabId);
  handleUrl(tab.url);
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.active) {
    handleUrl(tab.url);
  }
});

function handleUrl(urlString) {
  const url = URL.parse(urlString);
  if (url && url.hostname.endsWith("linkedin.com")) {
    chrome.action.enable();
    return true;
  }

  chrome.action.disable();
  return false;
}
