// script.js

document.addEventListener('DOMContentLoaded', function() {
    const contactButton = document.querySelector('.contact-button');

    if (contactButton) {
        contactButton.addEventListener('click', function(event) {
            event.preventDefault(); 
            alert('Contact Form coming soon!');
        });
    }

    //Responsive Script
    function handleResize() {
        const screenWidth = window.innerWidth;

    }
    window.addEventListener('resize', handleResize);

    handleResize(); 

});