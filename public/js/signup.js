signup = 'http://127.0.0.1:8000/api/account/register';
exteralsignup = 'https://gedithejedi.pythonanywhere.com/api/account/register';
executed = false;

function gosignin()
{
    location.replace("login.html");
}

function hello()
{
    emailchk = /^\S+@\S+\.\S+$/;
    username = document.getElementById('uname').value;
    password = document.getElementById('upass').value;
    email = document.getElementById('email').value;
    trigger = 0;
    passwordrep = document.getElementById('upassrep').value;
    
    if(!username)
    {
        document.getElementById('error').innerHTML = "Please enter into username field";
        trigger = 1;
    }
    else if(!email)
    {
        document.getElementById('error').innerHTML = "Please enter into email field";
        trigger = 1;
    }
    else if(emailchk.test(email) == false)
    {
        document.getElementById('error').innerHTML = "Please enter a valid email into email field";
        trigger = 1;
    }
    else if(!password)
    {
        document.getElementById('error').innerHTML = "Please enter into password field";
        trigger = 1;
    }
    else if(!passwordrep)
    {
        document.getElementById('error').innerHTML = "Please enter into passowrd confirmation field";
        trigger = 1;
    }
    else if (password !== passwordrep)
    {
        document.getElementById('error').innerHTML = "Passwords do not match please input them again";
        trigger = 1;
    }
    else
    {
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
                        url : exteralsignup,
                        dataType: "json",
                        data : 
                        {
                            email: email,
                            username : username,
                            password : password,
                            passwordrep : passwordrep,
                            server_response: 'sending',
                        },

                        success : function(data, status, xhr) //may return something other than json
                        { 
                            console.log("data sent and response gotten");
                            console.log(data);

                            console.log(data.post);

                            if(data.post)
                            {
                                document.getElementById('error').innerHTML = data.data;
                                //localStorage.authtoken = data.token;
                                localStorage.username = data.username;
                                console.log(localStorage.authtoken);
                                location.replace("login.html");
                            }
                            else
                            {
                                if(data.email)
                                {
                                    document.getElementById('error').innerHTML = data.email;
                                    console.log(data.email);
                                }
                                else if (data.username)
                                {
                                    document.getElementById('error').innerHTML = data.username;
                                    console.log(data.username);
                                }
                    
                            }
                            trigger = 1;
                            
                        },
                        error : function(xhr,status,err) 
                        {
                            alert(xhr.status + ": " + xhr.responseText);
                            document.getElementById('error').innerHTML = data;
                        }    
                    });
            }
        }, 1000);
    }
 }
    