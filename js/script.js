$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
});

anime({
    targets: ".bg0, .bg2, .bg3, .bg4, .bg5",
    translateY: [50, 0],
    direction: 'alternate',
    easing: 'easeInOutSine',
    delay: function (el, i, l) {
        return i * 100;
    },
    loop: false,
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