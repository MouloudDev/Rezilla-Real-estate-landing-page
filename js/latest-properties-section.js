// Active filter button logic.
const filterButtons = Array.from(
  document.querySelectorAll(".filter_button")
)

let currActiveButtonIdx = 0;

filterButtons.forEach((button, idx) => {
  button.addEventListener("click", () => {
    const prevActiveButton = filterButtons[currActiveButtonIdx];

    prevActiveButton.classList.remove("active_filter_button");
    button.classList.add("active_filter_button");
    // Upate current active button index;
    currActiveButtonIdx = idx;
  })
})
