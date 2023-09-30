
 music=new Audio('audio/2.mp3');
 //music.play();

const songs=[
    {
        id: 1,
        songName: `Ram Siya<br>
        <div class="subtitle"> Sachet Tandon and Parampara Tandon</div>`,
        poster: "images/poster/Ram Siya.jpg",
        ganna :new Audio('audio/Ram Siya.mp3')
    },
    {
        id: 2,
        songName: `Krishna Teri ho gayi <br>
        <div class="subtitle">	Asees Kaur</div>`,
        poster: "images/poster/Krishna.jpg",
        ganna :new Audio('audio/Krishna.mp3')
    },
    {
        id: 3,
        songName: `Jaadui  <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/poster/4.Jaadui.jpg",
        ganna :new Audio('audio/4.Jaadui.mp3')
    },
    {
        id: 4,
        songName: `on My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/srivali.jpg",
        ganna :new Audio('audio/1.mp3')
    },
    {
        id: 5,
        songName: `on My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/srivali.jpg",
        ganna :new Audio('audio/1.mp3')
    },
    {
        id: 6,
        songName: `on My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/srivali.jpg",
        ganna :new Audio('audio/1.mp3')
    },
    {
        id: 7,
        songName: `on My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/srivali.jpg",
        ganna :new Audio('audio/1.mp3')
    },
    {
        id: 8,
        songName: `on My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/srivali.jpg",
        ganna :new Audio('audio/1.mp3')
    },
    {
        id: 9,
        songName: `on My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/srivali.jpg",
        ganna :new Audio('audio/1.mp3')
    },
    {
        id: 10,
        songName: `on My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/srivali.jpg",
        ganna :new Audio('audio/1.mp3')
    },
    {
        id: 11,
        songName: `Ram Siya<br>
        <div class="subtitle"> Sachet Tandon and Parampara Tandon</div>`,
        poster: "images/poster/Ram Siya.jpg",
        ganna :new Audio('audio/Ram Siya.mp3')
    },
    {
        id: 12,
        songName: `HEE Dukh Vanjan<br>
        <div class="subtitle">	Vardhan</div>`,
        poster: "images/poster/3.Hanuman.jpg",
        ganna :new Audio('audio/1.mp3')
    },
    {
        id: 13,
        songName: `Srivalli <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/poster/13.srivali.jpg",
        ganna :new Audio('audio/13.Srivalli.mp3')
    },
    {
        id: 14,
        songName: `on My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/srivali.jpg",
        ganna :new Audio('audio/1.mp3')
    },
    {
        id: 15,
        songName: `on My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/srivali.jpg",
        ganna :new Audio('audio/1.mp3')
    },
    {
        id: 16,
        songName: `on My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/srivali.jpg",
        ganna :new Audio('audio/1.mp3')
    },
    {
        id: 17,
        songName: `on My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/srivali.jpg",
        ganna :new Audio('audio/1.mp3')
    },
    {
        id: 18,
        songName: `on My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/srivali.jpg",
        ganna :new Audio('audio/1.mp3')
    },
    {
        id: 19,
        songName: `on My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/srivali.jpg",
        ganna :new Audio('audio/1.mp3')
    },
    {
        id: 20,
        songName: `on My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/srivali.jpg",
        ganna :new Audio('audio/1.mp3')
    },
    {
        id: 21,
        songName: `on My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/srivali.jpg",
        ganna :new Audio('audio/1.mp3')
    }
]


Array.from(document.getElementsByClassName('songItem')).forEach((e,i) => {
    e.getElementsByTagName('img')[0].src=songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;
})


 let curr_song=document.getElementsByClassName('songItem')[0];
 curr_song.classList.add("active");

let masterPlay=document.getElementById('masterPlay');
let wave=document.getElementById('wave');

function playSong(){
    if(music.paused || music.currentTime<=0){
        console.log('play karo');
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
       masterPlay.classList.add('bi-pause-fill');
    }
    else{
        console.log('pause karo');
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.remove('bi-pause-fill');
        masterPlay.classList.add('bi-play-fill');
    }
}


masterPlay.addEventListener('click',  ()=>{
    playSong();
})

const makeAllplays=() =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el)=> {
        console.log('1');
        el.classList.remove("bi-pause-circle-fill");
        el.classList.add('bi-play-circle-fill');
    })
}


let index=0;
let poster_master_play=document.getElementById('poster_master_play');
let title=document.getElementById('title');

Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{

   e.addEventListener('click',(el)=>{
      index=el.target.id;

      changeSong(index);
    });
})

let currentStart=document.getElementById('currentStart');
let currentEnd=document.getElementById('currentEnd');
let seek=document.getElementById('seek');
let bar2=document.getElementById('bar2');
let dot=document.getElementsByClassName('dot')[0];

function TimeUpdate(){
    music.addEventListener('timeupdate',()=>{
        let music_curr=music.currentTime;
        let music_dur=music.duration;

        let min1=Math.floor(music_dur/60);
        let sec1=Math.floor(music_dur%60);

        if(sec1<10){
            sec1=`0${sec1}`;
         }
         currentEnd.innerText=`${min1}:${sec1}`;

         let min2=Math.floor(music_curr/60);
         let sec2=Math.floor(music_curr%60);

         currentStart.innerText=`${min2}:${sec2}`;

         let progressbar=parseInt((music_curr/music_dur)*100);
         seek.value=progressbar;

        //  console.log(seek.value);

        let seekbar=seek.value;

        bar2.style.width=`${seekbar}%`;
        dot.style.left=`${seekbar}%`;
    }); 
}

TimeUpdate();

seek.addEventListener('change',()=>{
    music.currentTime=seek.value*music.duration /100;
});

let vol_icon=document.getElementById('vol_icon');
let vol=document.getElementById('vol');
let vol_bar=document.getElementById('vol_bar');
let vol_dot=document.getElementById('vol_dot');

vol.addEventListener('change',()=>{
    if(vol.value==0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if(vol.value<50){
        vol_icon.classList.remove(' bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill'); 
    }

    if(vol.value>50){
        vol_icon.classList.add(' bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }

    let vol_a=vol.value;
    vol_bar.style.width=`${vol_a}%`;
    vol_dot.style.width=`${vol_a}%`;

    music.volume=vol_a/100;
});

let back=document.getElementById('back');
let next=document.getElementById('next');

back.addEventListener('click',()=>{
    index-=1;

    if(index<1){
        index=Array.from(document.getElementsByClassName('sonrgItem')).length;
    }

    changeSong(index);
})

next.addEventListener('click',()=>{
    index+=1;

    if(index>=Array.from(document.getElementsByClassName('sonrgItem')).length){
        index=1;
    }
    changeSong(index);
})




function changeSong(index){

    music.currentTime=0;
    music.pause();

    let songId=songs.filter((els) =>{
        return els.id==index ;
      });

    //    console.log(songId);
      songId.forEach(elem=>{

        let {songName,poster,ganna}=elem;
        // console.log(elem);
        title.innerHTML= songName;
        poster_master_play.src=poster;
        music=ganna;
        playSong();
        TimeUpdate();
      });

      curr_song.classList.remove("active");
      curr_song=document.getElementsByClassName('songItem')[index-1];
      curr_song.classList.add("active");

      el=songs[index];

     if(el.target.classList.contains('bi-pause-circle-fill'))
     {
        console.log('pause');
        el.target.classList.add('bi-play-circle-fill');
        el.target.classList.remove('bi-pause-circle-fill');
        playSong();
     }
     else{
         makeAllplays();
         el.target.classList.remove('bi-play-circle-fill');
         el.target.classList.add('bi-pause-circle-fill');
     }

}















const pop_song_left=document.getElementById('pop_song_left');
const pop_song_right=document.getElementById('pop_song_right');
const pop_song=document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft+=330;
})

pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft-=330;
})

const pop_art_left=document.getElementById('pop_art_left');
const pop_art_right=document.getElementById('pop_art_right');
const pop_art=document.getElementsByClassName('Artists_bx')[0];


pop_art_right.addEventListener('click',()=>{
    pop_art.scrollLeft +=330;
})

pop_art_left.addEventListener('click',()=>{
    pop_art.scrollLeft -=330;
})
