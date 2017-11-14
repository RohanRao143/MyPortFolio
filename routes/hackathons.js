var express = require("express");

var router = express.Router();

/*************
 **Hackathons**
 **************/

router.get("/",function(req,res){
   res.render("hackathons" ,{title:"Hackathons",about_active:true});
});

module.exports = router;
