
         
let listArray = [];
document.getElementById('changeWordsBtn').style.visibility='hidden';

function makeList() {
    let ul = document.createElement('ul');
    let size = 3;

        for(let i = 0; i<size; i++) {
            listArray[i] = prompt('Please enter a word ');
            document.getElementById('myList').appendChild(ul);
            let li = document.createElement('li');
            ul.appendChild(li);
            li.innerHTML = listArray[i];  
    } 
    displayChangeBtn(); 
}

function displayChangeBtn() {
    document.getElementById('changeWordsBtn').style.visibility = 'visible';
}

document.getElementById('transformedListScreen').style.display = 'none';
changeWordsBtn.addEventListener("click",changeWords,false);

function changeWords() {
    document.getElementById('changeWordsBtn').style.visibility = 'hidden';
    let ul = document.createElement('ul');  

    let newArray = listArray.map(function(newList) {
        return newList.charAt(newList.length - 1)
        + newList.substring(1, newList.length - 1) + newList.charAt(0); }); 

        for(let j = 0; j < newArray.length; j++) {
            document.getElementById('myList').appendChild(ul);
            let li = document.createElement('li');
            ul.appendChild(li);
            li.innerHTML = newArray[j]; 
    }
}


