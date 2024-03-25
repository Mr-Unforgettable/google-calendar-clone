## React Calendar: Google Calendar Clone
This project is a clone of Google Calendar with simplified functionality. It has been implemented with some third-party frameworks & libraries like (Tailwind, DayJS), and features custom UI components.

![Project-SS](https://github.com/Mr-Unforgettable/google-calendar-react/assets/48011922/8e318adf-0409-461c-a957-b7d57e609eb2)


## Features
* Month View: The calendar displays the current month by default. Users can navigate to other months using intuitive controls.
* Week View: Upon entering the site, users are presented with the week of the current day. They can create events by clicking on the desired time slot.
* Date Selection: Users can easily select specific dates in the smaller calendar.
* Event CRUD: Users can manage their events. [NEW]
* Responsive Design: The calendar is fully adaptive and works seamlessly across different screen sizes.

## Tech Stack
* HTML5
* CSS3
* JavaScript
* TailwindCss
* React (with hooks)
* JavaScript Date API
* DayJS


## Running project locally in a container

You can follow these steps below to run this project in a containerized environment if you have docker.

1. Clone the Repository
```
git clone https://github.com/Mr-Unforgettable/google-calender-react.git
cd google-calender-react
```

2. Buid the Docker Image
```
docker build -t my-react-app .
```

3. Run the Docker Container
```
docker run -d -p 8080:3000 --name my-react-app-container my-react-app
```

4. Access the App
Open a web browser and visit ``http:localhost:3000`` to see your instance running in the docker container.

# Author
<u>Abhinav Pratap Singh</u>
