$('#first').imagesLoaded({ background: true }, function () {
    $("#welcome").fadeOut(1500);
    setTimeout(function () { 
        $("#content").fadeIn(1300);
        $("body").removeClass("start");
     }, 1430);
});
