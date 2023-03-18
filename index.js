function sendMail(){
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    window.location.href = "mailto:navaneethjainsl@gmail.com?subject=" + subject + "&body=" + message;
}