// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/");
    }
    res.sendFile(path.join(__dirname, "../public/bloggerhome.html"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });
  
  app.get("/blogs", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/");
    }
    res.sendFile(path.join(__dirname, "../public/blogs.html"));
  });

  app.get("/myprofile", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/");
    }
    res.sendFile(path.join(__dirname, "../public/myprofile.html"));
  });

  app.get("/discover", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/");
    }
    res.sendFile(path.join(__dirname, "../public/discover.html"));
  });

  app.get("/heatmap", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/");
    }
    res.sendFile(path.join(__dirname, "../public/heatmap.html"));
  });
  
  
  app.get("/bulma", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/");
    }
    res.sendFile(path.join(__dirname, "../public/bulma.html"));
  });
 

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  // app.get("/blogs", isAuthenticated, function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/blogs.html"));
  // });

  // app.get("/myprofile", isAuthenticated, function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/myprofile.html"));
  // });

  // app.get("/discover", isAuthenticated, function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/discover.html"));
  // });

  // app.get("/signup", isAuthenticated, function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/signup.html"));
  // });

};
