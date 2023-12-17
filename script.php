<?php

    if($_SERVER['REQUEST_METHOD'] === 'POST')
    {
            $insert_data=$_POST['datas'];
        // echo json_encode($insert_data);
            //exit();

            $servername = "localhost";
            $username = "root";
            $password = "";
            $dbname = "academy";

            // Create connection
            $conn = mysqli_connect($servername, $username, $password, $dbname);
            // Check connection
            if ($conn->connect_error) 
            {
                die("Connection failed: " . $conn->connect_error);
            }

            foreach($insert_data as $values)
            {
                $sql = "SELECT id  FROM sessions where link='".$values['link']."'";
                $result = mysqli_query($conn, $sql);

                if (mysqli_num_rows($result) > 0) 
                {
                    continue;
                }


                $sql ="INSERT INTO sessions (".implode(",",array_keys($values)).") Values ('". implode("','",array_values($values))."')";
                
                if(mysqli_query($conn, $sql)) 
                {
                    //echo "New record created successfully";
                }
                else 
                {
                    echo "Error: " . $sql . "<br>" . $conn->error;
                }

            }
        //Error: INSERT INTO sessions (date_details,class_name,link,optional_class,is_contest,module,module_name) Values ('Day 136, 19 Apr','LLD: SOLID-2: Liskov's, Interface Segregation, Dependency Inversion','/academy/mentee-dashboard/class/66508','false','false','MODULE - 10','LLD: Object Oriented Design and Analysis')<br>You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near 's, Interface Segregation, Dependency Inversion','/academy/mentee-dashboard/cl...' at line 1"data inserted successfully"
        echo json_encode('data inserted successfully');
    }
    else
    {
        echo 'Not post';
    }