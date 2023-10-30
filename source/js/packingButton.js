$(function(){
    $(".packing__showing-link").click(function () {
       $(this).text(function(i, text){
           return text === "Смотреть ещё" ? "Свернуть" : "Смотреть ещё";
       })
    });
 })