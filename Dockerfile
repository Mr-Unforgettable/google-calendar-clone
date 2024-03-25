# Using an official Node.js runtime as base image
FROM node:20.11

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Exposing default React port
EXPOSE 3000

# Specifying the commands to run when the container starts
CMD [ "npm", "start" ]