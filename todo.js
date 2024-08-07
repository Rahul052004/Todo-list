const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function addTask(){
    if(inputBox.value ==''){
        alert("You have to write something!");
    }
    else{
        let li =document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);

        let span=document.createElement("span");
        span.innerHTML="\u00d7"; /*assign the cross sign in the span tag*/
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
 /* Function for check or uncheck*/
listContainer.addEventListener("click",function(e){
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

/* Fucntion for save the data in the local storage of the browser*/

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
/* Fuction for dsiplsay the save data*/
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();