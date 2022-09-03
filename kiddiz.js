let n1 = Math.floor(Math.random()*10+1)
let n2 = Math.floor(Math.random()*10+1)
let v1 = document.getElementById('v1') 
let v2 = document.getElementById('v2') 

let ans = n1 + n2;
v1.value = n1;
v2.value = n2;
const jsGames = () =>
{
    var answer = document.getElementById('answer');
     
    if(answer.value == ans)
    {
        alert("Well Done !! Your Answer Is Correct")
    }
    else{
        alert("Correct Answer Is " + ans + " .Try Again. ");
    }
  answer.value ="";
   n1 = Math.floor(Math.random()*10+1)
   n2 = Math.floor(Math.random()*10+1)
   v1 = document.getElementById('v1') 
   v2 = document.getElementById('v2')
}