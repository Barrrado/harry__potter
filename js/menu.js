document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".menu__conteiner ul li");
  const contentDivs = document.querySelectorAll(".conteudomenu");

  // Function to hide all content divs
  const hideAllContent = () => {
    contentDivs.forEach((div) => {
      div.classList.remove("active");
    });
  };

  // Function to show a specific content div
  const showContent = (targetId) => {
    hideAllContent();
    const targetDiv = document.getElementById(targetId);
    if (targetDiv) {
      targetDiv.classList.add("active");
    }
  };

  // Add click event listener to each menu item
  menuItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      const targetId = event.target.dataset.target;
      showContent(targetId);
    });
  });

  // Show the first content div by default when the page loads
  if (menuItems.length > 0) {
    showContent(menuItems[0].dataset.target);
  }
});
