# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app for production
RUN npm run build

# Expose the port the app will run on
EXPOSE 8080

# Start the app
CMD ["npm", "run", "serve"]
