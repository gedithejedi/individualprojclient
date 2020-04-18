loginurl = 'http://127.0.0.1:8000/api/account/login';
externallogin = 'https://gedithejedi.pythonanywhere.com/api/account/login';

function gosignup()
{
    location.replace("../pages/signup.html");
}

function login()
{
    email = document.getElementById('email').value;
    password = document.getElementById('upass').value;
    trigger = 0;
    
        setInterval(function() 
        {
            if (trigger == 0)
            {

                $.ajax(
                    {
                        type : "POST",
                        headers: 
                        {
                            "Authorization": localStorage.authtoken,
                        },
                        url : externallogin,
                        dataType: "json",
                        data : 
                        {
                            username: email,
                            password : password,
                        },
        
                        success : function(data, status, xhr)
                        { 
                            localStorage.authtoken = data.token;
                            console.log(localStorage.authtoken);             
                            trigger = 1;
                            location.replace("../index.html");
        
                        },
                        error : function(xhr,status,err) 
                        {
                            document.getElementById("error").innerHTML = "Incorrect Email or Password. Please try again";
                            console.log(xhr.status + ": " + xhr.responseText);
                            trigger = 1;
                        }    
                    });
                    return false;
            }
            
        }, 1000);
}