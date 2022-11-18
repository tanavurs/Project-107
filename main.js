function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/sPXY7_NoW/model.json', modelReady);
    console.log("version of ml5 js = "+ml5.version);
}

function modelReady(){
    classifier.classify(gotResults);
  }
  
  function gotResults(error, results) {
    if (error) {
      console.error(error);
    } else {
      console.log(results);
    }
}   