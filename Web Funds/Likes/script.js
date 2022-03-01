
var count = 3
var countElem = document.querySelector("#count");

console.log(countElem);

function addLikes() {
    count++;
    countElem.innerText = count + " like(s)"
    console.log(count);
}


