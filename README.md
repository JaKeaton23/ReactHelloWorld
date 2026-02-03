React Hello World — Assignment 1

Full Stack Development

Author: Jayden Keaton
Course: Full Stack Development
Assignment: Hello World (React Fundamentals)

 Project Description

This project is my first React application for the Full Stack Development course.
The purpose of the assignment is to demonstrate:

Basic React project setup

Custom JSX output (beyond the default template)

Proper dependency management

Local development workflow

(Optional) Docker containerization

Clear technical documentation

The application renders a personalized Hello World message identifying the author and assignment.

 Application Output

The application displays:

Author name

Assignment title

Course context

A clean, styled UI using inline React styles

 Project Structure
ReactHelloWorld/
├── Dockerfile
├── README.md
├── package.json
├── package-lock.json
├── public/
│   └── index.html
└── src/
    ├── App.js
    └── index.js

 Dependencies

This project relies on the following core dependencies:

Runtime Dependencies

React – UI library

React DOM – DOM rendering for React

Development Dependencies

react-scripts – Build tooling and development server

Node.js – JavaScript runtime

npm – Package manager

All dependencies are defined in package.json.

 System Requirements

Ensure the following are installed on your machine:

Node.js (v18 or later recommended)
Verify with:

node -v


npm (comes with Node.js)
Verify with:

npm -v


Git (for cloning and version control)

Docker Desktop (optional, for containerized deployment)

Installation Instructions
1. Clone the Repository
git clone https://github.com/JaKeaton23/ReactHelloWorld.git
cd ReactHelloWorld

2. Install Dependencies
npm install


This installs all required packages listed in package.json.

 Running the Application (Local Development)

Start the React development server:

npm start


The application will run at:
http://localhost:3000

Hot reloading is enabled — changes to App.js update automatically.

Running the Application with Docker (Optional)

The Docker setup builds a production-ready React app and serves it using Nginx.

Build the Docker Image
docker build -t react-hello-world .

Run the Docker Container
docker run --rm -p 8080:80 react-hello-world


Open in browser:
http://localhost:8080

 Scripts Overview

Available npm scripts:

Command	Description
npm start	Runs the app in development mode
npm run build	Builds the app for production
npm test	Runs tests (default CRA setup)
