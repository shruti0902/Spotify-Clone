console.log("Welcome to spotify")
//initialize the variables
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songitems=Array.from(document.getElementsByClassName('songitems'));
let songs=[
    {songName:"Chaand Baaliya",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Aankhon Se Batana",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"Baarishien",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"Waalian ",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
    {songName:"Iktara",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
    {songName:"Hosanna",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
    {songName:"Hawayein",filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
    {songName:"Jhoom",filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
    {songName:"Main Rang Sharbaton",filePath:"songs/9.mp3",coverPath:"covers/9.jpg"},
    {songName:"Darasal",filePath:"songs/10.mp3",coverPath:"covers/10.jpg"}
]
songitems.forEach((element,i) => {
   element.getElementsByTagName("img")[0].src=songs[i].coverPath;
   element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
    
});
//audioElement.play();

//Hnadle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;

    }
})
audioElement.addEventListener('timeupdate',()=>{
    //console.log('timeupdate');
    //update Seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
   // console.log(progress);
    myProgressBar.value=progress;
})
//audioElement.play();
//Listen to Events
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
      element.classList.add('fa-play-circle');
      element.classList.remove('fa-pause-circle');
    })
}

 Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
     makeAllPlays();
     songIndex=parseInt(e.target.id);
     e.target.classList.remove('fa-play-circle');
     e.target.classList.add('fa-pause-circle');
     audioElement.src=`songs/${songIndex+1}.mp3`;
     masterSongName.innerHTML=songs[songIndex].songName;
     audioElement.currentTime=0;
     audioElement.play();
     gif.style.opacity=1;
     masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
 })
 document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>9){
        songIndex=0
    }
    else{
        songIndex +=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
       masterPlay.classList.add('fa-pause-circle');
 })
 document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex -=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
       masterPlay.classList.add('fa-pause-circle');
 })

