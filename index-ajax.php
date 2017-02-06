<!DOCTYPE html>
<html lang="en">

<head>
    <title></title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="css/ajax.css" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="js/ajax.js"></script>
</head>

<body>
<?php
    if(isset($_POST['ime']) && !empty($_POST['ime'])) {
    echo $_POST['ime'];
    }

?>
    <div>
        <button id="js-btn">
          JS ajax
        </button>

        <button id="jquery-btn">
         jquery ajax
        </button>
    </div>


    <form action="index-ajax.php" method="POST" id="form1">
        <input type="text" name="ime" placeholder="ime">
        <input type="text" name="priimek" placeholder="priimek">
        <input type="text" name="msg" placeholder="msg">
        <button type="submit" id="form1">Submit</button>
    </form>

</body>

</html>