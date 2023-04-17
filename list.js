function addToList() {
 
  const input = document.getElementById("textInput");
  const inputValue = input.value;

  const listItem = document.createElement("li");
  const textNode = document.createTextNode(inputValue);
  listItem.appendChild(textNode);

  
  const list = document.getElementById("list");
  list.appendChild(listItem);


  listItem.addEventListener("mouseover", () => {
    listItem.classList.add("active");
  });
  listItem.addEventListener("mouseout", () => {
    listItem.classList.remove("active");
  });
  listItem.addEventListener("click", () => {
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
  });

 
  input.value = "";
}

function clearList() {
  
  const list = document.getElementById("list");
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

