//your JS code here. If required.
// Get references to the dropdown list and the button
const colorSelect = document.getElementById("colorSelect");
const removeButton = document.querySelector('input[type="button"][value="Select and Remove"]');

// Add a click event listener to the removeButton
removeButton.addEventListener("click", () => {
  // Get the selected option from the dropdown
  const selectedOption = colorSelect.options[colorSelect.selectedIndex];

  // Remove the selected option from the dropdown
  colorSelect.removeChild(selectedOption);
});
