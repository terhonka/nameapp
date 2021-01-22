# nameapp

Start the "JSON Server" with "npm run server" (runs in http://localhost:3001/)
and start the client with "npm start" (runs in http://localhost:3000/)

This is a simple react web application that implements the four requirements in
the academy exercise description.

The UI is very simple and just do demonstrate the functionality: By pressing the 
labeled buttons the application views the required functionalities - in case of
a user given name there opens a text box to input the name.

The "server" is just an emulated "JSON server" since the function is only to provide
the name data in JSON format.

For simplicity the application is implemented completely in the file index.js
instead of introducing very small components in separate folders. The code does
not contain any comments either since the functionality is simple.
