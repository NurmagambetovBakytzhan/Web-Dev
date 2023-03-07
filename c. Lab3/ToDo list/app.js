function addItem() {
    var inputBox = document.getElementById("entered-list");
    var itemText = inputBox.value;
    if (itemText !== "") {
        var listItem = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.onchange = function () {
            if (this.checked) {
                text.style.textDecoration = "line-through";
            } else {
                text.style.textDecoration = "none";
            }
        };
        listItem.appendChild(checkbox);
        var text = document.createElement("span");
        text.className = "item-text";
        var textNode = document.createTextNode(itemText);
        text.appendChild(textNode);
        listItem.appendChild(text);
        var deleteButton = document.createElement("button");
        deleteButton.className = "deleteButton";
        var iconSpan = document.createElement("span");
        iconSpan.className = "fas fa-trash";
        deleteButton.appendChild(iconSpan);
        deleteButton.onclick = function () {
            this.parentNode.parentNode.removeChild(this.parentNode);
        };
        listItem.appendChild(deleteButton);
        var toDoList = document.getElementById("to-do-list");
        toDoList.appendChild(listItem);
        inputBox.value = "";

        // Add a tooltip to the delete button
        var tooltip = document.createElement("span");
        tooltip.className = "tooltiptext";
        var tooltipText = document.createTextNode("");
        tooltip.appendChild(tooltipText);
        deleteButton.appendChild(tooltip);
    }
}
