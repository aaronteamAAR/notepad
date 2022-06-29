let showNoteBtn = document.querySelector(".add_note");
let EditNoteContainer = document.querySelector(".edit-note");
let noteTitle = document.querySelector(".note_title");
let noteInput = document.querySelector(".add_body");
let noteBox = document.querySelector(".note_box");
let closeIcon = document.querySelector(".close");

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const allNotes = JSON.parse(localStorage.getItem("allNotes") || "[]");
let isUpdate = false,
  updateId;

noteTitle.addEventListener("keyup", function (e) {
  this.style.height = "45px";
  let height = e.target.scrollHeight;
  noteTitle.style.height = `${height}px`;
});

closeIcon.addEventListener("click", () => {
  EditNoteContainer.style.left = "-100%";
});

showNoteBtn.addEventListener("click", () => {
  EditNoteContainer.style.left = "50%";
  allNotes.value = "";
  noteInput.value = "";
});

function showNotes(){
    let NoteAdd = ''
    document.querySelectorAll('.note').forEach(note => note.remove());
    allNotes.forEach((note, index) => {
        let filtDesc = note.description.replaceAll("\n", '<br />')
        NoteAdd += `<div class="note">
        <h3 class="note-title">${note.title}</h3>
        
        </div>`
    })
}