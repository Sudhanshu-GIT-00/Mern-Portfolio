const router = require('express').Router();
const { Intro, About, Project, Contact, Experience, Course, _id } = require('../models/portfolioModel');

router.get('/get-portfolio-data', async (req, res) => {
    try {
        const intros = await Intro.find();
        const abouts = await About.find();
        const projects = await Project.find();
        const contacts = await Contact.find();
        const experiences = await Experience.find();
        const courses = await Course.find();

        res.status(200).send({
            intros: intros[0],
            abouts: abouts[0],
            projects: projects,
            contact: contacts[0],
            experiences: experiences,
            courses: courses
        })
    }
    catch (error) {
        res.status(500).send(error);
        // console.log(error);
    }
});


// intro section routes
router.post("/update-intro", async (req, res) => {
    try {
        const intro = await Intro.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        // console.log(intro);
        res.status(200).send(
            {
                data: intro,
                success: true,
                message: "intro Update successfully"
            }
        );
    } catch (error) {
        res.status(500).send(error);
    }
})


// about section routes
router.post("/update-about", async (req, res) => {
    try {
        const about = await About.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        // console.log(intro);
        res.status(200).send(
            {
                data: about,
                success: true,
                message: "about Update successfully"
            }
        );
    } catch (error) {
        res.status(500).send(error);
    }
});

// add experience
router.post("/add-experience", async (req, res) => {
    try {
        const experience = new Experience(req.body);
        await experience.save();
        res.status(200).send({
            data: experience,
            success: true,
            message: "Experience added Successfully",
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update experience
router.post("/update-experience", async (req, res) => {
    try {
        const experience = await Experience.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: experience,
            success: true,
            message: "Experience updated Successfully",
        });
    } catch (error) {
        res.status(500).send(error);
    }
});


// delete experience
router.post("/delete-experience", async (req, res) => {
    try {
        const experience = await Experience.findOneAndDelete(
            { _id: req.body._id }
        );
        res.status(200).send({
            data: experience,
            success: true,
            message: "Experience deleted Successfully",
        });
    } catch (error) {
        res.status(500).send(error);
    }
});


module.exports = router;