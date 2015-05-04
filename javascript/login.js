var checkLogin = function () {
  var permissionLevel = $('#chooselist').val();
  var email = $('#inputEmail').val();
  var password = $('#inputPassword').val();

  var getDbTable = function () {
    switch (permissionLevel) {
    case '1':
      return 'admin';
    case '2':
      return 'clinician';
    case '3':
      return 'patients';
    default:
      throw new Error('Permission Level not Recognised');
    }
  };

  var findUserByEmail = function (data) {
    var url = '';
    if ($.isArray(data)) {
      for (var i = 0; i < data.length; i++) {
        if (data[i].email === email && data[i].password === password) {
          url = '/dashboard.html?id=' + data[i].id + '&level=' + permissionLevel;
          window.open(url);
        }
      }
    }
    else {
      if (data.email !== email) {
        alert("Email Not Found");
      }
      else if (data.password !== password) {
        alert("Incorrect Password");
      }
      else {
        url = '/dashboard.html?id=' + data.id + '&level=' + permissionLevel;
        window.location.href = url;
      }
    }
  };

  database.get(getDbTable(), findUserByEmail);
};

$(document).ready(function () {
  $('#logbutton').click(function () {
    checkLogin();
  });
});
