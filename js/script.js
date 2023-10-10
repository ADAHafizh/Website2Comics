$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
});

// Index HTML - Landing Page
//Play Music
function playMusic(){
    var music = new Audio('sound/pageturn.mp3');
    music.play();
}
//Animations
anime({
    targets: ".bg0, .bg2, .bg3, .bg4, .bg5",
    translateY: [80, 0],
    direction: 'alternate',
    easing: 'easeInOutSine',
    delay: function (el, i, l) {
        return i * 300;
    },
    loop: true,
});

anime.timeline({loop: false})
    .add({
        targets: '.ml15 .word',
        scale: [14,1],
        opacity: [0,1],
        easing: "easeOutCirc",
        duration: 1000,
        delay: (el, i) => 800 * i
    })
    .add({
        target: 'start_button',
        opacity: [0,1],
})

// Panel 9_1 particle animation
anime({
    targets: ".particlemoney, .particlemoney2",
    translateY: [50, 0],
    direction: 'alternate',
    easing: 'easeInOutSine',
    delay: function (el, i, l) {
        return i * 300;
    },
    loop: true,
});

// Panel 9_2 particle animation
anime({
    targets: ".particlelamp, .particlelamp2",
    translateY: [50, 0],
    direction: 'alternate',
    easing: 'easeInOutSine',
    delay: function (el, i, l) {
        return i * 100;
    },
    loop: true,
});



//Fighting Animation


var fighting = anime.timeline({loop: false, autoplay: false,})
    .add({
        targets: '.dragon',
        translateY: [500, 0],
        direction: 'alternate',
        easing: 'easeInOutSine',
        duration: 1000,
        delay: (el, i) => 800 * i
    })
    .add({
        targets: ".sword",
        translateX: [0, 8000],
        translateY: [1000, -6000],
        opacity: [0,1],
        direction: 'alternate',
        easing: 'easeInOutSine',
        duration: 3000,
        delay: function (el, i, l) {
            return i * 100;
        },
        loop: false,
    })
    .add({
        targets: '.dragon',
        translateY: [0, 1000],
        opacity: [1,0],
        direction: 'alternate',
        easing: 'easeInOutSine',
        duration: 1000,
        delay: (el, i) => 800 * i
    })

function onBtnClickHandle(){
    document.querySelector('.throwsword').onclick = fighting.play;
    setTimeout(function(){
        window.location="panel4.html"
    }, 6500);
}


var audio = new Audio()
//SFX Knifeslice
function knifeslice() {
    const audio = document.getElementById("knifeslice");
    audio.pause();
    audio.play();
}

//SFX Sneak
function sneak() {
    const audio = document.getElementById("sneak");
    audio.pause();
    audio.play();
}

function pageright() {
    const audio = document.getElementsByClassName("pageturn");
    audio.pause();
    audio.play();
}
