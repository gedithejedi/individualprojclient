<?php 
//$_FILES["image"]["name"]
/*if(isset(&_POST['submit'])) {
    $file = $_FILES['fileimg'];

    $fileName = $_FILES['fineimg']['name'];
    $fileTmpName = $_FILES['fineimg']['tmp_name'];
    $fileSize = $_FILES['fineimg']['size'];
    $fileError = $_FILES['fineimg']['error'];
    $fileType = $_FILES['fineimg']['type'];

    $fileExt = explode('.', $fileName);
    $fileActualExt = strtolower(end($fileExt));

    $allow = array('jpg', 'jpeg', 'png');

    if(in_array($fileActualExt, $allow)) 
    {
        if($fileError == 0)
        {
            if($fileSize < 1000000)
            {
                $fileNameNew = uniqid('', true).".".$fileActualExt;
                $fileDestination = 'DJANGOLINK'.$fileNameNew;
                move_uploaded_file($fileTmpName, $fileDestination);
                header("Loacation: success");
            }
            else
            {
                echo"File size is too big";
            }
        }
        else
        {
            echo"error uploading file";
        }
    } else 
    {
        echo"you cannot upload files of this type";
    }
}