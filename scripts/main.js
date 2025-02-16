function create_email() {
    var email_address = "a45han@uwaterloo.ca";
    var email_href = "mailto:" + email_address + "?" + "subject=" + "&" + "body=";
    wndMail = window.open(email_href, "_blank", "scrollbars=yes,resizable=yes,width=10,height=10");
}
  
const button = document.getElementById("Email");
  
button.addEventListener("click", create_email);


const spotify = document.getElementsByClassName("spotify-link")[0];
const spotify_about = document.getElementsByClassName("spotify-popup")[0];

function create_spotify_popup(){
  spotify_about.style.display = "block";
}

spotify.addEventListener("click",create_spotify_popup);

const spotify_close = document.getElementsByClassName("spotify-close-popup")[0];
function delete_spotify_popup(){
  spotify_about.style.display = "none";
}
spotify_close.addEventListener("click",delete_spotify_popup);

const chip8 = document.getElementsByClassName("chip-8-link")[0];
const chip8_about = document.getElementsByClassName("chip8-popup")[0];

function create_chip8_popup(){
  chip8_about.style.display = "block";
}

chip8.addEventListener("click",create_chip8_popup);

const chip8_close = document.getElementsByClassName("chip8-close-popup")[0];
function delete_chip8_popup(){
  chip8_about.style.display = "none";
}
chip8_close.addEventListener("click",delete_chip8_popup);

const octical = document.getElementsByClassName("octical-link")[0];
const octical_about = document.getElementsByClassName("octical-popup")[0];

function create_octical_popup(){
  octical_about.style.display = "block";
}

octical.addEventListener("click",create_octical_popup);

const octical_close = document.getElementsByClassName("octical-close-popup")[0];
function delete_octical_popup(){
  octical_about.style.display = "none";
}
octical_close.addEventListener("click",delete_octical_popup);

