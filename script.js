$(document).ready(function(){
    $(".menu").click(function(){
        $(".active").removeClass("active");
        $(this).parent().addClass("active");
    });
});
