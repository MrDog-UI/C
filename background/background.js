chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "captureScreenshot") {
    chrome.tabs.captureVisibleTab(null, { format: "png" }, (screenshotUrl) => {
      chrome.runtime.sendMessage({ type: "screenshotTaken", screenshotUrl });
    });
  }
});
