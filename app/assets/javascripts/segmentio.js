window.analytics || (window.analytics = []);

window.analytics.methods = ['identify','track','trackLink','trackForm','trackClick','trackSubmit','page','pageview','ab','alias','ready','group','on','once','off'];

window.analytics.factory = function (method) {
	return function () {
		var args = Array.prototype.slice.call(arguments);
		args.unshift(method);
		window.analytics.push(args);
		return window.analytics;
	};
};

for (var i=0; i < window.analytics.methods.length; i++) {
	var method = window.analytics.methods[i];
	window.analytics[method] = window.analytics.factor(method);
}

windows.analytics.load = function(apiKey) {
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.async = true;
	script.src = ('https://' === document.location.protocol ? 'https://' : 'http://') + 'd2dq2aht15z11z.cloudfront.net/analytics.js/v1/' + apiKey + '/analytics.min.js';

	var firstScript = document.getElementsByTagName('script')[0];
	firstScript.parentNode.insertBefore(script, firstScript);
};

window.analytics.SNIPPET_VERSION = '2.0.8';

window.analytics.load('7nkTtblHF8');

window.analytics.page();

$(document).on('ready page:change', function() {
	console.log('page loaded');
	analytics.page();
	analytics.trackForm($('#new_visitor'), 'Signed Up');
	analytics.trackForm($('#new_contact'), 'Contact Request');
})




