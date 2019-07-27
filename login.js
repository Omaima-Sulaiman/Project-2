// sign in
$("#login #signup").click(function(){
    $(".login-page").show();
    $("#login").hide();
})
$(".login-page #log ").click(function(){
    $("#login").show();
    $(".login-page").hide();
})
$(".p").hide();

// this function to compare between the current value enter and  the value already exists
var objpeople =[{ username :"sami",password:"sami"},
,{username :"omaima",password:"omaima"},

{username :"sami",password:"sami"}

        ]
        $("#create").prop("disabled",true);
        $("#buttonLogin").click(function (){
            var username=$("#username").Val();
            var password=$("#password").val() ;
            
            for (let i = 0; i < objpeople.length; i++) {
                if (username ===objpeople[i].username && password===objpeople[i].password){
                    $("#create").prop("disabled",false);
                }else alter("error login")
                
            }
        })








//sign up


$('#sign-username'). focusout(function check (){
    
        var usernameLength=$("#sign-username").val().length;
        if(usernameLength<4||usernameLength>15){
        
        $("#errorUsername").show();
        // $("#create").attr("disabled",true);
        return true;
    }else{ $("#errorUsername").hide();
    
}
});
$('#sign-password'). focusout(function check (){
        var passwordLength=$("#sign-password").val().length;
        if(passwordLength<8){
        $("#errorPassword").show();
        
        return true;
    } else  {
        $("#errorPassword").hide();
       
    
}
});
$('#sign-repassword'). focusout(function check (){
    var password=$("#sign-password").val();
    var repassword=$("#sign-repassword").val();
    if(password !=repassword){
    $("#errorRepassword").show();
    
    return true;
} else  $("#errorRepassword").hide();

 });
//  $("#create").click(function(){
     
     
//      if ( check!==true){
//          $("#create").attr("disabled",true)
//      }else (location).attr("url",myweb.html)
//  })
