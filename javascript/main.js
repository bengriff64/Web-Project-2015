var $window = $(window);
var sidebar = null;
var sidebarHeight = 200;
var pathway = null;

$(document).ready(function () {
  // NOTE: 100 = Sidebar height - Sidebar height is 0 when display: none
  var sidebarFixPos = $('#navbar').height() + $('#dashboardContainer').height();

  sidebar = new Sidebar({
    fixPos: sidebarFixPos,
    height: sidebarHeight
  });
  sidebar.unfix();

  pathway = new Pathway();

  setEventListeners();
});

var setEventListeners = function () {
  $('#toggleSidebar').click(function (e) {
    $('#sidebar').slideToggle();
  });

  $window.scroll(function (e) {
    if (sidebar !== null && typeof sidebar !== 'undefined') {
      if ($window.scrollTop() < sidebar.fixPos) {
        sidebar.unfix();
      }
      else {
        sidebar.fix();
      }
    }
  });
};
