var database = (function () {
	return {
		get: function (dataType, callback) {
			var url = 'data/' + dataType + '.js';
			$.getJSON(url)
				.done(function (data) {
					console.log(url, data);
					callback(util.parseJSON(data));
				})
				.fail(function () {
					throw new Error('Failed to retrieve data from ' + url);
				});
		}
	};
})();
