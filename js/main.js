// We only want to run after DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Get references to the main header wrapper and checkbox
  const mainHeaderWrapper = document.querySelector('.main-header-wrapper');

  // Add a click event listener to the wrapper
  mainHeaderWrapper.addEventListener('click', (event) => {
    // Ensure the click is only on the wrapper, not its children
    if (event.target === event.currentTarget) {
      toggleCheckbox.checked = !toggleCheckbox.checked;
    }
  });
  const toggleLabel = document.querySelector('.toggle-menu-label');
  const toggleCheckbox = document.getElementById('toggle-menu');
  const mainMenu = document.querySelector('.main-menu');

  // Add event listener for 'Enter', 'Space', 'ArrowUp', 'ArrowDown' key press when the label is focused
  toggleLabel.addEventListener('keydown', function (event) {
    // Toggle the checkbox state on Enter or Space key
    if (event.key === 'Enter' || event.key === ' ') {
      toggleCheckbox.checked = !toggleCheckbox.checked;
    } else if (event.key === 'Escape') {
      toggleCheckbox.checked = !toggleCheckbox.checked;
    }
  });
});
