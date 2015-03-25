define(['marionette'], function(Mn) {
    var MyView = Mn.ItemView.extend({
        el: '#view',
        template: '#template'
    });

    var view = new MyView();

    view.render();
});