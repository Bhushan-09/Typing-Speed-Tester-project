let randomText = document.getElementById("randomText");
let textInput = document.getElementById("textInput");
let result = document.getElementById("result");
let btn = document.getElementById("btn");

let data=["JavaScript is the Programming Language for the Web.",
          "JavaScript Using Various Functions.",
          "JavaScript can update and change both HTML and CSS.",
          "JavaScript can calculate, manipulate and validate data.",
          ]

          let randomNum = Math.random()*data.length;
          let randomaValue = Math.floor(randomNum)
          let startTime;
          let endTime;

          const myFun = () => {
             let Paralenth = textInput.value.split("").length 
            let time = new Date();
            endTime= time.getTime();
           let completeTime = Math.floor((endTime-startTime)/1000);
           let speed = Math.floor((Paralenth/completeTime)*60);
           console.log(speed);
           result.innerHTML=`You Write ${Paralenth} Word in ${completeTime} Secounds,\n Your Typing Speed is ${speed} per Minute`
          }

btn.addEventListener("click",function(){
    if(btn.innerText=="Start")
    {   let time = new Date();
        startTime= time.getTime();
        console.log(startTime)
        btn.innerText="Done";
        textInput.disabled=false;
        textInput.style.backgroundColor="white";
        randomText.innerHTML= data[randomaValue]
    }

    else if(btn.innerText=="Done")
    {
       btn.innerText="Start";
       textInput.disabled=true;
       textInput.style.backgroundColor="rgb(251, 246, 239)";
       myFun()

    }
});


