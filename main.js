
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function Start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();

}
recognition.onresult = function (event) {
    var fala = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = fala;
    if (fala == "tire minha selfie") {
        speak();
        setTimeout(function () {
            takeselfie();
            save();

        }, 5000);
    }
}
function speak() {
    var api = window.speechSynthesis;
    speakdata = "Tirando sua selfie em 5 segundos";
    var api2 = new SpeechSynthesisUtterance(speakdata);
    api.speak(api2);
    Webcam.attach(camera);
}
camera = document.getElementById("camera");
Webcam.set({
    width: 360, height: 250, image_format: 'jpeg', jpeg_quality: 90
});
function takeselfie() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfieImage" src="' + data_uri + '"/>';

    })
}
function save() {
    imagem = document.getElementById("selfieImage").src;
    document.getElementById("link").href = imagem;
    document.getElementById("link").click();
}