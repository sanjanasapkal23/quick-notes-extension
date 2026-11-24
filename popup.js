javascript
const button = document.getElementById("changeColor");

button.addEventListener("click", function () {

    document.body.style.backgroundColor =
        document.body.style.backgroundColor === "lightblue"
        ? "#f5f5f5"
        : "lightblue";

});
