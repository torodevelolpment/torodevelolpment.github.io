var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: '.step-img-box'
})
    .setClassToggle('.step-img-box', 'show-img')
    .addTo(controller);