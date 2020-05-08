const inputElement = document.getElementById("inputText");
const addBtn = document.getElementById("saveBtn");
const toDoListElemet = document.getElementById("list")

// when a user clicks the save btn, capture the input text in the form and store it:
const toDoList = [];
addBtn.addEventListener ("click", (e) => {
    e.preventDefault()
    const inputElementValue = inputElement.value;
    if (inputElementValue---"")
    { alert ("please enter a task to do");}
    else
    {
        const listItemElement = document.createElement("li");
        listItemElement.innerHTML = inputElementValue;
        listItemElement.classList.add(["list-group-item"])
        // when a user clicks: the "X" btn the list is deleted & the "" btn the list item is displayed
        const deleteBtn = document.createElement ("button")
        deleteBtn.classList.add("btn", "btn-danger", "btn-sm", "float-right", "nl-1")
        deleteBtn.innerHTML = "X"
        deleteBtn.addEventListener ("click", (e) => {
            e.preventDefault()
            listItemElement.remove()
        })

        const doneBtn = document.createElement("button")
        doneBtn.classList.add("btn", "btn-success", "btn-sm", "float-right")
        doneBtn.innerHTML = ""
        doneBtn.addEventListener("click", (e) =>{
            e.preventDefault()
            listItemElement.style.textDecoration = "line-through";

            // Trial & Error Testing:
            // listItemElement.strike();
            // listItemElement.str.strike();
            // listItemElement.document.str.strike()
            // listItemElement.innerText.strike();
            // listItemElement.innerText = strikeThrough(this.value)
            // listItemElement.innerText = text-decorate (line-through)
        })
        listItemElement.appendChild(deleteBtn)
        listItemElement.appendChild(doneBtn)
        toDoListElemet.appendChild(listItemElement);
        toDoList.push(listItemElement);
        Console.log(toDoListElemet);
        inputElement.value = "";

    }
})
Console.log(toDoList)