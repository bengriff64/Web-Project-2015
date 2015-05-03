var $window = $(window);
var sidebar = null;
var sidebarHeight = 200;
var pathway = null;
var userId = null;
var permissionLevel = null;

$(document).ready(function() {
	// NOTE: 100 = Sidebar height - Sidebar height is 0 when display: none
	userId = Number(util.getURLParameter('id'));
	permissionLevel = Number(util.getURLParameter('level'));
	var sidebarFixPos = $('#navbar').height() + $('#dashboardContainer').height();


	pathway = new Pathway();
	pathwayService.get(userId, function(_pathway) {
		pathway.load(_pathway);
	});

	if (permissionLevel < 3) {
		$('#toggleSidebar').toggle();
		sidebar = new Sidebar({
			fixPos: sidebarFixPos,
			height: sidebarHeight
		});
		sidebar.unfix();
	} else {

	}
	setEventListeners();
});

var setEventListeners = function() {
	$('#toggleSidebar').click(function(e) {
		$('#sidebar').slideToggle();
	});

	$window.scroll(function(e) {
		if (sidebar !== null && typeof sidebar !== 'undefined') {
			if ($window.scrollTop() < sidebar.fixPos) {
				sidebar.unfix();
			} else {
				sidebar.fix();
			}
		}
	});
};
