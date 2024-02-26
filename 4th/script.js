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
