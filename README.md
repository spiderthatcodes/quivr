# QUIVR: custom surfboard ordering made easy

### Problem Statement:

This application is designed to connect 3 types of users:
- Customers
- Surf shops
- Surfboard shapers

The surfing industry is projected to hit $10B in global sales by 2030. Meanwhile the custom surfboard ordering process remains stuck in the past, and rife with problems. Typically a customer places an order through a surfshop, and the surfshop places the order with the shaper. The customer has no visibility into this process once the order is placed, and rarely receives confirmation that the shaper has even received the order! From there it is anyone's guess on when the board will be finished, and in what state the order is in. Often mistakes are made, and the customer ends up receiving something different than what they ordered.

QUIVR steps in by streamlining the ordering process: orders are placed directly through the app, and shapers can send status updates directly to customers. This removes the burden from the surf shop of having to mediate the process, as well as greatly reducing the margin for errors to occur in the ordering process.

### User Profiles:
![User_Profile_1](/uploads/79b15a44f94714d26a21361c4c621dfb/User_Profile_1.png)

![User_Profile_2](/uploads/9e88df126f4a751ab31ddcd4dfc19ef8/User_Profile_2.png)

![User_Profile_3](/uploads/3d0c80fceb4133e64e95206da53911d8/User_Profile_3.png)

### Technical Details:
This project was built using MongoDB with FastAPI and pyMongo for the backend, with an Atlas Cloud database. JWT-Down was used for backend Auth, and Docker is used for creating a stable environment to deploy the project in. React was used for the front end, along with help from Redux to carefully manage state, and Axios to fetch the data, as well as styled components for cleanly managing styles.

:no_entry_sign:	Absolutely NO bootstrap or comparable style libraries were used in the creation of this project.

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

## App Design
![Application_Architecture](/uploads/4005e5365eaf00718162d2b959c73112/Application_Architecture.png)

## Endpoints
![Application_Endpoints](/uploads/70296425a95aac25f832cd5bfbea4518/Application_Endpoints.png)

### Backend Auth

### Users Model

### Reviews Model
The Reviews module provides a model for representing reviews. It includes attributes such as:
- id: unique identifier for the review, automatically generated using MongoDB
- date: string
- rating: an integer that allows customers to add a rating to a review
- title: string; title of review
- description: string; add text to a review

The following properties can be updated: "title","rating", and "description".

### Orders Model
The Orders model represents all of the properties required to create a custome surfboard order. These include:
- order_id: unique identifier for the review, automatically generated using MongoDB 
- date: string
- reviewed: boolean; displays the status of whether the order has been reviewed or not
- order_status: string; displays current status of order, as updated by the shaper
- customer_username: string; name used when customer creates account
- surfboard_shaper: string; name selected from options on form
- surfboard_model: string; name of surfboard model
- surfboard_length: int; number signifying length of board
- surfboard_width: int, number signifying width of board
- surfboard_thickness: int; number signifying thickness of board
- surfboard_construction: string; describes the foam construction of the board
- surfboard_fin_system: string; users select their desired modern fin system
- surfboard_fin_count: int; number of fin plugs on board
- surfboard_tail_style: string; users select from list of modern options
- surfboard_glassing: string; users select from list of common options
- surfboard_desc: string | optional; users can add additional details such as color, or other requests

The only properties that can be updated on this model are whether the order has been reviewed or not, and what the status is.
