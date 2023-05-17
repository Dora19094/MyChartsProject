# Purchase Credits Server

### Server Features
* Purchase Credits for creating charts

### Installation Guide
* Run npm install to install all dependencies
* Create an .env file in your project root folder and add your variables (It may already exist).
 
### Usage
* `Run npm dev` to start the application.

### API Endpoints
| HTTP Verbs | Endpoints | Action | Headers | URL parameters |
| --- | --- | --- | --- | --- |
| POST | [/credits/purchaseCredits/:numOfCredits'](./src/controllers/purchaseCredits.js) | To purchase {:numOfCredits} credits | "Authorization": "Access Token" | Number of credits |

### Technologies Used
* NodeJS
* Express
* RabbitMQ