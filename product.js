const items = document.querySelectorAll(".item");

// Loop through each item and add a click event listener
items.forEach((item) => {
  item.addEventListener("click", () => {
    // Get the data-id attribute of the clicked item
    const id = item.getAttribute("data-id");

    // Redirect the user to a new page with the product details
    window.location.href = `product${id}.html`;
  });
});