<?php

    $id = uniqid();

    $time = time();
    $author = 'Filip';

    echo '{
        "time" : "'.$time.'",
        "id" : "'.$id.'",
        "author" : "'.$author.'"

    }';

?>
