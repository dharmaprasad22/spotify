console.log("sdccscsc");
let songIndex = 0;
let audioElement = new Audio("cover/1.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar =  document.getElementById('myProgressBar');
let songs = [
    {songname: "abc", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songname: "abc", filePath:"songs/2.mp3", coverPath:"covers/1.jpg"},
    {songname: "abc", filePath:"songs/3.mp3", coverPath:"covers/1.jpg"},
    {songname: "abc", filePath:"songs/4.mp3", coverPath:"covers/1.jpg"},
    {songname: "abc", filePath:"songs/5.mp3", coverPath:"covers/1.jpg"},
    {songname: "abc", filePath:"songs/6.mp3", coverPath:"covers/1.jpg"},
    {songname: "abc", filePath:"songs/7.mp3", coverPath:"covers/1.jpg"},
    {songname: "abc", filePath:"songs/8.mp3", coverPath:"covers/1.jpg"},
    {songname: "abc", filePath:"songs/9.mp3", coverPath:"covers/1.jpg"},
    {songname: "abc", filePath:"songs/10.mp3", coverPath:"covers/1.jpg"},
]
masterPlay.addEventListener('click',()=> {
    if(audioElement.paused ||  audioElement.currentTime<=0){
      audioElement.play();  

    }   
})
myProgressBar.addEventListener('timeupdate', ()=> {
    console.log('')

})




