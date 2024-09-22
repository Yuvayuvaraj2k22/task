function analyzeText() {
   
    let text = document.getElementById('inputText').value;
    let numChars = text.length;
    let words = text.match(/\b\w+\b/g);

    let numWords = words ? words.length : 0;
    let wordCount = {};
    if (words) {
        words.forEach(word => {
            word = word.toLowerCase();
            wordCount[word] = (wordCount[word] || 0) + 1;
        });
    }

    let numUniqueWords = Object.keys(wordCount).length;

    
    let resultText = `
        <p>No of char: ${numChars}</p>
        <p>No of word: ${numWords}</p>
        <p>No of unique word: ${numUniqueWords}</p>
        <p>Count by unique word:</p>
        <pre>${JSON.stringify(wordCount, null, 2)}</pre>
    `;
    document.getElementById('result').innerHTML = resultText;
}
