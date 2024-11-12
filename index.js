import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
        message: "Type in your URL: ",
        name: "URL",
      },
  ])
  .then((answers) => {
    
    const url = answers.URL
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr-imgs.png'));

    
    fs.writeFile("urll.txt",url,(err, data) => {
    if (err) throw err;
    console.log("file have been saved");
  })

  })
  .catch((error) => {
    if (error.isTtyError) {
    } else {
     
    }
  });

