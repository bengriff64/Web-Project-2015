var $window = $(window);
var sidebar = null;

$(document).ready(function () {
	console.log('ready');
	setEventListeners();

	// NOTE: Sidebar height is 0 when display: none
	var sidebarFixPos = $('#navbar').height() + $('#dashboardContainer').height() - 100;
	sidebar = new Sidebar({
		fixPos: sidebarFixPos
	});
	sidebar.unfix();
});

var setEventListeners = function () {
	$('#toggleSidebar').click(function (e) {
		$('#sidebar').slideToggle();
	});

	$window.scroll(function (e) {
		if ($window.scrollTop() < sidebar.fixPos) {
			sidebar.unfix();
		}
		else {
			sidebar.fix();
		}
	});
};

var Sidebar = function (params) {

	var $sidebar = $('#sidebar');
	var _self = this;

	// Height at which the sidebar fixes to top of screen
	this.fixPos = params.fixPos || 0;

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
};
