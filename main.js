function setup()
{
 canvas=createCanvas(290,200);
 canvas.center();
 vidio=createCapture(VIDEO);
 vidio.hide();
 classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/mip8uJM_i/model.json",modeloaded);
}

function modeloaded(){
    console.log('m is l');
}


function draw(){
image(vidio,0,0,290,200);
classifier.classify(vidio,gotResult);
}

function gotResult(error,results){
    if(error){console.error(error);}
    else{
        console.log(results);
        document.getElementById("r_o_n").innerHTML=results[0].label;
        document.getElementById("r_o_a").innerHTML=results[0].confidence.toFixed(5);
    
    }
}