Campus Navigator
Campus Navigator is a MERN (MongoDB, Express.js, React, Node.js) stack-based web application designed to help students find the best colleges based on their rank. The application retrieves colleges from a database and displays them in an easy-to-navigate table, sorted by their cutoff ranks. The tool simplifies the college selection process, saving students time and effort.

Features
Rank-Based Search: Enter your rank, and the application displays colleges with cutoff values greater than or equal to your rank.
Sorted Results: The colleges are displayed in ascending order of their cutoff values.
Comprehensive Information: Each college's name, location, NIRF rank, cutoff rank, and placement details are provided.
Dynamic User Interface: A responsive and clean front-end built using React.


Tech Stack:-
Frontend:-
React.js: For building a dynamic and responsive user interface.

Backend:-
Node.js: For server-side logic.

Express.js: For API creation and routing.

Database:-
MongoDB: For storing college information in a structured and queryable format.



Additional Libraries
Axios: For making HTTP requests from the front-end to the back-end.
Mongoose: For schema-based modeling and MongoDB interaction.
Installation and Setup


Prerequisites:-
Ensure you have the following installed:

Node.js
MongoDB (local or Atlas for hosted DB)
Git


Steps to Run the Project Locally
Clone the repository:

git clone https://github.com/yashtalur09/campus-navigator.git
cd campus-navigator

Backend Setup:

Navigate to the server directory:
cd server

Install dependencies:
npm install

Start the server:
npm start
The server will run on http://localhost:5000.

Frontend Setup:

Navigate to the client directory:
cd client

Install dependencies:
npm install

Start the front-end application:
npm start
The application will run on http://localhost:3000.