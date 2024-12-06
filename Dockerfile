# Use the Node.js image as a build environment
FROM node:alpine 

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code and build the app
COPY . .
#RUN npm run build

EXPOSE 3000

# Start the server
#CMD ["npm", "start"]
