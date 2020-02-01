<h1 align="center">FriendFinder</h1>
<h3 align="center">🌀By NehaGupta</h3>
- Friend Finder implements friend matching based on the user's responses to a ten-question survey. The user responds to questions with values from 1 (Strongly Disagree) to 5 (Strongly Agree). 
- When the survey is submitted, the existing user record closest to the current user's responses is found and returned. The closest set of user responses is defined as the set with the lowest absolute difference for all ten questions combined.
- The application is implemented using a Node.js and Express server on the back end and Bootstrap/CSS framework on the front end.

## [Deployed Heroku Link](https://protected-waters-26613.herokuapp.com/)

## App
<p align="center">
    <img src="/app/public/images/ff.gif" alt="Mobile Version" width="350px">
</p>

## Installation
To install the application follow the instructions below:
- git clone https://github.com/nehagupta2507/FriendFinder.git
- cd FriendFinder
- npm install
  
## Running Locally
- npm start
To run the application locally and access it in your browser, first set the PORT environment variable to the value of your choice. An example is shown below.
- export PORT=3030
After the PORT environment variable has been set, run the Node.js application with the command below.
- node server.js
The application will now be running locally on PORT, in this case that is port 3030. You can then access it locally from your browser at the URL localhost:PORT, in this case localhost:3030.

## Buit With
- Node.js
- body-parager NPM Package - https://www.npmjs.com/package/inquirer
- express NPM Package - https://www.npmjs.com/package/express
- path NPM Package - https://www.npmjs.com/package/path

## Technical Details
* The application uses Express to handle routing 
 * The server.js file uses the npm packages: express, body-parser, path.
  * The htmlRoutes.js file should include two routes:
 	* A GET Route to `/survey` which displays the survey page.
 	* A USE route that leads to `home.html` which displays the home page.       

  * The `apiRoutes.js` file includes two routes:
 	* A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends
 	* A POST route `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 

  * Compatibility will be determined based on the following.
    * Each user's results is converted into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
    * Then will compare the difference between the user's scores against other users' scores, question by question. Then will add up the differences to calculate the `totalDifference`.
    * Example: 
     	*  User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
 		*  User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
 		*  Total Difference: 2 + 1 + 2 = 5

    * The person with the closest match will be the one with the "least" amount of difference.
    * Once the closest match has been determined, it will display the result back to the user. 
    * The result will display both the name and picture of the closest match. 

# License
This project is licensed under the MIT License - see the LICENSE.md file for details.

# Acknowledgments
- Many thanks to [randomuser](https://randomuser.me/photos) for the photos.


# Show your support
Give a ⭐️ if this project helped you!

