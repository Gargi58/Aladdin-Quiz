const accessCode1 = "IAGO";
const accessCode2 = "RAJAH";
const accessCode3 = "AGRABAH";

function clues() 
{   
    fill(206,11,38)
    stroke(206,11,38)
    strokeWeight(1.6);
    textSize(25)
    text("O G I A", displayWidth/20,displayHeight/12)
    fill(206,11,38)
    text("Question: What's the name of Jafar's parrot?", displayWidth/20,displayHeight/8 )
// add code for displaying rest of the names and the hints.
    
 fill(247,247,0)
 stroke(247,247,0)
 strokeWeight(1.6);
    textSize(25)
    text("H A A R J", displayWidth/1.8,displayHeight/12)
    fill(247,247,0)
    text("Question: What is the name of Jasmine's pet tiger?", displayWidth/1.8,displayHeight/8.4)

    fill(0,0,247)
    stroke(5,132,201)
    strokeWeight(4);
    textSize(25)
    text("B A A H G A R  ", displayWidth/2.5,displayHeight/2.5)
    fill(0,0,247)
    text("Question: Where does Aladdin take place?", displayWidth/2.5,displayHeight/2.25)
}