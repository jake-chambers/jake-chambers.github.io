$(window).on("load",function () {
    $('#first').imagesLoaded({ background: true }, function () {
        $("#welcome").fadeOut(1900);
        setTimeout(function () {
            $("#content").fadeIn(1300);
        }, 1830);
    });
});  

