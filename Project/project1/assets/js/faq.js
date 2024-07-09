$(document).ready(function () {
    $(document).ready(function() {
        $('.accordion-header').on('click', function () {
            var $content = $(this).next('.accordion-content');
            
            $('.accordion-content').not($content).slideUp();
            
            $content.slideToggle();
        });
    });
});