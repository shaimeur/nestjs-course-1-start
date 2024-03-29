
## NestJs In Practice Course

This repository contains the code of the [NestJs In Practice Course](https://angular-university.io/course/nestjs-course).

![NestJs Course](https://angular-university.s3-us-west-1.amazonaws.com/course-images/nestjs-v2.png)


# Installation pre-requisites

For taking the course we recommend installing Node 16.

To easily switch between node versions on your machine, we recommend using a node virtual environment tool such as [nave](https://www.npmjs.com/package/nave) or [nvm-windows](https://github.com/coreybutler/nvm-windows), depending on your operating system.

For example, here is how you switch to a new node version using nave:

    # note that you don't even need to update your node version before installing nave
    npm install -g nave

    nave use 16.13.0
    node -v
    v16.13.0
# Installing the Angular CLI

With the following command the angular-cli will be installed globally in your machine:

    npm install -g @angular/cli


# How To install this repository

We can install the master branch using the following commands:

    git clone https://github.com/angular-university/nestjs-course.git

This repository is made of several separate npm modules, that are installable separately. For example, to run the au-input module, we can do the following:

    cd nestjs-course
    npm install

This should take a couple of minutes. If there are issues, please post the complete error message in the Questions section of the course.

# To Run the Development Backend Server

We can start the sample application backend with the following command:

    cd rest-api
    npm install
    npm run server

This launches a small Node REST API server, built using NestJs. Notice that this has a separate package.json, so you really need to run a second npm install from inside the rest-api directory.

# To run the Development UI Server

To run the frontend part of our code, we will use the Angular CLI:

    npm start

The application is visible at port 4200: [http://localhost:4200](http://localhost:4200)



