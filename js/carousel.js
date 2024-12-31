const carousel = document.querySelector(".hero_section_slides_container");
const slides  = Array.from(
 document.querySelectorAll(".hero_section_slide")
)

function positionSlides() {
  const {width, height} = carousel.getBoundingClientRect();

  slides.forEach((slide, idx) => {
    const x = width*idx + "px";
    const y = -height*idx + "px"
    slide.style.transform = `translate(${x}, ${y})`;
  })
}

// Position slides initially
positionSlides();

// Postition slides as the widnow resizes.
// Add debounced resize handler
let resizeTimeout;
window.onresize = () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(positionSlides, 100);
};

let currSlideIdx = 0;
const prevButton = document.querySelector("button.prev_button");
const nextButton = document.querySelector("button.next_button");

prevButton.addEventListener("click", () => {
  const nextSlideIdx = getNextSlideIdx(currSlideIdx, "prev");
  showSlide(nextSlideIdx);
  updateSlideIndicator(currSlideIdx, nextSlideIdx)
  currSlideIdx = nextSlideIdx // Update currSlideIdx value.
})

nextButton.addEventListener("click", () => {
  const nextSlideIdx = getNextSlideIdx(currSlideIdx, "next");
  showSlide(nextSlideIdx);
  updateSlideIndicator(currSlideIdx, nextSlideIdx)
  currSlideIdx = nextSlideIdx // Update currSlideIdx value.
})

function getNextSlideIdx(currIdx, button) {
  if (button === "next") {
    return (currIdx + 1) % slides.length;
  } else if (button === "prev") {
    return (currIdx - 1 + slides.length) % slides.length;
  }
}

// Moves the slide to the visible area.
function showSlide(slideIdx) {
  const list = document.querySelector(".hero_section_slides_list");
  const nextSlide = slides[slideIdx]
  const transform = nextSlide.style.transform;

  // Transform is of form: translate(xValuepx, yValuepx).
  // extract x from transfrom.
  const translateX = transform
    .split(`(`)[1]
    .split(`,`)[0];

  const amoutToMoveList = `-${translateX}`;
  list.style.left = amoutToMoveList;
}

function updateSlideIndicator(currSlideIdx, nextSlideIdx) {
  // Add and remove current slide indicator class
  navButtons[currSlideIdx].classList.remove("curr_slide_indicator");
  navButtons[nextSlideIdx].classList.add("curr_slide_indicator");
}

// Carousel nav logic.
const navButtons = document.querySelectorAll(".carousel_nav_button");
navButtons.forEach((button, idx) => {
  button.addEventListener("click", () => {
    showSlide(idx);
    updateSlideIndicator(currSlideIdx, idx)
    currSlideIdx = idx // Update currSlideIdx value.
  })
})
