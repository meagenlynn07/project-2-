
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

    $("#submitRegister").on("click", handleNewVendorSubmit)

    function handleNewVendorSubmit(event) {
        event.preventDefault();
        var firstName = $("#firstName").val().trim();
        var lastName = $("#lastName").val().trim();
        var vendorType = $("#vendorType").val();
        var vendorName = $("#vendorName").val();
        var description = $("#description").val();
        var email = $("#email").val().trim();
        var state = $("#state").val().trim();
        var city = $("#city").val().trim();
        var zip = $("#zip").val().trim();
        var password = $("#password").val().trim();
        var fullName = firstName + lastName;

        console.log("second one :" + firstName, lastName, fullName, vendorType, vendorName, description, email, state, city, zip, password);

        if (!firstName || !lastName || !vendorType || || !vendorName || !email || !city || !state || !zip || !password)
            return;

        insertVendor({
            firstName: firstName,
            lastName: lastName,
            fullName: fullName,
            vendorType: vendorType,
            vendorName: vendorName,
            description: description,
            email: email,
            State: state,
            password: password,
            City: city,
            zip: zip,
        })
    };





    function insertVendor(VendorData) {
        $.post("/api/newVendor", VendorData).then(function (result) {
            console.log("what is this: ", result.success);
            if (result.success) {

                console.log(result.id);
                console.log("good");
                var fullName = result.fullName;
                //getVendorInfor(fullName);
                // window.location.replace("/vendors/" + fullName);
                var url = `document.location.href+&${fullName}`
                        document.location = url;
                });
            } else {
                console.log("bad");
            }
        });
    };


    function getVendorInfor(fullName) {
        $.get('/api/vendors').then(function (data) {
        });

    }
});
