var Pathway = function (params) {
	var $pathway = $('#pathway');

	var _self = this;
	var dropHandler = function (e, ui) {
		console.log('item dropped', ui.draggable);
		_self.addItem(ui.draggable.data('media-item'));
	};
	var render = function () {
		$pathway.droppable({
			accept: '.sb-media-item',
			activate: function () {
				$pathway.css('background-color', '#dddddd');
			},
			deactivate: function () {
				$pathway.css('background-color', '#ffffff');
			},
			drop: dropHandler
		});
	};

	this.addItem = function () {

	};

	this.removeItem = function () {

	};

	this.filterFavourites = function () {

	};

	render();
};
