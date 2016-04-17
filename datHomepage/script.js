$(function(){

    $("table").css("display", "none");

    $(".acceuil").mouseenter(function(){
        $("table").slideDown( "slow");
    });

    $(".acceuil").mouseleave(function(){
        $("table").css("display", "none");
    });
});

