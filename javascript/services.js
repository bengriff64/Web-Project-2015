var mediaService = (function() {
  var loaded = false;
  var mediaItems = [];
  var itemsInPathwayByID = [];

  var getAvailableMedia = function(id, callback) {
    var i = 0;
    var requestedItem = null;
    if (id === null || typeof id === 'undefined') {
      requestedItem = [];
      for (i = 0; i < mediaItems.length; i++) {
        if (itemsInPathwayByID.indexOf(mediaItems[i].id) === -1) {
          requestedItem.push(mediaItems[i]);
        }
      }
    } else if (typeof id === 'number') {
      for (i = 0; i < mediaItems.length; i++) {
        if (mediaItems[i].id === id) {
          requestedItem = mediaItems[i];
        }
      }
    }
    return callback(requestedItem);
  };

  return {
    get: function(id, callback) {
      var _id = null;
      if (typeof(id) === "function") {
        callback = id;
      } else {
        _id = id;
      }

      if (!loaded) {
        database.get('media', function(data) {
          mediaItems = data;
          loaded = true;
          getAvailableMedia(_id, callback);
        });
      } else {
        getAvailableMedia(_id, callback);
      }
    },
    addToPathway: function(mediaItem) {
      if (itemsInPathwayByID.indexOf(mediaItem.id) > -1) {
        throw new Error("Adding Duplicate item to Pathway");
      } else {
        itemsInPathwayByID.push(mediaItem.id);
      }
    },
    removeFromPathway: function(mediaItem) {
      var i = itemsInPathwayByID.indexOf(mediaItem.id);
      if (i === -1) {
        throw new Error("Removing Unexpected item from Pathway");
      } else {
        itemsInPathwayByID.splice(i, 1);
      }
    }
  };
})();

var patientService = (function() {
  var loaded = false;
  var patients = [];
  var itemsInPathwayByID = [];

  var getPatient = function(id, callback) {
    var i = 0;
    var data = null;
    if (id === null || typeof id === 'undefined') {
      data = patients;
    } else if (typeof id === 'number') {
      for (i = 0; i < patients.length; i++) {
        if (patients[i].id === id) {
          data = patients[i];
          break;
        }
      }
    }
    if (data === null) {
      throw new Error('No matching patient record found');
    }
    return callback(data);
  };

  return {
    get: function(id, callback) {
      var _id = null;
      if (typeof(id) === "function") {
        callback = id;
      } else {
        _id = id;
      }

      if (!loaded) {
        database.get('patients', function(data) {
          patients = data;
          loaded = true;
          getPatient(_id, callback);
        });
      } else {
        getPatient(_id, callback);
      }
    }
  };
})();

var pathwayService = (function() {
  var loaded = false;
  var pathways = [];
  var itemsInPathwayByID = [];

  var getPathway = function(id, callback) {
    var i = 0;
    var data = null;
    if (id === null || typeof id === 'undefined') {
      data = pathways;
    } else if (typeof id === 'number') {
      for (i = 0; i < pathways.length; i++) {
        if (pathways[i].patient_id === id) {
          data = pathways[i];
          break;
        }
      }
    }
    if (data === null) {
      throw new Error('No matching pathway record found');
    }
    return callback(data);
  };

  return {
    get: function(id, callback) {
      if (!loaded) {
        database.get('pathways', function(data) {
          pathways = data;
          loaded = true;
          getPathway(id, callback);
        });
      } else {
        getPathway(id, callback);
      }
    }
  };
})();
