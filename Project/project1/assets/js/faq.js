$(document).ready(function () {
    // Accordion functionality
    $('.accordion-header').on('click', function () {
        $(this).next('.accordion-content').slideToggle();
        $(this).parent().siblings().find('.accordion-content').slideUp();
    });

    // Toggle button functionality
    $('.toggle-button').on('click', function () {
        var target = $(this).data('target');
        $(target).slideToggle();
        
        // Trigger click event on corresponding accordion header
        $(target).prev('.accordion-header').click();
    });
});