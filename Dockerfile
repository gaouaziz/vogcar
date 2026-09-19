# Use an official Node LTS (Long Term Support) version as the base image
FROM node:22-alpine

# Install project dependencies
RUN npm install -g @vue/cli

# Expose the port your app runs on
EXPOSE 8000
EXPOSE 3000

# Set the working directory in the container
WORKDIR /usr/src/app

# Define the command to run your app
CMD ["vue", "--version"]
