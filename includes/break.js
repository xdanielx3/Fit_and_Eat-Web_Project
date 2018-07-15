$(document).ready(function(){
    $.getJSON("data/fast.json",function(data){

        $.each(data.mes, function (){
        $('#msg').append("<tr>" +
            "<th scope='row'>" + this.id + "</th>" + "<&nbsp;>" +
            "<td>" + this.title + "</td>"
            + "</tr>");
        });
    });
});