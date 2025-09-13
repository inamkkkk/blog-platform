# Blog Platform API

A simple blog API built with Node.js, Express, and MongoDB.

## Features

- Create, read, update, and delete blog posts.
- User authentication with JWT.

## Requirements

- Node.js
- MongoDB

## Installation

1.  Clone the repository:

    
    git clone <repository_url>
    

2.  Install dependencies:

    
    npm install
    

3.  Configure environment variables:

    -   Create a `.env` file in the root directory.
    -   Add the following variables:

        
        PORT=3000
        MONGODB_URI=mongodb://localhost:27017/blog
        JWT_SECRET=your_secret_key
        

4.  Run the application:

    
    npm start
    

## API Endpoints

### Posts

-   `POST /api/posts`: Create a new post (requires authentication).
-   `GET /api/posts`: Get all posts.
-   `GET /api/posts/:id`: Get a specific post by ID.
-   `PUT /api/posts/:id`: Update a post (requires authentication).
-   `DELETE /api/posts/:id`: Delete a post (requires authentication).

### Users

-   `POST /api/users/register`: Register a new user.
-   `POST /api/users/login`: Login and get a JWT token.
