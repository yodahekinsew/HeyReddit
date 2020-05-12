var snoowrap = require(['snoowrap'], function (snoowrap) {});

var canvas = document.getElementById("myCanvas");
var context = canvas.getContext('2d');

const MODEL_URL = '/models'
module.exports = {
    get_models: function () {
    faceapi.loadTinyFaceDetectorModel(MODEL_URL)
    //...
    return "done"
},

detect_faces: async () => {
    console.log("detecting faces")
    await faceapi.loadSsdMobilenetv1Model(MODEL_URL)
    await faceapi.loadTinyFaceDetectorModel(MODEL_URL)
    await faceapi.loadFaceLandmarkModel(MODEL_URL)
    await faceapi.loadFaceRecognitionModel(MODEL_URL)
    console.log("loaded model")
    const input = document.getElementById('videoElement')
    setInterval(async ()=>{
        let fullFaceDescriptions = await faceapi.detectAllFaces(input).withFaceLandmarks().withFaceDescriptors()
        fullFaceDescriptions = faceapi.resizeResults(fullFaceDescriptions, {height: 100, width: 300})
        console.log("got face descriptions")
        context.clearRect(0,0,canvas.width, canvas.height)
        faceapi.draw.drawDetections(canvas, fullFaceDescriptions)
        console.log("full face descriptions ", fullFaceDescriptions)
    }, 100)
}
}
