var MediaItem = function (params) {

	var _self = this;
	var $jq = '';
	this.id = params.id;
	this.url = params.resourceUrl || null;
	this.description = params.description || null;
	this.title = params.title || 'Item ' + _self.id;
	this.type = params.type || '';
	this.favourite = params.favourite || false;

	var closeHandler = function () {
		pathway.removeItem(_self);
	};

	var favouriteHandler = function () {
		pathway.addFavourite(_self);
	};

	var render = function () {
		var $mediaContainer = $('<div class="pw-media-container"></div>');
		var $closeIcon = $('<button type="button" class="close"><span class="glyphicon glyphicon-remove"></span></button>')
			.on('click', closeHandler);
		var $favourite = $('<button type="button" class="close favourite"><span class="glyphicon glyphicon-heart"></span></button>')
			.on('click', favouriteHandler);

		$jq = $('<div class="pw-media-item"></div>')
			.text(_self.title)
			.append($closeIcon)
			.append($favourite)
			.append($mediaContainer);

		if (_self.type === 'link') {
			var link = $('<a></a>')
				.attr('href', _self.url)
				.text(_self.title);
			$mediaContainer.append(link);
		}
		else if (_self.type === 'youtube') {
			var video = $('<iframe width="264" height="200" src="' + _self.url +
				'" frameborder="0" allowfullscreen></iframe>');
			$mediaContainer.append(video);
		}
	};

	this.getHTML = function () {
		$jq = null;
		render();
		return $jq;
	};

	render();
};
