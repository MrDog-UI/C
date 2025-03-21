document.getElementById('capture-btn').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: captureText
        });
    });
});

document.getElementById('chatgpt-btn').addEventListener('click', () => {
    chrome.tabs.create({ url: 'https://chatgpt.com' });
});

function captureText() {
    const selection = window.getSelection().toString();
    if (selection) {
        alert('Captured Text: ' + selection);
    } else {
        alert('Please select some text to capture.');
    }
}
