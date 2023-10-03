function soundClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/xO8qv4qo4/model.json',modelReady);
}
function modelReady()
{
    classifier.classify(gotResults);
}
dog_voice = 0
cat_voice = 0
bird_voice = 0
roar_voice = 0
document.getElementById("cat_voice").innerHTML = "Detected cat - " + cat_voice;
document.getElementById("bird_voice").innerHTML = "Detected bird - " + bird_voice;
document.getElementById("roar_voice").innerHTML = "Detected lion - " + roar_voice;
document.getElementById("dog_voice").innerHTML = "Detected dog - " + dog_voice;

function gotResults(error,results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        random_number_r  =  Math.floor(Math.random() * 255) + 1;
        random_number_g  =  Math.floor(Math.random() * 255) + 1;
        random_number_b  =  Math.floor(Math.random() * 255) + 1;

        document.getElementById("animal_audio").innerHTML = 'Detected Voice Is Of - '+ results[0].label;
        document.getElementById("animal_audio").style.color = "rgb("+random_number_b+","+random_number_r+","+random_number_g+")";
        img1 = document.getElementById('img1');


        if(results[0].label == "dog")
        {
            img1.src =  'dog.jpeg';
            dog_voice = dog_voice + 1;
            document.getElementById("dog_voice").innerHTML = "Detected dog - " + dog_voice;
        }
        else if(results[0].label == "bird")
        {
            img1.src =  'bird.avif';
            bird_voice = bird_voice + 1;
            document.getElementById("bird_voice").innerHTML = "Detected bird - " + bird_voice;
        }
        else if(results[0].label == "cat")
        {
            img1.src =  'cat.jpg';
            cat_voice = cat_voice + 1;
            document.getElementById("cat_voice").innerHTML = "Detected cat - " + cat_voice;
        }
        else 
        {
            img1.src =  'roar.avif';
            roar_voice = roar_voice + 1;
            document.getElementById("roar_voice").innerHTML = "Detected lion - " + roar_voice;
        }
    }
}