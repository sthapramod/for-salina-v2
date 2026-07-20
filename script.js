document.addEventListener("DOMContentLoaded", () => {

/* =====================================
   FOR SALINA ❤️ V2
   PART 1 - SCRIPT.JS
===================================== */

// Mobile Menu
function toggleMenu() {
    const menu = document.getElementById("menu");
    if (menu) {
        menu.classList.toggle("show");
    }
}

// Fade Animation
window.onload = function () {};

// Floating Hearts
function createHeart() {

    const heart = document.createElement("div");

    heart.className = "floating-heart";

    const hearts = ["❤️","💖","💕","💗","💘","🌸"];

    heart.innerHTML = hearts[Math.floor(Math.random()*hearts.length)];

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize = (20 + Math.random()*25) + "px";

    heart.style.animationDuration = (5 + Math.random()*5) + "s";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },9000);

}

setInterval(createHeart,700);


// Scroll To Top
window.onscroll = function(){

const btn=document.getElementById("topBtn");

if(btn){

if(document.body.scrollTop>200 || document.documentElement.scrollTop>200){

btn.style.display="block";

}else{

btn.style.display="none";

}

}

}

function topPage(){

window.scrollTo({
top:0,
behavior:"smooth"
});

}
/* =====================================
   PART 6 - DATE PAGE
===================================== */

const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const message = document.getElementById("text");
const music = document.getElementById("loveMusic");

const messages = [
"🥺 Please don't break my heart...",
"🌹 I'll bring flowers for you!",
"🍫 I'll bring your favorite chocolates!",
"🥹 Pretty please?",
"❤️ You look even cuter when you press YES.",
"💕 I promise we'll have fun.",
"🥰 Come on... click YES!",
"💖 My heart already chose you.",
"😍 You're amazing!",
"😂 Nice try... NO isn't allowed!"
];

let count = 0;
let yesSize = 22;

// Move NO Button
function moveNo(){

    if(!noBtn) return;

const margin = 20;

const maxX = window.innerWidth - noBtn.offsetWidth - margin;
const maxY = window.innerHeight - noBtn.offsetHeight - 120;

const x = Math.random() * maxX;
const y = 80 + Math.random() * maxY;

noBtn.style.left = x + "px";
noBtn.style.top = y + "px";

    noBtn.style.position = "fixed";
    noBtn.style.left = Math.random() * maxX + "px";
    noBtn.style.top = Math.random() * maxY + "px";

    if(message){
        message.innerHTML = messages[count % messages.length];
    }

    count++;

    yesSize += 4;

    if(yesBtn){
        yesBtn.style.fontSize = yesSize + "px";
        yesBtn.style.padding = (18 + count) + "px " + (40 + count) + "px";
    }

}

if(noBtn){
    noBtn.addEventListener("mouseover", moveNo);
    noBtn.addEventListener("click", moveNo);
}

// YES Button
if(yesBtn){

yesBtn.onclick = function(){

    if(music){
        music.play();
    }

    fireworks();
    heartRain();

document.body.innerHTML = `
<div class="success-box">

<h1>🎉 YAYYYY!! ❤️</h1>

<h2>She Said YES! 🥰</h2>

<p>
Thank you for making me the happiest person. ❤️
</p>

<p>
I can't wait for our date. 🌹💕
</p>

<h1>💖🌸❤️🥰💕🎉</h1>

</div>
`;

confetti();

};

}
/* =====================================
   PART 7 - FIREWORKS & HEART RAIN
===================================== */

// ❤️ 1000 Floating Hearts
function heartRain(){

    for(let i=0;i<1000;i++){

        setTimeout(()=>{

            const heart=document.createElement("div");

            heart.className="floating-heart";

            const emojis=["❤️","💖","💕","💗","💘","💞","🌸"];

            heart.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];

            heart.style.left=Math.random()*100+"vw";

            heart.style.fontSize=(15+Math.random()*35)+"px";

            heart.style.animationDuration=(4+Math.random()*5)+"s";

            document.body.appendChild(heart);

            setTimeout(()=>{
                heart.remove();
            },9000);

        },i*15);

    }

}

// 🎆 Fireworks
function fireworks(){

    const colors=[
        "#ff1493",
        "#ff69b4",
        "#ff66cc",
        "#ff99cc",
        "#ff3399",
        "#ff0066",
        "#ffffff"
    ];

    for(let i=0;i<250;i++){

        const spark=document.createElement("div");

        spark.className="firework";

        spark.style.background=
        colors[Math.floor(Math.random()*colors.length)];

        spark.style.left=Math.random()*100+"vw";

        spark.style.top=Math.random()*100+"vh";

        spark.style.width=(6+Math.random()*10)+"px";
        spark.style.height=spark.style.width;

        document.body.appendChild(spark);

        setTimeout(()=>{
            spark.remove();
        },1000);

    }

}

// 🎊 Confetti
function confetti(){

    const pieces=["🎉","✨","💖","🌸","🎊","❤️"];

    for(let i=0;i<300;i++){

        setTimeout(()=>{

            const conf=document.createElement("div");

            conf.style.position="fixed";
            conf.style.left=Math.random()*100+"vw";
            conf.style.top="-30px";
            conf.style.fontSize=(15+Math.random()*20)+"px";
            conf.style.pointerEvents="none";
            conf.style.zIndex="9999";
            conf.innerHTML=pieces[Math.floor(Math.random()*pieces.length)];

            document.body.appendChild(conf);

            conf.animate(

                [
                    {
                        transform:"translateY(0px) rotate(0deg)"
                    },
                    {
                        transform:"translateY(110vh) rotate(720deg)"
                    }

                ],

                {
                    duration:4000,
                    easing:"linear"
                }

            );

            setTimeout(()=>{
                conf.remove();
            },4000);

        },i*10);

    }

}
/* =====================================
   PART 8 - SECRET PAGE, LOVE REASONS &
   GALLERY POPUP
===================================== */

// ❤️ Secret Password
function checkPassword(){

    const password=document.getElementById("password");
    const result=document.getElementById("result");

    if(!password || !result) return;

    if(password.value.trim()==="Gu khau"){

        result.innerHTML="❤️ Welcome My Love ❤️";

        setTimeout(()=>{
            window.location.href="surprise.html";
        },1500);

    }else{

        result.innerHTML="❌ Wrong Password";

    }

}

// ❤️ Reasons Why I Love You

// Surprise Page
window.showLoveReason = function () {

    const reasons = [
        "❤️ Your smile makes my day.",
        "🥰 I love the way you laugh.",
        "💕 You make everything brighter.",
        "🌹 You are my favorite person.",
        "😍 Every moment with you feels special.",
        "💖 You make my heart happy.",
        "✨ You inspire me every day.",
        "😘 I love every little thing about you.",
        "🌸 Life is more beautiful with you.",
        "❤️ I love you more every single day."
    ];

    const text = document.getElementById("loveReason");

    if (text) {
        text.innerHTML =
            reasons[Math.floor(Math.random() * reasons.length)];
    }

    if (typeof heartRain === "function") heartRain();
    if (typeof fireworks === "function") fireworks();
    if (typeof confetti === "function") confetti();
};

// 📸 Gallery Popup

function openImage(img){

    const popup=document.getElementById("popup");
    const popupImg=document.getElementById("popupImage");

    if(!popup || !popupImg) return;

    popup.style.display="flex";
    popupImg.src=img.src;

}

function closePopup(){

    const popup=document.getElementById("popup");

    if(popup){

        popup.style.display="none";

    }

}

// 🎵 Music Play

function playMusic(){

    const music=document.getElementById("loveMusic");

    if(music){

        music.play();

    }

}

function pauseMusic(){

    const music=document.getElementById("loveMusic");

    if(music){

        music.pause();

    }

}
/* =====================================
   PART 9 - FINAL FEATURES
===================================== */

// ❤️ Love Counter
let loveClicks = 0;

function increaseLove() {

    loveClicks++;

    const counter = document.getElementById("loveCounter");

    if(counter){
        counter.innerHTML = "❤️ Love Clicks: " + loveClicks;
    }

}

// 💖 Countdown
function startCountdown(dateString){

    const countdown = document.getElementById("countdown");

    if(!countdown) return;

    const target = new Date(dateString).getTime();

    const timer = setInterval(function(){

        const now = new Date().getTime();

        const distance = target - now;

        if(distance <= 0){

            countdown.innerHTML = "❤️ Today is our special day! ❤️";
            clearInterval(timer);
            return;

        }

        const days = Math.floor(distance/(1000*60*60*24));
        const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
        const minutes = Math.floor((distance%(1000*60*60))/(1000*60));

        countdown.innerHTML =
        "💖 " + days + " Days " +
        hours + " Hours " +
        minutes + " Minutes";

    },1000);

}

// ❤️ Auto Close Mobile Menu
document.querySelectorAll(".menu a").forEach(link=>{

    link.addEventListener("click",()=>{

        const menu=document.getElementById("menu");

        if(menu){

            menu.classList.remove("show");

        }

    });

});

// 🌸 Smooth Page Animation
document.addEventListener("DOMContentLoaded",()=>{

    document.body.style.opacity="0";

    setTimeout(()=>{

        document.body.style.transition="1s";
        document.body.style.opacity="1";

    },100);

});

// ❤️ Floating Background Hearts
setInterval(()=>{

    const heart=document.createElement("div");

    heart.innerHTML="💖";

    heart.style.position="fixed";
    heart.style.left=Math.random()*100+"vw";
    heart.style.top="100vh";
    heart.style.fontSize=(15+Math.random()*20)+"px";
    heart.style.pointerEvents="none";
    heart.style.zIndex="-1";

    document.body.appendChild(heart);

    heart.animate([

        {transform:"translateY(0)",opacity:1},
        {transform:"translateY(-120vh)",opacity:0}

    ],{

        duration:7000

    });

    setTimeout(()=>{

        heart.remove();

    },7000);

},1500);

// ❤️ Console Message
console.log("❤️ Welcome to For Salina V2 ❤️");
/* ===========================
   INSTAGRAM REELS
=========================== */

const videos = document.querySelectorAll(".reel video");

// Auto play the visible video
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const video = entry.target;

        if (entry.isIntersecting) {
            video.play().catch(() => {});
        } else {
            video.pause();
        }
    });
}, {
    threshold: 0.7
});

videos.forEach(video => observer.observe(video));


// ❤️ Double tap to create a heart
document.querySelectorAll(".reel").forEach(reel => {

    let lastTap = 0;

    reel.addEventListener("click", function(e){

        const now = Date.now();

        if(now - lastTap < 300){

            const heart = document.createElement("div");

            heart.innerHTML = "❤️";

            heart.style.position = "absolute";
            heart.style.left = e.offsetX + "px";
            heart.style.top = e.offsetY + "px";
            heart.style.fontSize = "80px";
            heart.style.pointerEvents = "none";
            heart.style.animation = "likeHeart .8s forwards";

            reel.appendChild(heart);

            setTimeout(()=>{
                heart.remove();
            },800);

        }

        lastTap = now;

    });

});


// Tap video to play/pause
videos.forEach(video=>{

    video.addEventListener("click",function(){

        if(video.paused){

            video.play();

        }else{

            video.pause();

        }

    });

});
// Secret Page
window.checkPassword = function () {

    const input = document.getElementById("password");
    const result = document.getElementById("result");

    if (!input || !result) return;

    if (input.value === "Gu khau") {

        result.innerHTML = `
        ❤️ Correct Password! ❤️<br><br>
        I have a secret for you...<br><br>
        🌹 You are the best thing that has ever happened to me.<br>
        🥰 Every day with you is my favorite day.<br>
        💕 I promise to always love you, respect you, and make you smile.<br><br>
        ❤️ Forever & Always ❤️
        `;

        if (typeof heartRain === "function") heartRain();
        if (typeof fireworks === "function") fireworks();
        if (typeof confetti === "function") confetti();

        const music = document.getElementById("loveMusic");
        if (music) music.play();

    } else {

        result.innerHTML = "❌ Wrong password. Try again ❤️";
    }
};
// ======================
// MUSIC PAGE
// ======================

window.playMusic = function () {

    const music = document.getElementById("loveMusic");

    if (music) {
        music.play();

        if (typeof heartRain === "function") heartRain();
        if (typeof fireworks === "function") fireworks();
        if (typeof confetti === "function") confetti();
    }

};

window.pauseMusic = function () {

    const music = document.getElementById("loveMusic");

    if (music) {
        music.pause();
    }

};

window.changeVolume = function (value) {

    const music = document.getElementById("loveMusic");

    if (music) {
        music.volume = value;
    }

};
});