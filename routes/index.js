const express = require("express");
const router = express.Router();
const homeLayout = "../views/layouts/home.ejs";
const postLayout = "../views/layouts/post.ejs";
const categoryLayout = "../views/layouts/category.ejs";
const testLayout = "../views/layouts/test.ejs";
const test2Layout = "../views/layouts/test2.ejs";

router.get('/', (req, res) => {
    const locals = {
        title: "Parkseunghan"
    }
    res.render('home', { locals, layout: homeLayout });
});

router.get('/post', (req, res) => {
    const locals = {
        title: "Post"
    }
    res.render('post', { locals, layout: postLayout });
});

router.get('/category', (req, res) => {
    const locals = {
        title: "Category"
    }
    res.render('category', { locals, layout: categoryLayout });
});

router.get('/test', (req, res) => {
    const locals = {
        title: "test"
    }
    res.render('test', { locals, layout: testLayout });
});

router.get('/test2', (req, res) => {
    res.render('test2', { layout: test2Layout });
});
module.exports = router;