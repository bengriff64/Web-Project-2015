var Sidebar = function (params) {

  var $sidebar = $('#sidebar');
  var $patientEmail = $('#sbPatientEmail');
  var $catSelect = $('#sbCategory');
  var $mediaList = $('#mediaList');
  var currentCategory = 'All';
  var _self = this;

  var filterMediaByCategory = function () {
    var filteredMedia = [];
    var fullMediaList = mediaService.get();
    if (currentCategory === 'All') {
      return fullMediaList;
    }

    for (var i = 0; i < fullMediaList.length; i++) {
      if (fullMediaList[i].tags.indexOf(currentCategory) > -1) {
        filteredMedia.push(fullMediaList[i]);
      }
    }
    return filteredMedia;
  };

  var dragStart = function () {
    $mediaList.css('overflow-y', 'hidden');
  };
  var dragStop = function () {
    $mediaList.css('overflow-y', 'scroll');
  };
  var createMediaListItem = function (item) {
    var li = $('<li class="sb-media-item"></li>')
      .text(item.title)
      .data('media-item', item)
      .draggable({
        helper: 'clone',
        appendTo: 'body',
        zIndex: 10,
        opacity: 0.6,
        revert: true,
        scroll: false,
        start: dragStart,
        stop: dragStop
      });
    return li;
  };

  var render = function () {
    $sidebar.height(_self.height);

    var patientEmail = util.parseJSON(mockDB.get('patient')).email;
    var categories = util.parseJSON(mockDB.get('categories'));

    _self.updatePatientEmail(patientEmail);
    _self.updateCategories(categories);
    _self.updateMediaList();

    $catSelect.on('change', function (e) {
      currentCategory = $("option:selected", this).val();
      _self.updateMediaList();
    });
  };

  /**
   * Height at which the sidebar fixes to top of screen
   * @type {Number}
   */
  this.fixPos = params.fixPos || 0;
  this.height = params.height || 100;

  this.unfix = function () {
    $sidebar.css({
      position: 'absolute',
      top: _self.fixPos
    });
  };
  this.fix = function () {
    $sidebar.css({
      position: 'fixed',
      top: 0
    });
  };

  /**
   * @param {String} patientEmail
   */
  this.updatePatientEmail = function (patientEmail) {
    $patientEmail.val(patientEmail);
  };

  /**
   * @param {Array} categories - empties before adding categories
   */
  this.updateCategories = function (categories) {
    $catSelect.empty();
    $catSelect.append($("<option></option>").attr("value", null).text('All'));
    $.each(categories, function (i, category) {
      $catSelect.append($("<option></option>").attr("value", category).text(category));
    });
  };

  /**
   * update Media list - empties before adding media
   * @param {Array} media
   */
  this.updateMediaList = function () {
    var mediaList = filterMediaByCategory();

    $mediaList.empty();
    if (mediaList.length === 0) {
      $mediaList.append($('<span>No Items</span>'));
    }
    else {
      $.each(mediaList, function (i, mediaItem) {
        $mediaList.append(createMediaListItem(mediaItem));
      });
    }
  };

  render();
};
