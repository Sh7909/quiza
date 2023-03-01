const pipes = [
    {
        question: "Two pipes A and B can fill a cistern in 20 and 30 minutes respectively, and a third pipe C can empty it in 40 minutes. How long will it take to fill the cistern if all the 3 pipes are opened at the same time?",
        option: ["7 1/7 mins.", "15 1/7 mins.", "17 1/7 mins.", "19 1/7 mins."],
        answer: 2
    },
    {
        question: "Two taps can separately fill a cistern 10 minutes and 15 minutes respectively and when the waste pipe is open, they can together fill it in 18 minutes. The waste pipe can empty the full cistern in?",
        option: ["7 mins.", "9 mins.", "13 mins.", "23 mins."],
        answer: 1
    },
    {
        question: "A cistern is normally filled in 8 hours but takes two hours longer to fill because of a leak in its bottom. If the cistern is full, the leak will empty it in?",
        option: ["16 hrs", "20 hrs", "25 hrs", "40 hrs"],
        answer: 3
    },
    {
        question: "Two pipes can fill a tank in 18 minutes and 15 minutes. An outlet pipe can empty the tank in 45 minutes. If all the pipes are opened when the tank is empty, then how many minutes will it take to fill the tank?",
        option: ["9 mins.", "10 mins.", " 11 mins.", "12 mins."],
        answer: 1
    },
    {
        question: "Pipe A can fill a tank in 16 minutes and pipe B cam empty it in 24 minutes. If both the pipes are opened together after how many minutes should pipe B be closed, so that the tank is filled in 30 minutes?",
        option: ["19 mins.", "20 mins.", "21 mins.", "22 mins."],
        answer: 2
    },
    {
        question: "Three pipes A, B and C can fill a tank from empty to full in 30 minutes, 20 minutes and 10 minutes respectively. When the tank is empty, all the three pipes are opened. A, B and C discharge chemical solutions P, Q and R respectively. What is the proportion of solution R in the liquid in the tank after 3 minutes?",
        option: ["5/11", "6/11", "7/11", "8/11"],
        answer: 1
    },
    {
        question: "A pump can fill a tank with water in 2 hours. Because of a leak, it took 2 1/3 hours to fill the tank. The leak can drain all the water of the tank in:",
        option: ["10 hrs", "12 hrs", "14 hrs", "16 hrs"],
        answer: 2
    },
    {
        question: "A tap can fill a tank in 6 hours. After half the tank is filled, three more similar taps are opened. What is the total time taken to fill the tank completely?",
        option: ["3 hrs 15 min", "3 hrs 45 min", "4 hrs", "4 hrs 15 min"],
        answer: 1
    },
    {
        question: "A large tanker can be filled by two pipes A and B in 60 minutes and 40 minutes respectively. How many minutes will it take to fill the tanker from empty state if B is used for half the time and A and B fill it together for the other half?",
        option: ["15 min", "20 min", "27.5 min", "30 min"],
        answer: 3
    },
    {
        question: "One pipe can fill a tank three times as fast as another pipe. If together the two pipes can fill the tank in 36 minutes, then the slower pipe alone will be able to fill the tank in:",
        option: ["81 min.", "108 min.", "144 min.", "192 min."],
        answer: 2
    }
]

let index = 0;
const answer=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
let arr=[];
const container = document.getElementById("container");
const container2 = document.getElementById("container2");
const first = document.getElementById("first");
const text = document.getElementById("text");
const enter = document.getElementById("Enter");
let effect = document.getElementById("effect");
let showscore = document.getElementById("showscore");
let four=document.getElementsByClassName("four");
let correctanswers=0;
let attemptedquestions=0;
let wrong=0;

let tabClicked=-1;
let time=null;
enter.addEventListener("click", enterclick);
function enterclick() {
        
    text.innerHTML = "<strong>Hello</strong>" + " " + effect.value.bold() + "<strong>!</strong>";
}
first.addEventListener("click", fbutton);
function fbutton() {
    console.log(index,"kkkkkkkkkkkkk")
    tabClicked=1;
    document.getElementById("maincontainer").style.display="none";
    document.getElementById("container").style.display="block";//2
        document.getElementById("showscore").style.display="block";
    container.innerHTML = `<div  id="showresult "style="margin:1rem;font-family:sans-serif;font-size:1.5rem;">Pipes and Cisterns</div>`;
    container.innerHTML += `<div style="text-align:center; font-size:1.7rem; font-weight:bold; text-align:center;
    border:2px solid rgb(31, 168, 231); color:rgb(31, 168, 231);border-radius:10rem;width:3rem; 
    height:3rem;position:stick" id="newTimer"></div>`
    var newTime = document.getElementById("newTimer");
    timer = 500;
    document.getElementById("newTimer").innerHTML = timer;
     time = setInterval(function () {
        newTime.innerHTML = time;
        timer--;
        if(document.getElementById("newTimer")){
            document.getElementById("newTimer").innerHTML = timer;
        }
        if (timer === 0) {
            alert("Time's Up");
            clearInterval(time);
        }
        else if (timer < 0) {
            clearInterval(time);
        }
    }, 1000);
    
    container.innerHTML += `<div  id="scorediv" style="text-align:right;margin:1rem;
    font-family:sans-serif;font-size:1.5rem">SCORE:
   <span style="font-weight:bold"> ${index}</span></div>
   <div id="subcontainer"></div>`;
   shownextquestion1();
    
}

var timer;
function ready1() {
    let  subcontainer=document.getElementById("subcontainer");
    let currentquestion = pipes[index];
    subcontainer.innerHTML= `<div  id="Question" style="z-index:2;margin:1rem;border:2px solid rgb(194, 175, 145);
    border-radius:0.3rem;width:33rem;height:10rem; font-family:sans-serif;font-size:1.3rem; 
    text-align:center;padding-top:4rem;padding-left:2rem;padding-right:2rem;">
    ${currentquestion.question}</div>`;

    for (let i = 0; i < currentquestion.option.length; i++) {
        // index++;
        // console.log(index)
        let y = currentquestion.option[i];
        subcontainer.innerHTML += `<button onclick="checkcorrect(${i})" class="four" style="margin:1rem;text-align:left;border-color:rgb(31, 168, 231);
        color:rgb(31, 168, 231);font-size:1rem;width:15rem;font-family:sans-serif;
        height:3rem;border-radius:0.5rem;background-color:white" >
        ${y}</button>`;

    }
    subcontainer.innerHTML += `<button onclick="shownextquestion1()" style="margin:1rem;text-align:center;border-color:rgb(31, 168, 231);
    color:rgb(31, 168, 231);font-size:1rem;width:15rem;font-family:sans-serif;height:3rem;border-radius:2rem;
    background-color:white " onMouseOver="style.backgroundColor='rgb(31, 168, 231)';style.color='white'" 
    onMouseOut="style.backgroundColor='white';style.color='rgb(31, 168, 231)'">
    Next Question</button>`
}


let scoreincre = 0;
function shownextquestion1() {   
    ready1();  
    index+=1;
    scoreincre+=1;                
    let scorediv = document.getElementById("scorediv");
    scorediv.innerText = `SCORE: ${scoreincre}`;
    showscore.style.display="block";
    showscore.innerHTML=`${scoreincre}/10`;
    result1();
   
}
function result1() {
    
    if(index>9){
        index=0;
        container.innerHTML = "";
        container.innerHTML=`<div style="color:rgb(31, 168, 231);font-weight:bold;padding-top:2rem;
        font-size:1.5rem">Quiz Result</div>`;   
        container.innerHTML+=`${"<br>"} ${effect.value.bold()} your result is:`;  
        container.innerHTML+=`${"<br>"} ${"<br>"} Total Time Taken:  <strong>${500-timer} </strong> seconds`;
        container.innerHTML+=`${"<br>"}${"<br>"} Total Question: <strong>10</strong>`;
        container.innerHTML+=`${"<br>"}${"<br>"} Attempt: <strong>${attemptedquestions}</strong>`;
        container.innerHTML+=`${"<br>"}${"<br>"} Correct: <strong>${correctanswers} </strong>`;
        container.innerHTML+=`${"<br>"}${"<br>"} Wrong: <strong>${wrong} </strong>`;
        container.innerHTML+=`${"<br>"}${"<br>"} Percentage: <strong>${correctanswers*10}% </strong>`;//problem here.....
        container.innerHTML+=`${"<br>"}${"<br>"} <button  onclick="startagain()"style="margin-left:10rem; margin:1rem;text-align:center;
        border-color:rgb(31, 168, 231);color:rgb(31, 168, 231);font-size:1rem;width:15rem;font-family:sans-serif;
        height:3rem;border-radius:2rem;background-color:white;" onMouseOver="style.backgroundColor='rgb(31, 168, 231)';style.color='white'" 
        onMouseOut="style.backgroundColor='white';style.color='rgb(31, 168, 231)'">
        Start Again</button>`;
        container.innerHTML+=`<button  onclick="Go()" style="margin-left:10rem; margin:1rem;text-align:center;
        border-color:rgb(31, 168, 231);color:rgb(31, 168, 231);font-size:1rem;width:15rem;font-family:sans-serif;
        height:3rem;border-radius:2rem;background-color:white" onMouseOver="style.backgroundColor='rgb(31, 168, 231)';style.color='white'" 
        onMouseOut="style.backgroundColor='white';style.color='rgb(31, 168, 231)'">
        Go To Home</button>`;
}
}
function startagain(){
    let w=prompt("Do you Want to Continue ?");
    if(w==="yes"||w==="Yes"||w==="YES"){
        document.getElementById("maincontainer").style.display="block"; 
        document.getElementById("container").style.display="none";
        document.getElementById("showscore").style.display="none";
        scoreincre=0;
        clearInterval(time);
    }
}
function Go(){
    document.getElementById("maincontainer").style.display="block"; 
        document.getElementById("container").style.display="none";
        document.getElementById("showscore").style.display="none";
}
var flag=0;
function checkcorrect(j){   
    attemptedquestions++;     
    flag=0;
    var four=document.querySelectorAll(".four");
    four.forEach((f,i)=>{
        if(i===j){
            f.style.backgroundColor="rgb(31, 168, 231)";//problem here.....
            f.style.color="white";  
        }
        else{
            f.style.backgroundColor="white";
            f.style.color="rgb(31, 168, 231)"; 
        }
        flag=1;
    });
    
    
    
    let useranswer;
    let arr2=[];
    arr2=useranswer;
    if(j===pipes[index].answer){
        correctanswers++;
        console.log("correct answer");
    }
    else{
        wrong++;
        console.log("incorrect")
    }
    if(flag===1){
        shownextquestion1();
    }
    
}



























const probability = [
    {
        question: "Tickets numbered 1 to 20 are mixed up and then a ticket is drawn at random. What is the probability that the ticket drawn has a number which is a multiple of 3 or 5?",
        option: ["1/2", "2/5", "8/15", "9/20"],
        answer: 3
    },
    {
        question: "In a throw of a coin, the probability of getting a head is?",
        option: ["1", "1/2", "1/4", "2"],
        answer: 1
    },
    {
        question: "Two unbiased coins are tossed. What is the probability of getting at most one head?",
        option: ["2/3", "1/2", "3/4", "4/3"],
        answer: 2
    },
    {
        question: "An unbiased die is tossed. Find the probability of getting a multiple of 3.",
        option: ["1/4", "1/3", "1/2", "1"],
        answer:1
    },
    {
        question: "In a simultaneous throw of a pair of dice, find the probability of getting a total more than 7.",
        option: ["3/2", "4/7", "5/12", "6/13"],
        answer:2
    },
    {
        question: "A bag contains 6 white and 4 black balls. two balls are drawn at random. Find the probability that they are of the same color.",
        option: ["3/4", "5/3", "7/15", "8/17"],
        answer:2
    },
    {
        question: "Two dice are thrown together. What is the probability that the sum of the numbers on the two faces is divisible by 4 or 6?",
        option: ["13/14", "5/3", "7/16", "7/18"],
        answer:3
    },
    {
        question: "Two cards are drawn at random from a pack of 52 cards. What is the probability that either both are black or both are queens?",
        option: ["5/21", "55/221", "555/2221", "5555/22221"],
        answer:1
    },
    {
        question: "A box contains 5 green, 4 yellow and 3 white marbles. Three marbles are drawn at random. What is the probability that they are not of the same color?",
        option: ["3/44", "3/55", "52/55", "41/44"],
        answer:3
    },
    {
        question: "A bag contains 4 white, 5 red, and 6 blue balls. Three balls are drawn at random from the bag. The probability that all of them are red is:",
        option: ["1/22", "3/22", "2/91", "2/77"],
        answer: 2
    }
]

let indexnumber = 0;
const Answer=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
const Container1 = document.getElementById("container");
const second = document.getElementById("second");
const Text = document.getElementById("text");
const Enter = document.getElementById("Enter");
let Effect = document.getElementById("effect");
let Showscore = document.getElementById("showscore");
let Four=document.getElementsByClassName("four");
let Correctanswers=0;
let Attemptedquestions=0;
let Wrong=0;

let TabClicked=-1;
let Time=null;
Enter.addEventListener("click", Enterclick);
function Enterclick() {
        
    Text.innerHTML = "<strong>Hello</strong>" + " " + Effect.value.bold() + "<strong>!</strong>";
}
second.addEventListener("click", sbutton);
function sbutton() {
    console.log(indexnumber,"gggg")
    TabClicked=1;
    document.getElementById("maincontainer").style.display="none";
    document.getElementById("container").style.display="block";//2
        document.getElementById("showscore").style.display="block";
        Container1.innerHTML = `<div  id="showresult "style="margin:1rem;font-family:sans-serif;font-size:1.5rem;">Probability</div>`;
        Container1.innerHTML += `<div style="text-align:center; font-size:1.7rem; font-weight:bold; text-align:center;
    border:2px solid rgb(31, 168, 231); color:rgb(31, 168, 231);border-radius:10rem;width:3rem; 
    height:3rem;position:stick" id="newTimer"></div>`
    var newTime = document.getElementById("newTimer");
    timer = 500;
    document.getElementById("newTimer").innerHTML = timer;
     Time = setInterval(function () {
        newTime.innerHTML = Time;
        timer--;
        if(document.getElementById("newTimer")){
            document.getElementById("newTimer").innerHTML = timer;
        }
        if (timer === 0) {
            alert("Time's Up");
            clearInterval(Time);
        }
        else if (timer < 0) {
            clearInterval(Time);
        }
    }, 1000);
    
    Container1.innerHTML += `<div  id="scorediv" style="text-align:right;margin:1rem;
    font-family:sans-serif;font-size:1.5rem">SCORE:
   <span style="font-weight:bold"> ${indexnumber}</span></div>
   <div id="subcontainer"></div>`;
   shownextquestion2();
    
}

var timer;
function ready2() {
    let  subcontainer=document.getElementById("subcontainer");
    let currentquestion = probability[indexnumber];
    subcontainer.innerHTML= `<div  id="Question" style="z-index:2;margin:1rem;border:2px solid rgb(194, 175, 145);
    border-radius:0.3rem;width:33rem;height:10rem; font-family:sans-serif;font-size:1.3rem; 
    text-align:center;padding-top:4rem;padding-left:2rem;padding-right:2rem;">
    ${currentquestion.question}</div>`;

    for (let i = 0; i < currentquestion.option.length; i++) {
        let y = currentquestion.option[i];
        subcontainer.innerHTML += `<button onclick="checkcorrect(${i})" class="Four" style="margin:1rem;text-align:left;border-color:rgb(31, 168, 231);
        color:rgb(31, 168, 231);font-size:1rem;width:15rem;font-family:sans-serif;
        height:3rem;border-radius:0.5rem;background-color:white" >
        ${y}</button>`;

    }
    subcontainer.innerHTML += `<button onclick="shownextquestion2()" style="margin:1rem;text-align:center;border-color:rgb(31, 168, 231);
    color:rgb(31, 168, 231);font-size:1rem;width:15rem;font-family:sans-serif;height:3rem;border-radius:2rem;
    background-color:white " onMouseOver="style.backgroundColor='rgb(31, 168, 231)';style.color='white'" 
    onMouseOut="style.backgroundColor='white';style.color='rgb(31, 168, 231)'">
    Next Question</button>`
}


let Scoreincre = 0;
function shownextquestion2() {   
    ready2();  
    indexnumber+=1;
    Scoreincre+=1;                
    let scorediv = document.getElementById("scorediv");
    scorediv.innerText = `SCORE: ${Scoreincre}`;
    Showscore.style.display="block";
    Showscore.innerHTML=`${Scoreincre}/10`;
    result2();
   
}
function result2() {
    
    if(indexnumber>9){
        indexnumber=0;
        Container1.innerHTML = "";
        Container1.innerHTML=`<div style="color:rgb(31, 168, 231);font-weight:bold;padding-top:2rem;
        font-size:1.5rem">Quiz Result</div>`;   
        Container1.innerHTML+=`${"<br>"} ${Effect.value.bold()} your result is:`;  
        Container1.innerHTML+=`${"<br>"} ${"<br>"} Total Time Taken:  <strong>${500-timer} </strong> seconds`;
        Container1.innerHTML+=`${"<br>"}${"<br>"} Total Question: <strong>10</strong>`;
        Container1.innerHTML+=`${"<br>"}${"<br>"} Attempt: <strong>${Attemptedquestions}</strong>`;
        Container1.innerHTML+=`${"<br>"}${"<br>"} Correct: <strong>${Correctanswers} </strong>`;
        Container1.innerHTML+=`${"<br>"}${"<br>"} Wrong: <strong>${Wrong} </strong>`;
        Container1.innerHTML+=`${"<br>"}${"<br>"} Percentage: <strong>${Correctanswers*10}% </strong>`;//problem here.....
        Container1.innerHTML+=`${"<br>"}${"<br>"} <button  onclick="startagain()"style="margin-left:10rem; margin:1rem;text-align:center;
        border-color:rgb(31, 168, 231);color:rgb(31, 168, 231);font-size:1rem;width:15rem;font-family:sans-serif;
        height:3rem;border-radius:2rem;background-color:white;" onMouseOver="style.backgroundColor='rgb(31, 168, 231)';style.color='white'" 
        onMouseOut="style.backgroundColor='white';style.color='rgb(31, 168, 231)'">
        Start Again</button>`;
        Container1.innerHTML+=`<button  onclick="Go()" style="margin-left:10rem; margin:1rem;text-align:center;
        border-color:rgb(31, 168, 231);color:rgb(31, 168, 231);font-size:1rem;width:15rem;font-family:sans-serif;
        height:3rem;border-radius:2rem;background-color:white" onMouseOver="style.backgroundColor='rgb(31, 168, 231)';style.color='white'" 
        onMouseOut="style.backgroundColor='white';style.color='rgb(31, 168, 231)'">
        Go To Home</button>`;
}
}
function startagain(){
    let w=prompt("Do you Want to Continue ?");
    if(w==="yes"||w==="Yes"||w==="YES"){
        document.getElementById("maincontainer").style.display="block"; 
        document.getElementById("container").style.display="none";
        document.getElementById("showscore").style.display="none";
        Scoreincre=0;
        clearInterval(Time);
    }
}
function Go(){
    document.getElementById("maincontainer").style.display="block"; 
        document.getElementById("container").style.display="none";
        document.getElementById("showscore").style.display="none";
}
var flag=0;
function checkcorrect(j){   
    Attemptedquestions++;     
    flag=0;
    var four=document.querySelectorAll(".Four");
    four.forEach((f,i)=>{
        if(i===j){
            f.style.backgroundColor="rgb(31, 168, 231)";//problem here.....
            f.style.color="white";  
        }
        else{
            f.style.backgroundColor="white";
            f.style.color="rgb(31, 168, 231)"; 
        }
        flag=1;
    });
    
    
    
    let useranswer;
    let arr2=[];
    arr2=useranswer;
    if(j===probability[indexnumber].answer){
        Correctanswers++;
        console.log("correct answer");
    }
    else{
        Wrong++;
        console.log("incorrect")
    }
    if(flag===1){
        shownextquestion2();
    }
    
}































