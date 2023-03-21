function moveToMyList() {
  var text = document.getElementById("textbox").value; // Get the text from the textbox
  var node = document.createElement("LI"); // Create a new list item
  var textnode = document.createTextNode(text); // Create a text node with the text from the textbox
  node.appendChild(textnode); // Add the text node to the list item
  document.getElementById("myList").appendChild(node); // Add the list item to the list
}
