# Auth Server

### Server Features
* Provides Access Token - Refresh Token interface
* Login via Google OAuth2.0 
* Logout
* Token Authentication 
* Get new Access Token
### Installation Guide
* Run npm install to install all dependencies
* Configure a MongoDB database and a Redis database 
* Create an .env file in your project root folder and add your variables(It may already exist).
 
### Usage
* `Run npm dev` to start the application.

### API Endpoints
| HTTP Verbs | Endpoints | Action | Headers | Body |
| --- | --- | --- | --- | --- |
| POST | [/auth/login](./src/controllers/loginController.js) | To sign up or login | --- | {"credential": "google OAuth Access Token"} |
| POST | [/auth/token](./src/controllers/tokenController.js) | To get new access token | --- | {"refreshToken": "refresh Token"}
| GET | [/auth/authenticateToken](./src/controllers/authenticateController.js) | To authencticate an access Token(debug) | "Authorization": "Access Token" | --- |
| DELETE | [/auth/logout](./src/controllers/logoutController.js) | To logout a user | --- | {"refreshToken": "refresh Token"}
### Technologies Used
* NodeJS
* Express
* MongoDB
* Mongoose
* Redis

#### (!Databases: it is easier to run docker containers for databases instead of local installation.) 
