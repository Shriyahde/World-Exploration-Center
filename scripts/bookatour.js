import db from "./firebase.js";

const form = document.getElementById("form");

const nameInput = document.getElementById("name-input");
const dateInput = document.getElementById("date-input");
const timeInput = document.getElementById("time-input");

const book = function(name, date, time) {
    db.collection("bookings").doc().set({
        name: name,
        date: date,
        time: time,
    })
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    book(nameInput.value, dateInput.value, timeInput.value);
    form.reset();
});