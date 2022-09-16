# ConferenceGO
This is a full-stack web application that assists with conference event-planning. It started out as a monolith and was refactored into multiple microservices with the use of RabbitMQ and pub/sub. The UI allows users to input new locations, input new conference details, input information to attend a conference, and input information to make a presentation proposal. The use can see information about previously inputted conferences on the main page. See "Design" section for screenshots of each part of the UI.

# Technologies Used
## React
## Django
## Docker
## RESTful API's
## Third-party API's (Pexels, Weather)
## RabbitMQ
## Mailhog


# GHI Design


## Home page

This is the home page that users will see when they get to the website. The user can click on any item within the navigation bar or can click the "Attend a Conference" button. Below that, upcoming conferences that have been entered into the database are listed. Each conference card includes the name of the conference, the location of the conference, an image of the city where the conferene is located, a description of the conference, the number of presentations, the number of maximum attendees, the current weather in that location, and the start and end dates. 

![home page](docs/wireframes/homepage.png)
![home page continued](docs/wireframes/homepagecont.png)


## Attend Conference

This is a form that can be completed where the user chooses the conference they would like to attend and inputs their information. The success message appears when a user successfully signs up for a conference.

![attend conference](docs/wireframes/attendconference.png)
![success message](docs/wireframes/successmessage.png)


## Conference Form

This is a form that can be completed by anyone who would like to input new conference information.

![conference form](docs/wireframes/conferenceform.png)


## Presentation Form

This is the form that can be submitted by anyone who would to submit a presentation proposal.

![presentation form](docs/wireframes/presentationform.png)


## Add Location

This is where a user can input a new location if a conference they would like to create is in a location that is not already in the database.

![add location](docs/wireframes/locationform.png)