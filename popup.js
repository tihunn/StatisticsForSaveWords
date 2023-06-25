chrome.storage.local.get({ words: [] }, (result) => {
    const words = result.words;
    const tableBody = document.querySelector("#wordTable tbody");

    for (const word of words) {
        const row = document.createElement("tr");
        const wordCell = document.createElement("td");
        wordCell.textContent = word;
        row.appendChild(wordCell);
        tableBody.appendChild(row);
    }
});





