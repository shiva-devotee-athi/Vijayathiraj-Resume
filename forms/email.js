(function() {
    emailjs.init("rRrym11SUD9bVSlWP");
    

    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();

        emailjs.sendForm("service_c4yro4r", "template_k3yyhdo", this)
            .then(function(response) {
                console.log("Email sent successfully!", response);
                // alert("SUCCESS",response)
                Toastify({
                    text: "Successfully Sent",
                    duration: 7000,
                    newWindow: true,
                    className: "toast-success-info",
                    close: true,
                    gravity: "top", 
                    position: "right", 
                    stopOnFocus: true,
                  }).showToast();
                  document.getElementById("contact-form").reset();
            }, function(error) {
                console.error("Email could not be sent:", error);
                Toastify({
                    text: "Error Sent",
                    duration: 5000,
                    newWindow: true,
                    className: "toast-error-info",
                    close: true,
                    gravity: "top", 
                    position: "right", 
                    stopOnFocus: true, 
                    style: {
                      background: "linear-gradient(to right, #00b09b, #96c93d)",
                    },
                  }).showToast();
            });
    });
})();


