var mediaService = (function () {
  var mediaItems = util.parseJSON(mockDB.get('media'));
  var itemsInPathwayByID = [];

  return {
    get: function (id) {
      var i = 0;
      var requestedItem = null;
      if (id === null || typeof id === 'undefined') {
        requestedItem = [];
        for (i = 0; i < mediaItems.length; i++) {
          if (itemsInPathwayByID.indexOf(mediaItems[i].id) === -1) {
            requestedItem.push(mediaItems[i]);
          }
        }
      }
      else if (typeof id === 'number') {
        for (i = 0; i < mediaItems.length; i++) {
          if (mediaItems[i].id === id) {
            requestedItem = mediaItems[i];
            break;
          }
        }
      }

      return requestedItem;
    },
    addToPathway: function (mediaItem) {
      if (itemsInPathwayByID.indexOf(mediaItem.id) > -1) {
        throw new Error("Adding Duplicate item to Pathway");
      }
      else {
        itemsInPathwayByID.push(mediaItem.id);
      }
    },
    removeFromPathway: function (mediaItem) {
      var i = itemsInPathwayByID.indexOf(mediaItem.id);
      if (i === -1) {
        throw new Error("Removing Unexpected item from Pathway");
      }
      else {
        itemsInPathwayByID.splice(i, 1);
      }
    }
  };
})();
