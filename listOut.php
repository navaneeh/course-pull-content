<?php

Class SessionDownload
{
    public $conn='';
    public $file_storing_path='D:\Navaneeth\Personal\Class';

    function __construct()
    {
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "academy";

        // Create connection
        $this->conn = mysqli_connect($servername, $username, $password, $dbname);
         // Check connection
         if ($this->conn->connect_error) 
         {
             die("Connection failed: " . $conn->connect_error);
         }
    }

    public function getSessionList($where='')
    {
        //module='MODULE - 2'
        if(!empty($where))
        {
            $where=' where '.$where;
        }
        $sql = "SELECT *  FROM sessions $where ";
        return mysqli_query($this->conn, $sql);
    }

    public function showTheList($where)
    {
        $str='<table border=1>';
        $result=$this->getSessionList($where);
        while ($row=mysqli_fetch_assoc($result)) 
        {
            $stream_video_link='https://www.scaler.com'.$row['link'].'?joinSession=1';

            $str.='<tr>';
            $str.='<td>'.$row['date_details'].'</td>';
            $str.='<td>'.$row['class_name'].'</td>';
            $str.='<td><a href='.$stream_video_link.' target="_blank">'.$row['link'].'</a></td>';
            $str.='</tr>';
            
        }
        $str.='</table>';

        echo $str;
    }

    public function getDownloadingSessionList($module='')
    {
        $where="module='MODULE - $module' and is_video_downloaded=0";
        $this->showTheList($where);
    }

    public function refreshDownloadinList()
    {
        echo '<pre>';
        var_export($this->getFileList());
    }

    public function updateSessionsDetails($id)
    {

    }

    public function getUpdateFilesList()
    {
        $list=$this->getFileList();
        
        if($list[0]=='.')unset($list[0]);
        if($list[1]=='..')unset($list[1]);

        $list=array_map(function($a){$temp=explode(".",$a); return $temp[0];},$list);
        
        $list=$this->removeDuplicatedArrayElement($list);
        return $list;
        
    }

    public function removeDuplicatedArrayElement($array)
    {
        $array=array_count_values($array);
        
        $list=array_filter($array,function($v, $k){return $v==1;},ARRAY_FILTER_USE_BOTH);

        return array_keys($list);
    }

    public function getFileList()
    {
        return scandir($this->file_storing_path);
    }

    public function updateFlagForDownloadedFiles()
    {
        $list=$this->getUpdateFilesList();
        foreach($list as $value)
        {
            $where=" link like '$value%' and is_video_downloaded='0'";
            $data=$this->getSessionList();
            $row=mysqli_fetch_assoc($result);
            $row[0]['id'];
        }
        
    }
        
}
           
$seesion_obj=new SessionDownload();
//$seesion_obj->getDownloadingSessionList(5);
$seesion_obj->getUpdateFilesList();