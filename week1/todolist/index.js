const $ = (selector) => document.querySelector(selector);

function handleToDoList(toDoList, input, addForm) {
  function addToDo(event) {
    event.preventDefault();
    const li = document.createElement("li");
    li.innerText = input.value;
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = `<i class="material-icons"> delete </i>`;

    // 할 일 삭제 이벤트
    deleteButton.addEventListener("click", (e) => {
      e.target.parentElement.remove();
    });

    li.appendChild(deleteButton);
    toDoList.appendChild(li);

    input.value = "";
  }

  addForm.addEventListener("submit", addToDo);
}

function viewToDo(
  leftSection,
  rightSection,
  todayButton,
  tomorrowButton,
  allButton
) {
  todayButton.addEventListener("click", () => {
    rightSection.classList.add("hidden");
    leftSection.classList.remove("hidden");
    leftSection.classList.remove("line");
  });

  tomorrowButton.addEventListener("click", () => {
    leftSection.classList.add("hidden");
    leftSection.classList.remove("line");
    rightSection.classList.remove("hidden");
  });

  allButton.addEventListener("click", () => {
    leftSection.classList.remove("hidden");
    leftSection.classList.add("line");
    rightSection.classList.remove("hidden");
  });
}

function main() {
  viewToDo(
    (leftSection = $("#left-section")),
    (rightSection = $("#right-section")),
    (todayButton = $("#todayButton")),
    (tomorrowButton = $("#tomorrowButton")),
    (allButton = $("#allButton"))
  );
  handleToDoList(
    (toDoList = $("#left-section ul")),
    (input = $("#todayInput")),
    (addForm = $("#todayAddForm"))
  );
  handleToDoList(
    (toDoList = $("#right-section ul")),
    (input = $("#tomorrowInput")),
    (addForm = $("#tomorrowAddForm"))
  );
}

main();
