document.addEventListener('DOMContentLoaded', function() {
    const dropdownButton = document.getElementById('dropdownButton');
    const dropdownMenu = document.getElementById('dropdownMenu');

    // Toggle dropdown on button click
    dropdownButton.addEventListener('click', function(e) {
        dropdownMenu.classList.toggle('block');
        dropdownMenu.classList.toggle('hidden');
        e.stopPropagation(); // Prevent click from triggering document click event
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (!dropdownMenu.contains(event.target) && !dropdownButton.contains(event.target)) {
            dropdownMenu.classList.remove('block');
            dropdownMenu.classList.add('hidden');
        }
    });
});
document.querySelector('.nav-button').addEventListener('click', function() {
    document.querySelector('.menu-list').classList.toggle('block');
});