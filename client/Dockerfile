# Stage 1: Build the application
FROM node:18.15.0 AS builder

WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json .

# Install the client dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build your Vite + React app
RUN npm run build

# Stage 2: Use Nginx for production
FROM nginx:latest

# Copy the built files from the builder stage
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

# Expose the port Nginx will listen on
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
