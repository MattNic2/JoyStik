# JoyStik
JoyStik is a cross platform application that connects gamers to new video games with a fun, intuitive UI.

This application is a react-native project that utilizes a videogame api named IGDB. The project was setup using expo and is tested using an android emulator. 

API documentation: https://api-docs.igdb.com/#about

All API requests are routed through a node.js backend server that uses Express to easliy route the requests and potentially scale up. Once the frontend
receives the JSON information from the server, the covers are displayed for users to swipe through.

A user is able to swipe through videogame covers on the main screen, and they will be added to either their "liked" or "disliked" libraries. Likes and dislikes
are stored through async storage on the client side. For further scaling, the server will connect to a database and store information there. 

======================= Directions ===============================

The project is split up between the actual application and the server. The actual application is under the "main" branch, and the server is under the "server" branch.
Open the files from these branches in seperate projects on your IDE of choice.
