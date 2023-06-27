document.getElementById('viewTableButton').addEventListener('click', () => {
    chrome.tabs.create({ url: chrome.runtime.getURL('table/table.html') });
});


