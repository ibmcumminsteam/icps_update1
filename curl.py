import requests
import urllib3
import mysql.connector
urllib3.disable_warnings()


headers = {
    'X-IBM-PureSystem-API-Version': '3.0',
    'X-IBM-Workload-Deployer-API-Version': '5.0.0.0',
    'Content-Type': 'application/json',
}

response = requests.get('https://10.76.125.214/resources/virtualSystemPatterns', headers=headers, verify=False, auth=('swanand', 'L0ngl1vecps'))
r = response.json()

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  passwd="archita",#password of the mysql database
  database="virtsyspattern"
)
mycursor = mydb.cursor()

def delete_all():
    mycursor.execute("select count(*) from pattern")
    if list(mycursor) != 0:
        delete()

def delete():
    mycursor.execute("DELETE FROM pattern")

def insert_into_table():
    for count,ri in enumerate(r,1):
        if count==1 :
            ri= "["+ str(ri)
        elif count == len(r):
            ri = str(ri)+"]"
        else:
            ri = str(ri)
        sql = "INSERT INTO pattern (id, name, pattern_info) VALUES (%s, %s, %s)"
        val = (count, "swanand", ri)
        mycursor.execute(sql, val)
    mydb.commit()

def print_table():
    mycursor.execute("SELECT * FROM pattern")
    myresult = mycursor.fetchall()
    for x in myresult:
        print(x)

delete_all()
insert_into_table()
print_table()

'''
Commands:
1. create database virtsys;
2. use virtsys;
3. create table pattern(id int, name varchar(50) not null, pattern_info varchar(21884) not null, primary key(id));
'''
