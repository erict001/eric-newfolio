const router = require('express').Router();
const path = require("path");


router.get('/', async (req, res) => {
    res.render("home")
});

router.get('/blog', async (req, res) => {
    res.render("molly")
});

router.get('/jeopardy', (req, res) => {
    res.render("jeopardy")
})

router.get('/appa', (req, res) => {
    res.render('appa')
});

router.get("/about", (req, res) => {
    res.render("about")
});



router.get("/:id", async (req, res) => {
    try {
        const blogData = await Blog.findByPk(req.params.id)
        const blogIndividual = blogData.get({ plain: true })
        res.render("blog", { blogs: blogIndividual })
    } catch (err) {
        res.status(500).json(err)
    }
});


module.exports = router;