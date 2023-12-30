const textBox = document.getElementById("text")
const listContainer = document.getElementById("list")

function addTask(){

    if(textBox.value===''){
        alert("No text is dectected")
    }

    else{

        let li = document.createElement("li")
        li.innerHTML = textBox.value
        listContainer.appendChild(li)

        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)

        textBox.value = ''
        saveData()
    }
}

listContainer.addEventListener("click", function(a){
    if(a.target.tagName == "LI"){
        a.target.classList.toggle("done")
        saveData()
    }

    else if(a.target.tagName == "SPAN"){
        a.target.parentElement.remove()
        saveData()
    }

})

function saveData(){
    localStorage.setItem("data" , listContainer.innerHTML)
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showData()