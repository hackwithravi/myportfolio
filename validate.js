
    function validateForm() {
        var email = document.getElementById("email").value;
        var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        var forbiddenDomains = ["example.com", "test.com"]; // Add your list of temporary email domains here

        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return false;
        }

        var domain = email.split("@")[1];
        if (forbiddenDomains.includes(domain)) {
            alert("Temporary email addresses are not allowed.");
            return false;
        }

        return true;
    }

