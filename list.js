function addToList() {
  // Get the value of the textbox
  const input = document.getElementById("textInput");
  const inputValue = input.value;

  // Create a new list item with the textbox value
  const listItem = document.createElement("li");
  const textNode = document.createTextNode(inputValue);
  listItem.appendChild(textNode);

  // Add the new list item to the list
  const list = document.getElementById("list");
  list.appendChild(listItem);

  // Add event listeners to the list item
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

  // Clear the textbox
  input.value = "";
}

function clearList() {
  // Get the list element and remove all list items
  const list = document.getElementById("list");
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

