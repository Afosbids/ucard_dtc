#Multi-Step Docker Builds
FROM node:alpine as builder

# set the working directory for container
WORKDIR /frontend

# copy the json file into the conatiner file system first
COPY ./package.json /frontend

# install npm dependencies
RUN npm install

# copy other project files
COPY . .

# build the folder
RUN npm run build

# Handle Nginx 
FROM nginx
COPY --from=builder /frontend/build /usr/share/nginx/html