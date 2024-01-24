const form = document.getElementById("form");

const nameInput = document.getElementById("name-input");
const dateInput = document.getElementById("date-input");
const timeInput = document.getElementById("time-input");

const book = function(name, date, time) {
    // Nothing here right now
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    book(nameInput.value, dateInput.value, timeInput.value);
    form.reset();
});