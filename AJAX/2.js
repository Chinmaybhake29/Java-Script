"use strict";

$(document).ready(function () {
  $("button").click(function () {
    //   alert("Hello, World!");
    $.ajax({
      typeof: "GET",
      url: "https://restcountries.com/v3.1/all",
      success: function (data) {
        //console.log(data);
        //   console.log(data.flags.png, data.name.commen);
        $.each(data, function (i, v) {
          console.log(i, v);
          console.log(v.flags.png, v.name.common);
          $("#row").append(`
               <div class='col-3 text-center'>
                  <img src='${v.flags.png}' class="img-fluid">
                  <h4>${v.name.common}</h4>
               </div> 
                `);
        });
      },
      error: function () {
        var errormsg = console.log("api failed");
      },
    });
  });
});
