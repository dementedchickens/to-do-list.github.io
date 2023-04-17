function addToList() {
 
  const input = document.getElementById("textInput");
  const inputValue = input.value;//this gets the "value" or the words that was put into the textbox

  const listItem = document.createElement("li");
  const textNode = document.createTextNode(inputValue);
  listItem.appendChild(textNode);//creates a new lsit item with the value of the textbox

  
  const list = document.getElementById("list");
  list.appendChild(listItem);//adds the new item to the list.


  listItem.addEventListener("mouseover", () => {
    listItem.classList.add("active");
  });
  listItem.addEventListener("mouseout", () => {
    listItem.classList.remove("active");
  });
  listItem.addEventListener("click", () => {//sdds the lsiterner events and what's going to trigger the changes in the list in this case its the pop up
    const action = prompt("Do you want to move the item up, move it down, or delete it? (up/down/delete)");
    if (action === "up") {
      const prevItem = listItem.previousElementSibling;
      if (prevItem) {
        list.insertBefore(listItem, prevItem);
      }
    } else if (action === "down") {
      const nextItem = listItem.nextElementSibling;
      if (nextItem) {
        list.insertBefore(nextItem, listItem);
      }
    } else if (action === "delete") {
      list.removeChild(listItem);
    }
  });// this entire section basically takes the imput of the textbox and depending if it is up, down, or delete the action asigned to the words will happen to the task

 
  input.value = "";
}

function clearList() {
  
  const list = document.getElementById("list");
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}//the function that remove all of the stuff from the list.

