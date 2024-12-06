# Use the Node.js image as a build environment
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code and build the app
COPY . .
RUN npm run build

# Use Nginx to serve the built application
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port
EXPOSE 80

# Start the server
CMD ["nginx", "-g", "daemon off;"]
