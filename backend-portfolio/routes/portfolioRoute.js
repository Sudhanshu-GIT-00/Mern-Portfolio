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

module.exports = router;