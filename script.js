$(document).ready(function(){
        $("#submit").click(function(){
            var name= $("#name").val();
            var pass = $("#pass").val();
            if(name == '' || pass == ''){
                $("#Required").html('All Feild Are Required').css('color','red');
            }else if(name == '173-392' && pass == 'R2D2C3'){
                 $("#form").html('<h4>"zero gras"</h4><a href="">Back</a>').css('color','green');
             }else{
                 $("#error").html('User Are Not Valid');
             }
        });
    });
