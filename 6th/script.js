function goBack() {
    // JavaScript to go back
    window.history.back();
}

// Function to filter cards based on the search input
 function applySearchEffect() {
    // Get the input value from the search field
    var searchInput = document.getElementById('searchInput').value.toLowerCase();

    // Get all card elements
    var cards = document.getElementsByClassName('card');

    // Check if the search input is empty
    if (searchInput === '') {
        // If empty, show all cards
        for (var i = 0; i < cards.length; i++) {
            cards[i].style.display = 'block';
        }
    } else {
        // If not empty, filter and display cards based on the search input
        for (var i = 0; i < cards.length; i++) {
            var cardId = cards[i].id.toLowerCase();
            if (cardId.includes(searchInput)) {
                cards[i].style.display = 'block';
            } else {
                cards[i].style.display = 'none';
            }
        }
    }
}

// Attach the applySearchEffect function to the input event on the search input field
document.getElementById('searchInput').addEventListener('input', applySearchEffect);

// Get the filter section element
var filterSection = document.querySelector('.filter-section');

// Get the initial offset from the top of the document
var initialOffset = filterSection.offsetTop;

// Function to update the filter section position on scroll
function updateFilterSectionPosition() {
    if (window.pageYOffset > initialOffset) {
        // If scrolled past the initial position, fix the filter section at the top
        filterSection.style.position = 'fixed';
        filterSection.style.top = '0';
    } else {
        // If not scrolled past, revert to the absolute position
        filterSection.style.position = 'absolute';
        filterSection.style.top = '56px'; // Height of the navbar
    }
}

// Attach the updateFilterSectionPosition function to the scroll event
window.addEventListener('scroll', updateFilterSectionPosition);

// Initial call to set the initial position
updateFilterSectionPosition();
