<?php

if($_SERVER['REQUEST_METHOD'] === 'POST')
{
    $insert_data=$_POST['datas'];
    
}
else
{
    echo 'Not post';
}