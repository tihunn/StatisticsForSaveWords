chrome.runtime.onInstalled.addListener(() => {
    // Set up context menu item
    chrome.contextMenus.create({
        id: "saveWord",
        title: "Save",
        contexts: ["selection"]
    })
})

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "saveWord") {
        const selectedWord = info.selectionText.trim()
        saveWord(selectedWord)
    }
})


function saveWord(selectedText) {
    chrome.storage.local.get({ tableWords: [] }, (result) => {
        let table = result.tableWords
        let now = new Date()

        function cleanSomeSymbol(str) {
            const cleanedSomeSymbol = str.replace(/[.,!@#$%^&*()_+=！、،，\d]/g, '')
            const stripedSpace = cleanedSomeSymbol.replace(/^\s+|\s+$/g, '')
            return stripedSpace
        }
        const isPhrase = (str) => {
            return str.includes(' ');
        }
        const repetitionWord = (availableWordRow) => {
            availableWordRow.numRep++
            availableWordRow.timeUpdate =  new Date().toISOString()
            availableWordRow.allTime.push( availableWordRow.timeUpdate )
        }
        const newWord = (str) => {
            const initialRow = {
                id: 0,
                mark: "non",
                word: str,
                numRep: 1,
                lvlRepeat: 1,
                timeUpdate: 0,
                firstAdd:  new Date().toISOString(),
                allTime: [ new Date().toISOString()]
            }
            table.push(initialRow)
        }


        let cleaned = cleanSomeSymbol(selectedText)
        const lowerCase = cleaned.toLowerCase()
        const lineWithAddedWord = table.find( row => row.word === lowerCase)
        if (lineWithAddedWord) {
            repetitionWord(lineWithAddedWord)
        } else {
            newWord(lowerCase)
        }


        chrome.storage.local.set({ tableWords: table })

    })
}