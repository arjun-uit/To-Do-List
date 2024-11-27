const inputBox = document.getElementById("input-task")
const listContainer = document.getElementById("list-container")

function addTask(){
    if(inputBox.value == ''){
        alert("Please enter a task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span =document.createElement("span")
        span.innerHTML = "\u00D7";
        li.appendChild(span)
}
inputBox.value = ''; // to empty input bar after adding
saveData();

}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
    else if( e.target.tagName =="LI"){
        e.target.classList.toggle("done");
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}
function showList(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showList();