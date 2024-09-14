function create_email() {
    var email_address = "aaronhan2006@gmail.com";
    var email_href = "mailto:" + email_address + "?" + "subject=" + "&" + "body=";
    wndMail = window.open(email_href, "_blank", "scrollbars=yes,resizable=yes,width=10,height=10");
    
  }
  
const button = document.getElementById("Email");
  
button.addEventListener("click", create_email);

