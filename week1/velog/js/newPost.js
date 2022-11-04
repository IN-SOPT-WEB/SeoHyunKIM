function createTagButton() {
  //버튼 생성
  const newTagButton = document.createElement("button");
  newTagButton.innerText = tagInput.value;
  newTagButton.classList.add("tagButton");

  //버튼 클릭 시 삭제 기능
  newTagButton.addEventListener("click", () => {
    newTagButton.remove();
  });

  tagForm.before(newTagButton);
}

function newPost() {
  const tagForm = document.querySelector("#tagForm");
  const tagInput = document.querySelector("#tagInput");

  tagForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const tagButton = document.querySelectorAll(".tagButton");
    var arrTagButton = Array.prototype.slice.call(tagButton);

    // 같은 태그가 이미 있는지 확인
    const isThereSameThing = (currentValue) =>
      currentValue.innerText !== tagInput.value;
    if (arrTagButton.every(isThereSameThing)) {
      createTagButton();
    } else {
      alert("이미 같은 태그가 있습니다.");
    }
    tagInput.value = "";
  });
}

newPost();
