predication1=''
predication2=''

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
png_quality:90
})

camera = document.getElementById('camera')

Webcam.attach('#camera')

function take_snapshot(){
    Webcam.snap(
        function(data_uri){
            document.getElementById("result").innerHTML = '<img id="snap" src="'+data_uri+'">'
        }
    )
}

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json", modelloaded)
function modelloaded(){
    console.log("modelloaded")
}

function speak(){
    synth = window.speechSynthesis
    d1 = "the first prediction is  "+ predication1
    d2 = "the second prediction is  "+predication2
    utterthis = new SpeechSynthesisUtterance(d1+d2)
    synth.speak(utterthis)
}
function check(){
    img = document.getElementById("snap")
    classifier.classify(img,gotResult)
}
function gotResult(error,results){
if (error) {
    console.error(error)
    } else{
        console.log(results)
document.getElementById("result_emotion_name").innerHTML = results[0].label
document.getElementById("result_emotion_name2").innerHTML = results[1].label

predication1 = results[0].label
predication2 = results[1].label
speak()

if (predication1 == "happy") {
    document.getElementById("update_emoji").innerHTML = "&#128522";
}

if (predication1 == "sad") {
    document.getElementById("update_emoji").innerHTML = "&#128532;";
}

if (predication1 == "angry") {
    document.getElementById("update_emoji").innerHTML = "&#128548;";
}





if (predication2 == "happy") {
    document.getElementById("update_emoji2").innerHTML = "&#128522";
}

if (predication2 == "sad") {
    document.getElementById("update_emoji2").innerHTML = "&#128532;";
}

if (predication2 == "angry") {
    document.getElementById("update_emoji2").innerHTML = "&#128548;";
}

    }
}













