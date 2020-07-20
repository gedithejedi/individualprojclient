# Client side for my 3rd Year Individual Project

## Description
This is a Progressive Web Application connecting into a django server backend through the use of AJAX requests.
Essencially what it does is a user selects or takes an image of either HP Omen 2016 laptop or Logitec M235 mouse, uploads it and the machine learning model decides which of the two the product is and sends user a response with a place where to buy the product (Amazon).
This works well both on desktop and mobile.

## What Does it Do?
1. Register and Log In system that sends all the data to Django server and gets validated there.
2. Sends image to a Django server to later identify the product in the image. (Only works for latop and a computer mouse)

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
