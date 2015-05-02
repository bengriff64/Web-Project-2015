# Web-Project-2015

### Team Members

- Adam Botley
- Aris Constantinou
- Becca Burrows
- Ben Griffiths
- Kenny Heard
- Asif Mohammed

Programming Team Liason: Elliot Irwin

</br>

## Patient Pathway Application

Use the GitHub Application for handling the Git commands you'll need to do, such as pushing code to the repo and getting the latest files

- Windows: https://windows.github.com/
- OSX: https://mac.github.com/

In the App, click Clone and put in the URL for this Repo. It will create a directory on your computer linked to this repo. DON'T MOVE IT

The Repository uses Bower for Dependency Management<br>Bower Installation Instructions - http://bower.io/#install-bower

### Connecting to the mock database

There is a javascript variable called mockDB which holds all the JSON data we're using.

To access the data, you type mockDB.get('patient'), where the parameter (eg. 'patient') is the type of data you want. You'll get back JSON data which you then need to parse. I've written a small JSON parse method to use.

var patientData = util.parseJSON(mockDB.get('patient'))
