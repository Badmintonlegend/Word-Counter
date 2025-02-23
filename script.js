function countWords(){
    let text = document.getElementById("gh").value;

    let numWords = 0;

    for (let i = 0; i < text.length; i++) {
    let currentCharacter = text[i];

    if (currentCharacter == " ") {
    numWords += 1;
    }
    }

    numWords += 1;
    
    document.getElementById("fg").innerHTML = numWords;
}