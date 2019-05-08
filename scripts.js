$('#first').imagesLoaded({ background: true }, function () {
    console.log('#container background image loaded');
    // $("#first").fadeIn(3000);
    // $("#introduction").fadeIn(1500);

    $("#welcome").fadeOut(1000);
    // $("#welcome").addClass("hidden");
    setTimeout(function () { $("#content").fadeIn(2000); }, 950);


});

