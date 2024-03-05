

Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:100
})
camera=document.getElementById("camera")
Webcam.attach("#camera")

function takeSnapshot() {
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"'/>"
    })
}

console.log("ml5 version",ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ZUFI8LDXl/model.json",modelLoaded)

function modelLoaded() {
    console.log("modelLoaded")

}

function check() {
    img=document.getElementById("captured_image")
    classifier.classify(img,gotResult)
}

function gotResult(error,results) {
    if(error){
        console.log(error)
    }
    else{
        console.log(results)
        document.getElementById("name").innerHTML="Name: "+results[0].label
        document.getElementById("accuracy").innerHTML="Accuracy: "+(results[0].confidence*100).toFixed(2)+"%"

    }
 
}