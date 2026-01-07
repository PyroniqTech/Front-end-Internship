document.addEventListener("DOMContentLoaded", function () {
  var input = document.getElementById("searchInput");
  var btn = document.getElementById("searchBtn");
  if (btn && input)
    btn.addEventListener("click", function () {
      input.focus();
    });
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
