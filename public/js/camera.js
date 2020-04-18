djangourl = 'http://127.0.0.1:8000/getimg/';
externalhost = 'https://gedithejedi.pythonanywhere.com/getimg/';

const prevFile = document.getElementById("image-upload");
const prevContainer = document.getElementById("imagePreview");
const prevImage = prevContainer.querySelector(".image-preview_image");
const previewtext = prevContainer.querySelector(".image-preview_text");
document.getElementById('product').style.display = 'none';
document.getElementById('link').style.display = 'none';

prevFile.addEventListener("change", function(){
    const imfile = this.files[0];
    
    if(imfile)
    {
        const reader = new FileReader();

        previewtext.style.display = "none";
        prevImage.style.display = "block";

        reader.addEventListener("load", function()
        {
           prevImage.setAttribute("src", this.result);
        });
        reader.readAsDataURL(imfile);
    }
});


function uploadIMG() 
{
    trigger = 0;
    var file = $('#image-upload')[0].files[0];

    if(file)
    {
        if(trigger == 0)
        {
            formdata = new FormData();	
            formdata.append('img', file);
            $.ajax({
                url : djangourl,
                type: "POST",
                dataType: "json",
                data: formdata,
                headers: 
                {
                    "Authorization": localStorage.authtoken,
                },
                cache: false,
                contentType: false,
                processType: false,
                processData: false,
                
                success:function(data, status, xhr)//data succes signature
                {
                    console.log("data sent and response gotten");
                    console.log(data);
                    //if(data.post)
                    //{
                        document.getElementById('error').innerHTML = data.post; 
                        document.getElementById('product').style.display = 'block';
                        document.getElementById("product").innerHTML = data.object;
                        document.getElementById('link').style.display = 'block';
                        document.getElementById("link").innerHTML = "<a class ="+"link"+" href='https://www.amazon.co.uk/s?k="+data.object+"&ref=nb_sb_noss_1'>Click Here for Amazon Link</a>";
                   // }
                   // else
                    // {
                    //     document.getElementById('error').innerHTML = data.Object;
                    // }
                    // trigger = 1;
                }
                ,
                error : function(xhr,errmsg,err) 
                {
                    alert(xhr.status + ": " + xhr.responseText);
                    document.getElementById('error').innerHTML = data;
                }
            });
        }
    }
    else
    {
        document.getElementById('error').innerHTML = "Please upload an image";
    } 						
};

function logout()
{
    localStorage.authtoken = "undefined";
    location.replace("pages/login.html");
}
