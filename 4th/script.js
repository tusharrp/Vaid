// Your JavaScript (script.js) file
$(document).ready(function () {
    // Custom jQuery expression for case-insensitive :contains
    $.expr[":"].contains = $.expr.createPseudo(function (arg) {
        return function (elem) {
            return $(elem).text().toLowerCase().indexOf(arg.toLowerCase()) >= 0;
        };
    });

    // Apply blur effect to cards that don't match the search term
    function applySearchEffect() {
        var searchTerm = $('#searchInput').val().toLowerCase();

        // Remove blur effect from all cards
        $('.card').removeClass('blur-effect');

        // Apply blur effect to cards that don't match the search term
        $('.card:not(:contains("' + searchTerm + '"))').addClass('blur-effect');
    }

    // Handle click events outside the search area and cards
    $(document).on('click', function (event) {
        if (!$(event.target).closest('.navbar, .cards-container').length) {
            // Clicked outside the search area and cards, remove blur effect
            $('.card').removeClass('blur-effect');
        }
    });

    // Handle click events on the search button
    $('#searchButton').on('click', function () {
        // Apply blur effect based on the search term
        applySearchEffect();
    });
});
