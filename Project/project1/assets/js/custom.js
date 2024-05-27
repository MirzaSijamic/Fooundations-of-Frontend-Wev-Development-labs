$(document).ready(function () {
    $("main#spapp > section").height($(document).height() - 50);
  
    var app = $.spapp({ pageNotFound: "error_404" }); // initialize
    app.route({
      view: "books",
      load: "books.html",
    });
    
    app.route({
      view: "slike",
      load: "slike.html",
    });
  
  
  
    // run app
    app.run();
  });