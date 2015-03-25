System.config({
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  },
  "shim": {
    "marionette": {
      "deps": [
        "underscore",
        "backbone.wreqr",
        "backbone.babysitter"
      ]
    }
  }
});

System.config({
  "map": {
    "backbone": "npm:backbone@1.1.2",
    "backbone.babysitter": "github:marionettejs/backbone.babysitter@0.1.6",
    "backbone.wreqr": "github:marionettejs/backbone.wreqr@1.3.2",
    "jquery": "github:components/jquery@2.1.3",
    "marionette": "github:marionettejs/backbone.marionette@2.4.1",
    "underscore": "npm:underscore@1.8.2",
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:backbone@1.1.2": {
     "process": "github:jspm/nodelibs-process@0.1.1", 
      "underscore": "npm:underscore@1.8.2"
    }
  }
});

