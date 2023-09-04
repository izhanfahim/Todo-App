var inp = document.getElementById("inp")
var list = document.getElementById("list")

var todoList = []

function addTodo (){
    if(inp.value == ""){
        alert("please enter a value")
        return;
    }
    todoList.push(inp.value)
    inp.value = ""
    render()
}

function render(){
    list.innerHTML=""
    for (var i= 0 ; i < todoList.length ; i++){
        list.innerHTML += `<li class="listitem"> ${todoList[i]} <button onclick="editTodo(${i})" class="buttons"><i class="fa-solid fa-pen-to-square" style="color: #000000;"></i></button>  <button onclick="deleteTodo(${i})" class="buttons"><i class="fa-solid fa-trash" style="color: #000000;"></i></button></li>`
    }
    
}

function editTodo(indexNum){
   
    todoList[indexNum] = prompt("Enter your new value") 
    render()   
}

function deleteTodo(indexNum){
    todoList.splice(indexNum,1)
    render( )
}

function deleteAll(){
    todoList = []
    list.innerHTML=""
}

function edit(){

}