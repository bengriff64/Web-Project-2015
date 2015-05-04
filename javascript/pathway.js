var Pathway = function () {

  var $pathway = $('#pathway');
  var pathwaySide = {
    $left: $('#pathwayLeft'),
    $right: $('#pathwayRight')
  };
  var mediaItems = [];
  var _self = this;

  var createMediaItem = function (media) {
    return new MediaItem(media);
  };

  var redrawPathway = function () {
    pathwaySide.$left.empty();
    pathwaySide.$right.empty();
    for (var i = 0; i < mediaItems.length; i++) {
      addToPathway(mediaItems[i].getHTML());
    }
    calcPathwayHeight();
  };

  var removeItemById = function (id) {
    var itemFound = false;
    var i = 0;
    for (; i < mediaItems.length; i++) {
      if (mediaItems[i].id === id) {
        itemFound = true;
        break;
      }
    }
    if (!itemFound) {
      throw new Error('Cannot find media item to remove with id ' + id);
    }
    else {
      mediaService.removeFromPathway(mediaItems[i]);
      mediaItems.splice(i, 1);
      sidebar.updateMediaList();
      redrawPathway();
    }
  };

  var render = function () {
    $pathway.droppable({
      accept: '.sb-media-item',
      activate: function () {
        $pathway.css('background-color', '#dddddd');
        $('#dropOverlay').toggle();
      },
      deactivate: function () {
        $pathway.css('background-color', '#ffffff');
        $('#dropOverlay').toggle();
      },
      drop: function (e, ui) {
        var mediaItem = createMediaItem(ui.draggable.data('media-item'));
        _self.addItem(mediaItem);
        mediaService.addToPathway(mediaItem);
        sidebar.updateMediaList();
      }
    });
  };

  var addToPathway = function (mediaBlock) {
    var count = 0;
    var $side = null;
    var leftCount = pathwaySide.$left.children().length;
    var rightCount = pathwaySide.$right.children().length;
    if (leftCount <= rightCount) {
      $side = pathwaySide.$left;
      count = leftCount;
    }
    else {
      $side = pathwaySide.$right;
      count = rightCount;
    }
    var bottomOffset = (count * 200) + (40 * (count + 1));
    mediaBlock.css('bottom', bottomOffset);
    $side.append(mediaBlock);
  };

  var calcPathwayHeight = function () {
    var leftCount = pathwaySide.$left.children().length;
    var rightCount = pathwaySide.$right.children().length;
    var blockHeight = leftCount >= rightCount ? leftCount : rightCount;
    blockHeight = (blockHeight * 200) + (40 * (blockHeight + 1));
    $pathway.height(blockHeight + sidebarHeight + 40);
  };

  this.addItem = function (mediaItem) {
    mediaItems.push(mediaItem);
    addToPathway(mediaItem.getHTML());
    calcPathwayHeight();
  };

  this.removeItem = function (mediaItem) {
    removeItemById(mediaItem.id);
  };

  this.filterFavourites = function () {

  };

  this.load = function (newPathway) {
    for (var i = 0; i < newPathway.media.length; i++) {
      var mediaItem = createMediaItem(newPathway.media[i]);
      _self.addItem(mediaItem);
      mediaService.addToPathway(mediaItem);
    }
  };

  render();
};
