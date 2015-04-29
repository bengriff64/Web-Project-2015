$(document).ready(function () {
  console.log('ready');
});

var setEventListeners = function () {
  $('#toggleSidebar').click(function (e) {
    $('#sidebar').toggle('show');
  });
};

var Dashboard = function () {

};
