# Setting Up AWS EC2 Instance and Deploying a Website with NGINX

This guide outlines the steps to set up an AWS EC2 instance and deploy a website using NGINX.

## Step 1: Set Up AWS EC2 Instance

### Create an AWS Account

If you don’t already have an AWS account, [create one](https://aws.amazon.com/).

### Launch an EC2 Instance

1. Go to the AWS Management Console.
2. Navigate to EC2 Dashboard and click on **Launch Instance**.
3. Choose an Amazon Machine Image (AMI):
   - Select **Amazon Linux 2 AMI**.
4. Choose an instance type:
   - For simplicity, select **t2.micro** (free tier eligible).
5. Configure instance details:
   - Keep default settings.
6. Add storage:
   - Keep the default settings.
7. Add tags:
   - Optionally, add tags to identify your instance.
8. Configure security group:
   - Create a new security group.
   - Add a rule to allow HTTP traffic on port 80 from anywhere (`0.0.0.0/0`).
   - Add a rule to allow SSH traffic on port 22 from your IP address.
9. Review and launch the instance.
   - Create a new key pair or use an existing one.
   - Download the key pair and save it securely.

### Add User Data Script

Add this script to your user data file before launching your instance:

```Bash Script
#!/bin/bash
sudo yum update -y
sudo amazon-linux-extras install nginx1 -y
sudo systemctl start nginx
sudo systemctl enable nginx


Create a Repository:
Create a GitHub repository and save your HTML, CSS, and JavaScript files in it (e.g., index.html, styles.css, script.js).

Move Website Files to NGINX Document Root:
sudo mv /home/ec2-user/your-website-files/* /usr/share/nginx/html/


Set Permissions:
sudo chmod -R 755 /usr/share/nginx/html
sudo chown -R nginx:nginx /usr/share/nginx/html

Edit NGINX Configuration File:
sudo vi /etc/nginx/nginx.conf

Add or modify the following server block:

server { listen 80; server_name your-ec2-public-ip;

location / { root /usr/share/nginx/html; index index.html index.html; }

error_page 404 /404.html; location = /404.html { internal; }

error_page 500 502 503 504 /50x.html; location = /50x.html { internal; } }

Restart NGINX to Apply the Changes: 
sudo systemctl restart nginx

Open your browser with your public IP address and add the port number which is specified in the configuration, ie port 80.