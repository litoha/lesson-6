var addButton = document.getElementById('addRow');
var table = document.getElementById("table");
var tbody = table.firstElementChild;

addButton.addEventListener('click', addRow, false); 

function addRow(event){
  var tr = document.createElement("tr");
  for(var i = 0; i < 3; i++){
    var td = document.createElement("td");
    tr.appendChild(td);
  }  
  tbody.insertBefore(tr, tbody.firstChild);
}

tbody.addEventListener('click', addInput, false);

  function addInput(event){ 
    if (event.target.id != 'addRow') {
  var input = document.createElement("input");
  input.setAttribute("autofocus", true);
  input.setAttribute("type", "text");
  input.addEventListener('blur', onFocus, false);
  var td = event.target;
  input.value = td.innerHTML;
  td.innerHTML="";
  td.appendChild(input);
    }
}

function onFocus(event){
  var input = event.target;
  var td = input.parentElement;
  td.innerHTML = input.value;
}




