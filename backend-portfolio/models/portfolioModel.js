const mongoogse = require("mongoogse");

// Intro Section Database schema 
const introSchema = new mongoogse.Schema({
    welcomeText: {
        type: String,
        require: true,
    },
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    caption: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
});

// about Section Database schema 
const aboutSchema = new mongoogse.Schema({
    lottieURL: {
        type: String,
        require: true,
    },
    description1: {
        type: String,
        require: true,
    },
    description2: {
        type: String,
        require: true,
    },
    skills: {
        type: Array,
        require: true,
    },
});

// experience section Database Schema
const experienceSchema = new mongoogse.Schema({
    title: {
        type: String,
        require: true,
    },
    period: {
        type: String,
        require: true,
    },
    company: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
});

// projects section Database Schema
const projectsSchema = new mongoogse.Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    link: {
        type: String,
        require: true,
    },
    technolgies: {
        type: Array,
        require: true,
    },
});

// Courses section Database Schema
const coursesSchema = new mongoogse.Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    link: {
        type: String,
        require: true,
    },
});

// contact section Database Schema
const contactSchema = new mongoogse.Schema({
    name: {
        type: String,
        require: true,
    },
    gender: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    mobile: {
        type: String,
        require: true,
    },
    age: {
        type: String,
        require: true,
    },
    address: {
        type: String,
        require: true,
    },
});

module.exports = {
    Intro: mongoogse.module("intro", introSchema),
    About: mongoogse.module("abouts", aboutSchema),
    Experience: mongoogse.module("experience", experienceSchema),
    Projects: mongoogse.module("projects", projectsSchema),
    Courses: mongoogse.module("courses", coursesSchema),
    Contact: mongoogse.module("contacts", contactSchema),
}
