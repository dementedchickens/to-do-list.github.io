function moveToMyList() {
  var text = document.getElementById("textbox").value; 
  var node = document.createElement("LI"); 
  var textnode = document.createTextNode(text); 
  node.appendChild(textnode); 
  document.getElementById("myList").appendChild(node); 
}
function clearMyList() {
  var list = document.getElementById("myList"); 
  while (list.firstChild) { 
    list.removeChild(list.firstChild); 
  }
}

