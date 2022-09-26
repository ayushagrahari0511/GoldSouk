# Base on official NGINX Alpine image
# FROM nginx:alpine

FROM ubuntu:18.04
RUN apt update -y \
    && apt install nginx curl vim -y \
    && apt-get install software-properties-common -y \
    && add-apt-repository ppa:certbot/certbot -y \
    && apt-get update -y \
    && apt-get install python-certbot-nginx -y \
    && apt-get clean

#Remove any existing config files
# RUN rm /etc/nginx/conf.d/*

#Copy config files
COPY ./default.conf /etc/nginx/conf.d/

#Expose the listenign port
EXPOSE 80

# Launch NGINX
CMD [ "nginx", "-g", "daemon off;" ]