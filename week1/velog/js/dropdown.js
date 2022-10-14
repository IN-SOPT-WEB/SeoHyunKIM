function dropDown() {
  const dropDown = document.querySelector("#dropDownButton");
  const span = document.querySelector("#dropDownButton span");
  const dropDownList = document.querySelector("#dropDownList");
  const Button = document.querySelectorAll(".listButton");

  dropDown.addEventListener("click", () => {
    dropDownList.classList.remove("hidden");
  });

  function removeClass() {
    Button.forEach((item) => {
      item.classList.remove("selectedButton");
    });
  }

  Button.forEach((item) =>
    item.addEventListener("click", (e) => {
      removeClass();
      dropDownList.classList.add("hidden");
      const li = e.target;
      li.classList.add("selectedButton");
      span.innerHTML = li.textContent;
    })
  );
}

dropDown();
