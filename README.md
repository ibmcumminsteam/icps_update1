# ICPS_update

To get started with the app development you will need nodejs and expo: 
Follow all the steps from step number 2 given here: https://expo.io/learn 

These are the links to you tube videos explaining the same process
 
https://www.youtube.com/watch?v=yuaE8_nXmeY
https://www.youtube.com/watch?v=WnS7dcY5Hys

Summarised below: 

Download node 
https://nodejs.org/en/download/ 
Download expo 
https://expo.io/learn

npm install expo-cli --global

expo init my-new-project 

cd my-new-project

expo start


Clone/ Download the repository 


go to the location of my-new-project and remove existing files from them, and paste all the files cloned from this repository. 

go to visual studio and then open this my-new-project folder in a new workspace, and in the terminal type the path to go to my-new-project and type expo start which should start the development server. 

if any errors related to npm are found simply use the command 

npm install

this will download all the dependencies mentioned in package.json 

refer to https://docs.expo.io/versions/latest/ for any doubts related to starting the application. 

-- 

Following are the instructions to access the data on 10.X server: 

Steps:
1. Connect to open vpn 

2. Create a database using following commands:
  create database virtsys;
  use virtsys;
  create table pattern(id int, name varchar(50) not null, pattern_info varchar(21884) not null, primary key(id));
3. To run the python script (curl.py):
  On line no. 19 of curl.py, change the password to password of mysql database
  Make sure the open vpn is connected
  Run the python script. This may take several minutes
4. PHP scripts
  Paste the PHP scripts in the C:\xampp\htdocs folder
  In the index.php file change the password of $HostPass to the database password and save it
  In the indexkeys.php file change the password of $HostPass to the database password and save it
  To check if the scripts are running correctly, open the browser and enter http://localhost:8080/
  Now generate the ngrok link for the same port no ie 8080 here, and check it in the browser.( can follow the last two steps     of the 6th point)
5. XAMPP Server
  https://www.apachefriends.org/download.html
  Click on the suitable file for the download and launch the installer
  XAMPP offers a variety of components that you can install, such as MySQL, phpMyAdmin, PHP, Apache, and more. For the most     part, you will be using most of these components, as such it’s recommended to leave the default options.
  Select required components ( MySQL , Apache must) accordingly.
  Use the default installed location, or choose another folder to install the software in the “Select a folder” field.
  After clicking consecutive next Click the Allow access button to allow the app through the firewall (if applicable).
  Then click Finish and select the language.
  Open the XAMPP Control Panel by pinning the executive file to the task bar.
  To configure the XAMPP server ports, in the control panel , click on config on extreme top right. Ports can be changed         either 8080, 8000 or default 80 port. Same is applicable MySQL server.
6. NGROK
  https://ngrok.com/download
  The above link has the instruction and the installer file, however third step is not essential.
  Once the ngrok is downloaded, is should be opened from the location where it was downloaded.
  Command to generate the session link is ngrok http 80 Where 80 is the apache port of XAMPP server on the control Panel and     can also be 8080 or 8000.
  The session link which start with http or https should then be checked in the browser.
  Paste this link in the fetch request wherever needed and then map accordingly to use it. 





