# QUIVR: custom surfboard ordering made easy

### Problem Statement:

This application is designed to connect 3 types of users: 
- Customers 
- Surf shops
- Surfboard shapers

The surfing industry is projected to hit $10B in global sales by 2030. Meanwhile the custom surfboard ordering process remains stuck in the past, and rife with problems. Typically a customer places an order through a surfshop, and the surfshop places the order with the shaper. The customer has no visibility into this process once the order is placed, and rarely receives confirmation that the shaper has even received the order! From there it is anyone's guess on when the board will be finished, and in what state the order is in. Often mistakes are made, and the customer ends up receiving something different than what they ordered.

QUIVR steps in by streamlining the ordering process: orders are placed directly through the app, and shapers can send status updates directly to customers. THis removes the burden from the surf shop of having to manage the relationship, as well as greatly reducing the margin for errors to occur in the ordering process.

### Technical Details:
This project was built using MongoDB with FastAPI for the backend, with an Atlas Cloud database. JWT Down was used for backend Auth, and Docker is used for creating a stable environment to deploy the project in. React was used for the front end, along with help from Redux and Axios, as well as styled components.

:no_entry_sign:	Absolutely NO bootsrap or comparable style libraries were used in the creation of this project.

### Team:
* Jessica Dickerson - Backend Auth, Users backend, React frontend, frontend style structure
* Michael Aguilar - Reviews backend, React and Redux frontend, UI and Graphic Design
* Ian Norstad - Orders and Invoices backend, React and Redux frontend, UI and Graphic Design


## Running the Project

1. Fork and clone the repository
2. From terminal cd into the project directory
3. Make sure Docker desktop is running, and run the following commands in your terminal:
- docker volume create quivr-data
- docker-compose build
- docker-compose up

_Disregard a potential error that may pop-up related to 'missing an environment variable.' This does not affect performance_

To view the project, open http://localhost:3000/ in your browser

# App Design




### Backend Auth

### Users Model

### Reviews Model

### Orders Model

### Invoices Model


## Endpoints





