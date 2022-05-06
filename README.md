# BACS495-FINAL
Once the code has been cloned, type the following terminal command in the directory where the code lives.

$ npm install

install the following dependancies:

cookie-parser: 1.4.4,
cors: 2.8.5,
debug: 2.6.9,
express: 4.16.1,
morgan: 1.9.1,
mongodb: 4.5.0
Front End In order to run the front end, go into the 'front' directory and do $ npm start in the terminal The web page should load in a few seconds

Back End In order to run the back end, go into the 'myApi' directory and do $ npm start in the terminal The api should have loaded in port 3000. Visit http://localhost:3000/ in order to see the back end

In order to change the port number, go into the myApi/bin>www directory. The port number is set in line 16. Change the port number string to match the port. The MongoDB cluster was set in the same location but on line 18. Change the string to match the cluster.