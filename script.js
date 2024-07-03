// script.js

document.addEventListener('DOMContentLoaded', function() {

    function handleLinkClick(event) {

        event.preventDefault();

        var href = event.target.getAttribute('href');

        window.open(href, '_blank');
    }

    var links = document.querySelectorAll('.container a');

    links.forEach(function(link) {
        link.addEventListener('click', handleLinkClick);
    });
});
