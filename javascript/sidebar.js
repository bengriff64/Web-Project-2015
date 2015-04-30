var Sidebar = function (params) {

	var $sidebar = $('#sidebar');
	var $patientEmail = $('#sbPatientEmail');
	var $catSelect = $('#sbCategory');
	var $mediaList = $('#mediaList');

	var _self = this;

	var render = function(){
		$sidebar.height(_self.height);

		var patientEmail = util.parseJSON(mockDB.get('patient')).email;
		var categories = util.parseJSON(mockDB.get('categories'));
		var media = util.parseJSON(mockDB.get('media'));

		_self.updatePatientEmail(patientEmail);
		_self.updateCategories(categories);
		_self.updateMedia(media);
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
	this.updatePatientEmail = function(patientEmail){
		$patientEmail.val(patientEmail);
	};

	/**
	 * @param {Array} categories - empties before adding categories
	 */
	this.updateCategories = function(categories){
		$catSelect.empty();
		$catSelect.append($("<option></option>").attr("value", null).text('All'));
		$.each(categories, function(i, category){
			$catSelect.append($("<option></option>").attr("value", category).text(category));
		});
	};

	/**
	 * update Media list - empties before adding media
	 * @param {Array} media
	 */
	this.updateMedia = function(media){
		$mediaList.empty();
		$.each(media, function(i, item){
			$mediaList.append($("<li></li>").text(item.title));
		});
	};

	render();
};
