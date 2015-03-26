System.config({
    "paths": {
        "*": "*.js",
        "github:*": "jspm_packages/github/*.js"
    },
    "meta": {
        "backbone": {
            format: "amd"
        },
        "jquery": {
            format: "amd"
        },
        "underscore": {
            format: "amd"
        },
        "marionette": {
            format: "amd"
        },
        "backbone.wreqr": {
            format: "amd"
        },
        "backbone.babysitter": {
            format: "amd"
        }
    }
});


System.config({
    "map": {
        "backbone": "github:jashkenas/backbone@1.1.2",
        "backbone.babysitter": "github:marionettejs/backbone.babysitter@0.1.6",
        "backbone.wreqr": "github:marionettejs/backbone.wreqr@1.3.2",
        "jquery": "github:components/jquery@2.1.3",
        "marionette": "github:marionettejs/backbone.marionette@2.4.1",
        "traceur": "github:jmcriffey/bower-traceur@0.0.87",
        "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.87",
        "underscore": "github:jashkenas/underscore@1.8.2"
    }
});
