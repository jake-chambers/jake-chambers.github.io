// $('#first').imagesLoaded({ background: true }, function () {
//     $("#welcome").fadeOut(1500);

//     setTimeout(function () { 
//         $("#content").fadeIn(1300);
//         $("body").removeClass("start");
//      }, 1430);
// });

$(window).on("load",function () {
    console.log("ready!");
    $("#welcome").fadeOut(1500, function () {
        $("#content").fadeIn(1500);
        $("body").removeClass("start");
    });
});