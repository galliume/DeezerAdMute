 function updateTab(request, sender, sendResponse) {

    browser.tabs.query({url: "*://*.deezer.com/*"}).then((tabs) => {
        let tab = tabs[0];
        console.log(tab.mutedInfo.muted);
        console.log(!tab.mutedInfo.muted);
        browser.tabs.update(tab.id, {'muted': !tab.mutedInfo.muted});
    }, console.error);

    sendResponse({response: `Tab status ${tab.mutedInfo.mutedInfo}` });
  }
  
browser.runtime.onMessage.addListener(updateTab);