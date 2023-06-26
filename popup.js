document.getElementById('viewTableButton').addEventListener('click', function() {
    chrome.tabs.create({ url: chrome.runtime.getURL('table.html') });
});


