$(function() {
  $.get("readmore.html", function(result) {
    // Not the most efficient :(
    var numProjects = 5;

    try{
      var projects = $.find("#projects")[0].children[1].children; //get the box container that has all the projects
    }
    catch(err){
      return
    } 
    
    var i;
    var j = 0;
    for (i = 1; i <= numProjects; i++) {
      // get the destinations
      var project = projects[i]; // get the project in the index page.
      //console.log(project);
      var titleDest = project.children[0];
      var imageDest = project.children[1];
      var overviewDest = project.children[2].children[0];

      // get the indivisual project's info
      var obj = $(result).find("body"); // get the project in the readmore page.
      var projectSrc = $(result).find("#Pathfinding").prevObject[23 + j].children;
      //console.log(projectSrc);
      var titleSrc = projectSrc[0].innerText;
      var image = projectSrc[1];
      var imageSrc = $(image).attr("src");
      var overviewSrc = projectSrc[2].children[0].innerText;

      // Set the info
      $(titleDest).text(titleSrc);
      $(overviewDest).text(overviewSrc);
      $(imageDest).attr("src", imageSrc);
    
      
      j += 2;
    }
  });
});
