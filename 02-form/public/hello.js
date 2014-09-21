// http://api.jquery.com/jQuery.ajax/
// http://api.jquery.com/jquery.ajax/
// http://api.jquery.com/jquery.get/


$(document).ready(function(){

    $( "#formname" ).submit(function( event ) {

        console.log("submit");
        /* Stop form from submitting normally */
        event.preventDefault();
        /* Clear result div*/
        $("#contentDiv").html('...');


        var formData = $(this).serializeArray();

        $.ajax({
           // type: "GET",
           type: "POST",
           url: "/user",
           //dataType: "json",
           dataType: "html",
           data: formData,

           success: function(data){
              console.log(data);
              $( "#contentDiv" ).html(data);

           },
           error: function(XMLHttpRequest, textStatus, errorThrown) {
              //alert("Status: " + textStatus); alert("Error: " + errorThrown);
              console.log(XMLHttpRequest.responseText);
              $( "#contentDiv" ).html(XMLHttpRequest.responseText);
           }

        });

    });

});
