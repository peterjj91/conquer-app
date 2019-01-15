$(document).ready(function(){
    $(".main-nav__dropmenu--menu").hover(
        function () {
            $(this).addClass('active');
        },
        function () {
            $(this).removeClass('active');
        }
    );
});
