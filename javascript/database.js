var database = (function() {
	return {
		get: function(url, callback) {
			$.getJSON('data/' + url + '.js', function(data) {
				console.log(url, data);
				callback(util.parseJSON(data));
			});
		}
	};
})();
