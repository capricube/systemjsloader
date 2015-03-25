define([ 'backbone', 'jquery' ], function(Backbone, $) {
    // because backbone does not have a hard dependency on jquery i'll have to set it manually
	Backbone.$ = $;
});