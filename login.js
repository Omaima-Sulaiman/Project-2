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


// this function to compare between the current value enter and  the value already exists
var objpeople = [{
        username: "sami",
        password: "sami"
    }, {
        username: "omaima",
        password: "omaima"
    }, {
        username: "sami",
        password: "sami"
    }

]

$("#buttonLogin").attr("disabled", true);


$("#buttonLogin").click(function () {

    var username = $("#username").val();
    var password = $("#password").val();
    console.log (objpeople)

    for (let i = 0; i < objpeople.length; i++) {

        if (username === objpeople[i] && password === objpeople[i]) {
            $("#buttonLogin").attr("disabled", false);

        } else
            alert("Error Password or Username")

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
//  var userobj = [];

// function pushNewobject(username, password) {
//   this.username = age;
//   this.password = rel;

// }

// addBtn.addEventListener("click", pushNewobject);

// function pushNewobject() {


//       var  = "ExampleData";
//       var selectedText = "ExampleData";
//       var selectedSmoker = "ExampleData";

//       var currentHouseholdMember = new householdMember(selectedAge, selectedText, selectedSmoker);
//       console.log(currentHouseholdMember);
//       return householdData.push(currentHouseholdMember);

// };

var userobj = {
    "username": username,
    "password": password
}
$("#create").click(function () {
    objpeople.push(userobj)
})