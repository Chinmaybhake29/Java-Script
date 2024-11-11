"use strict";

$("document").ready(function () {
  $("button").click(function () {
    var a = Math.floor(Math.random() * 10) + 1;
    var b = Math.floor(Math.random() * 10) + 1;

    var sum = a + b;

    $("p").html("Your age is" + sum);
      
    console.log("a =" + a);
      console.log("b =" + b);
      
      
  });
});
