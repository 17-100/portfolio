// Set up Server
const express = require("express");
const app = express();

// Set up Handlebars for routes
const hbs = require("hbs");
// Register Partials - for whatever reason I don't know
hbs.registerPartials("partials_absolute_path")

// Don't know yet what that is
const path = require("path");

// Guess this has something to do with getting the Handlebars to Run
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

hbs.registerPartials(__dirname + "/views/partials");

app.use(express.static(path.join(__dirname, "public")));

//Routes
app.get("/", (req, res, next) => {
    let data = {
        img: "/images/Ö.png",
        title: "Özge's Portfolio",
        name: "Özge",
        lastname: "Sebisteri",
        address: "Berlin, Germany",
        intro: "Born in May 13th, 1989 Nuremberg, Bavaria - Studied media management and producing in Munich, Bavaria - launched a number #1 fitness app for iOS and Android (D-A-CH region) as a Managing Director, gained experience via short term engagements in the communication sector (tech, media, marketing and sales) and is currently living in Berlin, working on his web development skills with MERN - MongoDB, ExpressJS, ReactJS, NodeJS. Is mainly interested in the development of news applications and communication platforms. Loves Hatha Yoga, Sports, and enjoys being Outdoors in Nature. ",
        github: "17-100",
        linkedin: "sebisteri",
        email: "sebisteri@outlook.com",
        video: "https://www.youtube.com/embed/t39ua-gpSOg"
      };
    res.render("home", data);
});
 
app.get("/eyes", (req, res, next) => {
    let data = {
        img: "/images/eyes.png",
        title: "Project: Eyes Exercise",
        intro: "It was time for a fun activity where I had to use some of the skills I’ve learned in manipulating styles. I had fun exploring what is possible when HTML, CSS, and JavaScript come together! I created a web page with two eyes that follow the mouse movement. This activity required me to bring together my skills in JavaScript and CSS to create this dynamic experience. ",
        github: "https://github.com/17-100/Eye-Exercise"
      };
    res.render("eyes", data);
});
 
app.get("/pacman", (req, res, next) => {
    let data = {
        img: "/images/pacman.png",
        title: "Project: Pacman Exercise",
        intro: "Here I simulate multiple PacMen moving across the screen and reversing their direction. This exercise helped me to learn how to control the Document Object Model or DOM, and also helped me grasp how the browser holds information in memory.",
        github: "https://github.com/17-100/PacMan"
      };
    res.render("pacman", data);
});

app.get("/bustracker", (req, res, next) => {
    let data = {
        img: "/images/boston.png",
        title: "Project: Real Time Bus Tracker",
        intro: "Tracking or showing an animation on a map turned out to be pretty useful to convey information to the user. In this case I added a button to the map that triggers a marker to move through a number of bus stops between two institutions. In this case there is a bus that moves between MIT and Harvard.",
        github: "https://github.com/17-100/Real-Time-Bus-Tracker"
      };
    res.render("bustracker", data);
});


app.get("/projects", (req, res, next) => {
    let data = {
        title: "Projects",
        img: "/images/mern.jpeg",
        intro: "Here is a list of projects that helped me to grasp the fundamentals of the MERN Stack. To get a detailed information on each of the projects including github-repository please click on the project names here or in the navigation bar.",
        players: [
            {
              name: "Pacman",
              type: "Exercise",
              photo: "/images/pacman.png",
              github: "https://github.com/17-100/PacMan",
              route: "/pacman"
            },
            {
              name: "Eyes",
              type: "Exercise",
              photo: "/images/eyes.png",
              github: "https://github.com/17-100/Eye-Exercise",
              route: "/eyes"
            },
            {
              name: "Real Time Bus Tracker",
              type: "Project",
              photo: "/images/boston.png",
              github: "https://github.com/17-100/Real-Time-Bus-Tracker",
              route: "/bustracker"
            }
          ],
        
    }

      res.render("players", data);
});

// Listen on Port:3000
app.listen(3000, () => console.log("Why are you runnin'?!"))
