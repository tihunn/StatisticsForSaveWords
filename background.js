chrome.runtime.onInstalled.addListener(() => {
    // Set up context menu item
    chrome.contextMenus.create({
        id: "saveWord",
        title: "Save",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "saveWord") {
        const selectedWord = info.selectionText.trim();
        saveWord(selectedWord);
    }
});


function saveWord(word) {
    chrome.storage.local.get({ words: [] }, (result) => {
        const words = result.words;
        words.push(word);
        chrome.storage.local.set({ words: words });
    });
}