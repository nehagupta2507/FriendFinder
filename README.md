# FriendFinder
A dating app.  <br />
#Description 
1. Friend Finder implements friend matching based on the user's responses to a ten-question survey. The user responds to questions with values from 1 (Strongly Disagree) to 5 (Strongly Agree). 
2. When the survey is submitted, the existing user record closest to the current user's responses is found and returned. The closest set of user responses is defined as the set with the lowest absolute difference for all ten questions combined.
3. Technologies Used
    Node.js
    express NPM Package https://www.npmjs.com/package/express
    path NPM Package https://www.npmjs.com/package/path

###This app has following directories:- <br />
├── LICENSE <br />
├── README.md <br />
├── app <br />
│   ├── data <br />
│   │   └── friend.js <br />
│   ├── public <br />
│   │   ├── home.html <br />
│   │   └── survey.html <br />
│   └── routing <br />
│       ├── apiRoutes.js <br />
│       └── htmlRoutes.js <br />
├── node_modules<br />
      `````<br />
├── package-lock.json<br />
├── package.json<br />
└── server.js<br />

