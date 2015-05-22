/**
 * Created by ivanm on 5/22/15.
 */


$(function(){
    $("#submit").on("click", function(){
        var ime = $("#text1").val();
        var komentar = $("#text2").val();

        $.post("/Mrzim/home/", JSON.stringify({ime: ime, komentar: komentar}), function(){
            $("#text1").val('');
            $("#text2").val('');
        });
    });

});