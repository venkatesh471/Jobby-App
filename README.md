# Jobby Application

## Overview
Jobby Application is built for the use for the User to Search the Requried Job based on his/her Interest and Technologies Learned By the User. It is Clone to the Job Search Applications like **Naukri**

## Features

- User can Login and can see the list of jobs with Search by Job Title, filters based on Salary Ranges and Employment Types.
- User can also Know about the Job Description, Skills Required For Specific Job, Life at Company and also Similar Jobs.
- User can Navitage to the Specific Company.

## Implementation of Project
- Implemented different pages like Login, Home, Jobs, Job item details using React components, props, state, lists, event handlers, form inputs.
- Authenticating by taking username, password and doing login post HTTP API Call.
-  Persisted user login state by keeping jwt token in client storage, Sending it in headers of further API calls to authorize the user.
- Implemented different routes for Login, Home, Jobs, Job item details pages by using React Router components Route, Switch, Link.
- Implemented filters and search text by sending them as query parameters to jobs API calls.
- Redirecting to the login page if the user tries to open Home, Jobs, Job item details routes which need authentication by implementing protected Route.

## Technologies Used
- React JS, JavaScript, CSS, Bootstrap, Routing, REST API Calls, Local Storage, JWT Token, Authorization and Authentication.
