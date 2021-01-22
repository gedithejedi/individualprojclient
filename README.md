# Client side for my 3rd Year Individual Project

## Description
This is a Progressive Web Application connecting into a Django server backend through the use of AJAX requests.
Once logged in the user has the option to takes a pictue and upload it to my Django server using using the upload button. 
The server uses a TensorFlow machine learning model to evaluate what the object is and sends the user a response.
This response contains the the name of the object and a link where to buy the product (Amazon). 

For now this only works with a HP omen Laptop and Logitec mouse as these were the items I tested the app with.
This works well both on desktop and mobile as this meets Google Progressive Web App standarts (PWA).

## What Does it Do?
1. Register and Log In system that sends all the data to Django server and gets validated there.
2. Sends the user image to a Django server to later identify the product in the image. (Only works for hp latop and a logitec mouse)

## Images
This is an image of the log-in page of the project:

![An image of the log-in page](/Images/login.png)

This is an image of the sign-up page:

![An image of the sign-up page](/Images/signup.png)

This is an image of the user feedback and form valiation:

![An image of the user feedback and form validation](/Images/wrongdetails.png)

This is an image of the index page:

![An image of the index page](/Images/index.png)

This is when the user uploads an image they get a preview before sending it:

![preview of image](/Images/preview.png)

Image after it is analysed (Logitec mouse):

![logitec mouse image upload results](/Images/detected.png)

Image after it is analysed (HP Omen Laptop):

![logitec mouse laptop upload results](/Images/detected2.png)

## Deployment : https://individual-project-dit.web.app/pages/login.html
(Deployment not functioning properly with requests as the server side is shut down)
