var Sidebar = function (params) {

  var $sidebar = $('#sidebar');
  var $patientEmail = $('#sbPatientEmail');
  var $catSelect = $('#sbCategory');
  var $mediaList = $('#mediaList');
  var currentCategory = 'All';
  var fullMediaList = [];
  var _self = this;

  var filterMediaByCategory = function (category) {
    var filteredMedia = [];
    for (var i = 0; i < fullMediaList.length; i++) {
      if (fullMediaList[i].tags.indexOf(category) > -1) {
        filteredMedia.push(fullMediaList[i]);
      }
    }

    return filteredMedia;
  };

  var render = function () {
    $sidebar.height(_self.height);

    var patientEmail = util.parseJSON(mockDB.get('patient')).email;
    var categories = util.parseJSON(mockDB.get('categories'));
    fullMediaList = util.parseJSON(mockDB.get('media'));

    _self.updatePatientEmail(patientEmail);
    _self.updateCategories(categories);
    _self.updateMedia(fullMediaList);

    $catSelect.on('change', function (e) {
      var categorySelected = $("option:selected", this);
      if (categorySelected.val() === 'All') {
        _self.updateMedia(fullMediaList);
      }
      else {
        var filteredMedia = filterMediaByCategory(categorySelected.val());
        _self.updateMedia(filteredMedia);
      }
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
  this.updateMedia = function (media) {
    $mediaList.empty();
    if (media.length === 0) {
      $mediaList.append($('<span>No Items</span>'));
    }
    var start = function () {
      $mediaList.css('overflow-y', 'hidden');
    };
    var stop = function () {
      $mediaList.css('overflow-y', 'scroll');
    };
    $.each(media, function (i, item) {
      var li = $('<li class="sb-media-item"></li>')
        .text(item.title)
        .data('media-item', item)
        .draggable({
          helper: 'clone',
          appendTo: 'body',
          opacity: 0.6,
          revert: true,
          scroll: false,
          start: start,
          stop: stop
        });
      $mediaList.append(li);
    });
  };

  render();
};
