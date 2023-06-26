// table.js

document.addEventListener('DOMContentLoaded', function() {
    chrome.storage.local.get('words', function(result) {
        var words = result.words || [];

        var tableBody = document.getElementById('wordTable').getElementsByTagName('tbody')[0];

        words.forEach(function(word) {
            var row = document.createElement('tr');
            var wordCell = document.createElement('td');
            var additionalInfoCell = document.createElement('td');

            wordCell.textContent = word;
            // You can populate the additional info cell as needed

            row.appendChild(wordCell);
            row.appendChild(additionalInfoCell);
            tableBody.appendChild(row);
        });
    });
});