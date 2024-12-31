const forSaleBtn = document.querySelector(".for_sale_button");
const forRentBtn = document.querySelector(".for_rent_button");

function toggleActiveTab() {
  forSaleBtn.classList.toggle("active_tab");
  forRentBtn.classList.toggle("active_tab");
}
forSaleBtn.addEventListener("click", toggleActiveTab)
forRentBtn.addEventListener("click", toggleActiveTab)
