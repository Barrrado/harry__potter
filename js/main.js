window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 463) {
    header.classList.remove("active");
  } else {
    header.classList.add("active"); // Uncomment if you want to re-add the class
  }
});
