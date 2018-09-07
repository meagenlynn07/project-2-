// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);

})();


$(document).ready(function () {

    $("#submitLogin").on("click", handleLogin);

    function handleLogin(event) {
        event.preventDefault();
        var loginEnail = $("#loginEnail").val().trim();
        var loginPassword = $("#loginPassword").val().trim();

        console.log("login Infor: ", loginEnail, loginPassword);

        if (loginEnail == "" || loginPassword == "") {
            return;
        };

        getLogInfo({
            email: loginEnail,
            password: loginPassword
        });
    }


    function getLogInfo(logInData) {
        $.post('/api/login/', logInData).then(function (result) {
            console.log("what is this reture: ", result);

            if (result.success && result.data !== null) {
                console.log("good");
                //getVendorInfor(fullName);
                window.location.replace("/vendors/" + result.data.fullName);
            } else {
                console.log("bad");
                alert("wrong e-mail address or wrong password");
            }
        })
    }
});