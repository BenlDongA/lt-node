import express from "express";
const rootRouter = express.Router()
let workExperience = [
    {
      name: "Front End Developer",
      start_date: "Jan 2015",
      end_date: "Jan 2015",
      description:
        "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.",
    },
    {
      name: "Web Developer / something.com",
      start_date: "Mar 2012",
      end_date: "Dec 2014",
      description:
        "Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste..",
    },
    {
      name: "Graphic Designer / designsomething.com",
      start_date: "Mar 2012",
      end_date: "Dec 2017",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    
  ];
  let education = [
    {
      name: "W3Schools.comr",
      start_date: "Forever",
      end_date: "",
      description:
        "Web Development! All I need to know in one place.",
    },
    {
      name: "London Business Schools",
      start_date: "2012 -",
      end_date: "2014",
      description:
        "Master Degree",
    },
    {
      name: "School of Coding",
      start_date: "2013 -",
      end_date: "Dec 2017",
      description:
        "Bachelor Degree",
    },
    
  ];
  
  // function buildItem({ name, start_date, end_date, description }) {
  //   return `<div class="w3-container">
  //           <h5 class="w3-opacity"><b>${name}</b></h5>
  //           <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>${start_date} - <span class="w3-tag w3-teal w3-round">${end_date}</span></h6>
  //           <p>${description}</p>
  //           <hr>
  //         </div>`;
  // }
  // function buildItemsEdu({ name, start_date, end_date, description }) {
  //   return `<div class="w3-container">
  //           <h5 class="w3-opacity"><b>${name}</b></h5>
  //           <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>${start_date} <span class="w3-tag w3-teal w3-round">${end_date}</span></h6>
  //           <p>${description}</p>
  //           <hr>
  //         </div>`;
  // }
  
  


  rootRouter.get("/about", (req, res) => {
    res.send(`<h1> Hello About Page!!</h1>`);
  });
  
  rootRouter.get("/", (req, res) => {
    res.render("index", { title: "Home Page", workExperience, education });
  });
  
  export default rootRouter;