#!/bin/bash

# Bash script to run npm install and nodemon index for multiple microservices in separate windows,
# and run npm install and npm run start for the frontend in a separate window

# Set the base path for microservices and frontend
microservicesPath="./microservices"
frontendPath="./frontend"

# Function to run npm install and nodemon index for a microservice in a new Terminal window
function runMicroserviceInNewWindow {
    microservicePath="$1"
    osascript -e "tell application \"Terminal\" to do script \"cd '$microservicePath'; npm install lodash;npm install; nodemon index\""
}

# Open a new Terminal window and run npm install and npm run start for the frontend
function runFrontendInNewWindow {
    frontendPath="$1"
    osascript -e "tell application \"Terminal\" to do script \"cd '$frontendPath'; npm install; npm run start\""
}

# Iterate over each microservice folder
for folder in "$microservicesPath"/*; do
    if [[ -d "$folder" ]]; then
        microservicePath="$folder"
        runMicroserviceInNewWindow "$microservicePath"
    fi
done

# Open a new Terminal window and run npm install and npm run start for the frontend
runFrontendInNewWindow "$frontendPath"
