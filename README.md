##Create React Express App
About This Boilerplate
This setup allows for a Node/Express/React to be deployed on Heroku.

The front-end React app will auto-reload as it's updated via a dev server, and the backend Express app will auto-reload independently with nodemon.

#First Step: Starting the app locally
Install the front and backend dependencies. While in each directory, run the following command: 
npm i 
This should install node modules within the server and the client folder.

#Second Step:
After both installations complete, run the following command while in your root folder, in one terminal: nodman server.js 

#Third Step:
While in another terminal, in your client folder run the following command: npm start

#Result:
Your app should now be running on http://localhost:3000. The Express server should intercept any AJAX requests from the client.

#Deployment (Heroku)
To deploy, simply add and commit your changes, and push to Heroku. As is, the NPM scripts should take care of the rest.