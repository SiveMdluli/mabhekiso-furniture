export function initNavbar() {
  const dropdownLinks = document.querySelectorAll('.dropdown-toggle');

  dropdownLinks.forEach((link) => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const dropdownMenu = this.nextElementSibling;
      dropdownMenu.classList.toggle('show');
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', (event) => {
    if (!event.target.matches('.dropdown-toggle')) {
      dropdownLinks.forEach((link) => {
        const dropdownMenu = link.nextElementSibling;
        dropdownMenu.classList.remove('show');
      });
    }
  });
}
