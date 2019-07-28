// sign in
$("#login #signup").click(function () {
    $(".login-page").show();
    $("#login").hide();
})
$(".login-page #log ").click(function () {
    $("#login").show();
    $(".login-page").hide();
})
$(".p").hide();

var objpeople = [{
        username: "sami",
        password: "sami"
    }, {
        username: "omaima",
        password: "omaima"
    },
    {
        username: "o",
        password: "o"
    },
    {
        username: "sami",
        password: "sami"
    }
]


// $("#buttonLogin").click(function (){
//     window.open('myweb.html')})

// $("#buttonLogin").attr("disabled", true);
console.log("you are not logged in")
console.log($("#buttonLogin"))
$("#buttonLogin").on('click', function () {
    var username = $("#username").val();
    var password = $("#password").val();
    for (let i = 0; i < objpeople.length; i++) {
        if (username === objpeople[i].username && password === objpeople[i].password) {
            console.log("you are logged in")
            $("#buttonLogin").attr("disabled", true);

            window.open('myweb.html')
        } else {
            console.log("you are not logged in")
            $("#buttonLogin").attr("disabled", false);

        }

    }
})


//sign up


$('#sign-username').focusout(function checkUsername() {

    var usernameLength = $("#sign-username").val().length;
    if (usernameLength < 4 || usernameLength > 15) {

        $("#errorUsername").show();

        errorUsername = true;

    } else $("#errorUsername").hide();



});
$('#sign-password').focusout(function checkPassword() {

    var passwordLength = $("#sign-password").val().length;
    if (passwordLength < 8) {

        errorPassword = true;
        $("#errorPassword").show();
    } else $("#errorPassword").hide();


});
$('#sign-repassword').focusout(function checkRepassword() {

    var password = $("#sign-password").val();
    var repassword = $("#sign-repassword").val();
    if (password != repassword) {

        errorPassword = true;
        $("#errorRepassword").show();
        $("#sign-password").pop("disabled", false)

    } else $("#errorRepassword").hide();



});
var userobj = {
    username: username,
    password: password
}


$("#create").click(function (username, password) {
    userobj[username] = username;
    userobj[password] = password;

    objpeople.push(userobj)
    window.open('myweb.html')
})