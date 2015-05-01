var Pathway = function (params) {

	var $pathway = $('#pathway');
	var mediaItems = [];
	var _self = this;
	var leftCount = 0;
	var rightCount = 0;

	var render = function () {
		$pathway.droppable({
			accept: '.sb-media-item',
			activate: function () {
				$pathway.css('background-color', '#dddddd');
			},
			deactivate: function () {
				$pathway.css('background-color', '#ffffff');
			},
			drop: function (e, ui) {
				var mediaItem = ui.draggable.data('media-item');
				_self.addItem(mediaItem);
				mediaService.addToPathway(mediaItem);
				sidebar.updateMediaList();
			}
		});

	};

	var addToPathway = function (mediaBlock) {
		var count = 0;
		var $side = null;

		if (leftCount <= rightCount) {
			$side = $('#pathwayLeft');
			count = leftCount;
			leftCount++;
		}
		else {
			$side = $('#pathwayRight');
			count = rightCount;
			rightCount++;
		}

		var bottomOffset = (count * 200) + (40 * (count + 1));
		mediaBlock.css('bottom', bottomOffset);
		$side.append(mediaBlock);
	};

	var calcPathwayHeight = function () {
		var blockHeight = leftCount >= rightCount ? leftCount : rightCount;
		blockHeight = (blockHeight * 200) + (40 * (blockHeight + 1));

		$pathway.height(blockHeight + sidebarHeight + 40);

	};

	this.mediaItemIds = [];

	this.renderMediaItem = function (mediaItem) {
		var mediaBlock = $('<div class="pw-media-item"></div>').text(mediaItem.title);
		addToPathway(mediaBlock);
		calcPathwayHeight();
	};

	this.addItem = function (mediaItem) {
		mediaItems.push(mediaItem.id);
		_self.renderMediaItem(mediaItem);
	};

	this.removeItem = function () {

	};

	this.filterFavourites = function () {

	};

	render();
};
