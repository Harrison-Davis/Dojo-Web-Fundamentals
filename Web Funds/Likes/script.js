

// var likeNum = 3
// var countElem = document.querySelector("#likeNum");

// console.log(countElem);

// function addLikes() {
//     likeNum++;
//     countElem.innerText = likeNum + " like(s)"
//     console.log(likeNum);
// }



// var likeNum = 3

// console.log(countElem);

// function addLikes(elemId) {
//     var countElem = document.querySelector(elemId);
//     likeNum++;
//     countElem.innerText = likeNum 
//     console.log(likeNum);
// }




// function addLikes(elemId) {
//     var countElem = document.querySelector(elemId);
//     var likeNum = 3
//     likeNum++
//     countElem.innerText = likeNum++
//     console.log(likeNum);
// }


function addLikes(elemId) {
    var h2 = elemId.parentNode.querySelector('h2')
    h2.innerText = parseInt(span.innerText) + 1
}