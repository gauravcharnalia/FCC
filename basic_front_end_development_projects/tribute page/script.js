window.onload = init;

function init() {
    var swatBox = document.querySelector("#swat_cats");

    var soundSwat = new Howl({
        urls: ['./assets/swat_cats.mp3'],
            onload: function () {
            console.log("Loaded asset ");
            button.disabled = false; // enable the play sound button
        }
    });
    swatBox.addEventListener('mouseenter', function (evt) {
        console.log("Playing swat cats track");
        soundSwat.play();
    });
    swatBox.addEventListener('mouseleave', function(evt) {
        soundSwat.stop();
    });

    var flintstonesBox = document.querySelector("#flintstones");
    var soundFlintstones = new Howl({
        urls: ['./assets/flintstones.mp3'],
            onload: function () {
            console.log("Loaded asset ");
            button.disabled = false; // enable the play sound button
        }
    });
    flintstonesBox.addEventListener('mouseenter', function (evt) {
        console.log("Playing flintstones track");
        soundFlintstones.play();
    });
    flintstonesBox.addEventListener('mouseleave', function(evt) {
        soundFlintstones.stop();
    });

    var talespinBox = document.querySelector("#talespin");
    var soundTalespin = new Howl({
        urls: ['./assets/talespin.mp3'],
            onload: function () {
            console.log("Loaded asset ");
            button.disabled = false; // enable the play sound button
        }
    });
    talespinBox.addEventListener('mouseenter', function (evt) {
        console.log("Playing talespin track");
        soundTalespin.play();
    });
    talespinBox.addEventListener('mouseleave', function(evt) {
        soundTalespin.stop();
    });
}