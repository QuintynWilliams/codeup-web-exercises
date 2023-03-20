"use strict";

(() => {



    $("h1").click(function(){
        $(this).css('background-color', 'hotpink');
    });

    $("p").dblclick(function(){
        $(this).css('font-size', '18px');
    });

    $("li").hover(
        function(){
            $(this).css('color', 'red');
        },
        function(){
            $(this).css('color', 'black');
        }
    );

    window.onload = function() {
        $(".codeup").css("border", "1px solid red")
        $("li").css("font-size", "20px")
        $("h1, p, li").css("color", "blue")
        alert($("#title").text())
    };




}) ();