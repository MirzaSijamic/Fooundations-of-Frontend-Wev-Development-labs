(function ($) {
  $.spapp = function (options) {
    // set config and routes
    var config,
      routes = {},
      currentView;

    config = $.extend(
      {
        defaultView: $("main#spapp > section:last-child").attr("id"),
        templateDir: "./tpl/",
        pageNotFound: false,
      },
      options
    );

    $("main#spapp > section").each(function (k, e) {
      var elm = $(this);
      routes[elm.attr("id")] = {
        view: elm.attr("id"),
        load: elm.data("load"),
        onCreate: function () {},
        onReady: function () {},
        onUnload: function () {} // Add an onUnload function
      };
    });

    // update routes programmatically
    this.route = function (options) {
      $.extend(routes[options.view], options);
    };

    // manage hash change
    var routeChange = function () {
      var id = location.hash.slice(1);
      var route = routes[id];
      var elm = $("#" + id);

      if (!elm || !route) {
        if (config.pageNotFound) {
          window.location.hash = config.pageNotFound;
          return;
        }
        console.log(id + " not defined");
        return;
      }
      console.log(currentView);
      // Unload the current view if it exists and is different from the new view
      if (currentView && currentView !== id) {
        var oldRoute = routes[currentView];
        var oldElm = $("#" + currentView);
        oldElm.removeClass("spapp-created").hide(); // Hide the old element
        oldRoute.onUnload();
      }

      if (elm.hasClass("spapp-created")) {
        elm.show(); // Show the new element
        route.onReady();
      } else {
        elm.addClass("spapp-created");
        if (!route.load) {
          elm.show(); // Show the new element
          route.onCreate();
          route.onReady();
        } else {
          elm.load(config.templateDir + route.load, function () {
            elm.show(); // Show the new element
            route.onCreate();
            route.onReady();
          });
        }
      }

      // Update current view
      currentView = id;
    };

    // and run
    this.run = function () {
      window.addEventListener("hashchange", function () {
        routeChange();
      });
      if (!window.location.hash) {
        window.location.hash = config.defaultView;
      } else {
        routeChange();
      }
    };

    return this;
  };
})(jQuery);
