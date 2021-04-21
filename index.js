
         
let firstArray = [];

document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("ChangedWords").style.display = "none";
    document.getElementById("changeWords").style.visibility = "hidden";

    document.getElementById("start").addEventListener("click", StartProgram, false);
    document.getElementById("changeWords").addEventListener("click", ChangeWords, false);
});

function StartProgram() {

    document.getElementById("start").style.visibility = "hidden";
    let firstUl = document.getElementById("list1");

        for(let i = 0; i < 3; i++) {
            firstArray.push(prompt("Please enter a word"));
            let anotherLi = document.createElement("li"); 
            anotherLi.appendChild(document.createTextNode(firstArray[i]));
            firstUl.appendChild(anotherLi);
    } 
    document.getElementById("changeWords").style.visibility = "visible";
}

function ChangeWords() {

    document.getElementById("GetWords").style.display = "none";
    document.getElementById("ChangedWords").style.display = "block";
   
    let secondArray = firstArray.map(function(oneWord) {
        return oneWord.charAt(oneWord.length - 1) 
        + oneWord.substring(1, oneWord.length - 1) + oneWord.charAt(0); }); 

    let secondUl = document.getElementById("list2");  

    secondArray.forEach(function(element) {
        let secondLi = document.createElement("li");
        secondLi.appendChild(document.createTextNode(element));
        secondUl.appendChild(secondLi);
    }); 
}

