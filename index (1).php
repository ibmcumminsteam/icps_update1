<?php
include 'indexkeys.php';
 
// Create connection
$conn = new mysqli($HostName="localhost", $HostUser="root", $HostPass="archita", $DatabaseName="virtsyspattern");
//$HostPass=<database_password>
 
if ($conn->connect_error) {
 
 die("Connection failed: " . $conn->connect_error);
}
 
$sql = "SELECT pattern_info FROM pattern";
 
$result = $conn->query($sql);
 
if ($result->num_rows >0) {
 
while ($row = mysqli_fetch_assoc($result)) {
    
    $txt= str_replace("\"", "*"  , $row['pattern_info']);
    $txt= str_replace('\'', "\"",$txt);
$txt= str_replace("*", "\\\"",$txt);
$txt=str_replace("False","false",$txt);
$txt=str_replace("True","true",$txt);
    	$output[] = $txt;

   
}
 
} else {
 echo "No Results Found.";
}

$conn->close();

echo implode(',', $output);

?>




