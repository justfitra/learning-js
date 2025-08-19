const input = document.getElementById("noteInput");
const content = document.getElementById("noteContent");
const form = document.getElementById("form");
const submit = document.getElementById("submit");
const list = document.getElementById("notesList");
const errorMsgTitle = document.querySelector(".errorMsgTitle");
const errorMsgContent = document.querySelector(".errorMsgContent");

form.addEventListener("click", function (e) {
  e.preventDefault();
  const noteTitle = input.value.trim();
  const noteContent = content.value.trim();

  if (noteTitle === "") {
    errorMsgTitle.textContent = "Title Harus Di isi";
  } else {
    errorMsgTitle.textContent = "";
  }

  if (noteContent === "") {
    errorMsgContent.textContent = "Content Harus Di isi";
  } else {
    errorMsgContent.textContent = "";
  }

  if (noteTitle && noteContent) {
    const note = document.createElement("li");
    const noteTitleElement = document.createElement("h2");
    const noteContentElement = document.createElement("p");
    const div = document.createElement("div");
    const edit = document.createElement("button");
    const deleteButton = document.createElement("button");

    div.style.display = "flex";
    div.style.gap = "10px";

    edit.textContent = "Edit";
    deleteButton.textContent = "Delete";
    noteTitleElement.textContent = noteTitle;
    noteContentElement.textContent = noteContent;

    div.appendChild(edit);
    div.appendChild(deleteButton);
    note.prepend(noteTitleElement);
    note.appendChild(noteContentElement);
    note.appendChild(div);
    list.appendChild(note);

    edit.addEventListener("click", function (e) {
      e.preventDefault();
      const formEdit = document.createElement("form");
      const inputNewTitle = document.createElement("input");
      const inputNewContent = document.createElement("textarea");
      const submitEdit = document.createElement("button");

      formEdit.style.display = "flex";
      formEdit.style.flexDirection = "column";
      formEdit.style.gap = "12px";
      inputNewTitle.type = "text";
      inputNewTitle.value = noteTitleElement.textContent;
      inputNewContent.value = noteContentElement.textContent;
      submitEdit.textContent = "Save";
      submitEdit.type = "submit";
      note.removeChild(noteTitleElement);
      note.removeChild(noteContentElement);
      note.removeChild(div);
      formEdit.prepend(inputNewContent);
      formEdit.prepend(inputNewTitle);
      formEdit.appendChild(submitEdit);
      list.appendChild(formEdit);

      submitEdit.addEventListener("click", function (e) {
        e.preventDefault();
        noteTitleElement.textContent = inputNewTitle.value;
        noteContentElement.textContent = inputNewContent.value;

        div.appendChild(edit);
        div.appendChild(deleteButton);
        note.prepend(noteTitleElement);
        note.appendChild(noteContentElement);
        note.appendChild(div);
        list.appendChild(note);

        inputNewTitle.remove();
        inputNewContent.remove();
        submitEdit.remove();
      });
    });

    deleteButton.addEventListener("click", function (e) {
      e.preventDefault();

      note.remove();
    });

    form.reset();
  }
});
