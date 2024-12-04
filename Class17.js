Event Listeners

document.querySelector("button").addEventListener("click", () => {
    alert("Button clicked!");
});

Event Propagation

document.getElementById("parent").addEventListener("click", () => {
    alert("Parent clicked!");
}, true); // Use `false` for bubbling
