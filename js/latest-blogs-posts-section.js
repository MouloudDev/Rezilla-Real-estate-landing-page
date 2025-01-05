const blogsPostsNavBtns = Array.from(
  document.querySelectorAll(".blogs_posts_nav_button")
)

// Current blogs / posts nav button index.
let currBlgsPstsNavBtnIdx = 0;

blogsPostsNavBtns.forEach((button, idx) => {
  button.addEventListener("click", () => {
    const prevActiveButton =
      blogsPostsNavBtns[currBlgsPstsNavBtnIdx];

    prevActiveButton.classList.remove("curr_nav_button_indicator");
    button.classList.add("curr_nav_button_indicator");
    // Upate current active button index;
    currBlgsPstsNavBtnIdx = idx;
  })
})
