// content.js

function registerContentScript() {
    chrome.scripting.registerContentScript({
        manifest: {
            matches: ["<all_urls>"],
            js: ["content.js"],
            css: []
        },
        entryPoints: [{
            script: "content.js"
        }]
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', registerContentScript);
} else {
    registerContentScript();
}

// Content script logic
document.addEventListener('mouseup', function(event) {
    var selectedText = window.getSelection().toString().trim();

    // Send a message to the background script
    chrome.runtime.sendMessage({ action: 'saveWord', word: selectedText });
});