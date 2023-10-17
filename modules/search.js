export function initSearch() {
  const searchForm = document.querySelector('#search-form');
  const searchInput = document.querySelector('#search-input');

  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchQuery = searchInput.value;
    // Implement search functionality here
    console.log('Searching for:', searchQuery);
    // Clear input field after searching
    searchInput.value = '';
  });
}
