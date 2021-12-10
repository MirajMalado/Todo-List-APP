var total_added = 0;  //initialize the var to zero
var remaining = 0;    //initialize the var to zero

function addtask() {
  var input = document.getElementById('input_field').value;
  if (input == "") {
    window.alert("You must enter a value in the New Task field.");
  }
  else {
    var noteList = document.getElementById('todo_list');
    noteList.innerHTML += "<li>" + input + "<button id='delete' onclick='clearItem()'>clear</button></li>";
    
    total_added++;
    remaining++;    //increment total_added and remaining when user adds an item
    
    document.getElementById('total_added').innerHTML = "Nombre de taches ajoutes = " + total_added;
    
  document.getElementById('remaining').innerHTML = "Nombre de taches restants = " + remaining;
  }
}

function clearItem() {
  event.currentTarget.parentElement.remove();
  
  remaining--;  //decrement remaining when user clears an item
  
  document.getElementById('remaining').innerHTML = "Nombre de taches restants = " + remaining;
}