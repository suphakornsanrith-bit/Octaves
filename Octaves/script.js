let songs=[];



function playSong(url,name){


let audio =
document.getElementById(
"audioPlayer"
);



audio.src=url;


audio.play();



document.getElementById(
"now"
)
.innerHTML=

"Playing: "+name;


}



function playDemo(){

playSong(
"Octaves Demo Track"
);

}







function uploadSong(){


let file =
document.getElementById("upload")
.files[0];


if(file){


let url =
URL.createObjectURL(file);



songs.push({

name:file.name,

src:url

});



document.getElementById("songs")
.innerHTML +=

`

<div class="card">

🎵

<h3>
${file.name}
</h3>


<button onclick="playSong('${url}','${file.name}')">

▶ Play

</button>


</div>

`;



document.getElementById(
"uploadResult"
)
.innerHTML=

"Uploaded Successfully 🎉";


}



}







function openSettings(){

document
.getElementById("settings")
.classList
.add("show");


}



function closeSettings(){

document
.getElementById("settings")
.classList
.remove("show");


}





function darkMode(){

document.body
.classList
.remove("light");


}



function lightMode(){

document.body
.classList
.add("light");


}
let installPrompt;


window.addEventListener(
"beforeinstallprompt",
(e)=>{


e.preventDefault();


installPrompt=e;


let btn=
document.getElementById(
"installBtn"
);


btn.hidden=false;



btn.onclick=()=>{


installPrompt.prompt();


installPrompt=null;


};


});
if(
"serviceWorker" in navigator
){

navigator.serviceWorker.register(
"sw.js"
)

.then(()=>{

console.log(
"Octaves PWA Ready"
);

});

}