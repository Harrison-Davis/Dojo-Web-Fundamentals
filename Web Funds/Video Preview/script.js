// console.log("page loaded...");


// const clip = document.querySelectorAll('.plant')
// for(let i = 0; i<clip.length;i++){
//     clip[i].addEventListener('mouseeneter', 
//     function(e){
//         clip[i].play()
//     })
// }

// document.querySelector(".plant").addEventListener("mouseover", function(){
//     this.play()
// })

// document.querySelector(".plant").addEventListener("mouseout", function(){
//     this.pause()
// })



let myvideo = document.querySelectorAll(".vid-s", ".plant");

for(var i = 0; i < myvideo.length; i++){
    myvideo[i].addEventListener("mouseover", function(){
        this.play()
    })
}
for(var i = 0; i < myvideo.length; i++){
    myvideo[i].addEventListener("mouseout", function(){
        this.pause()
    })
}