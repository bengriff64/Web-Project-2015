var mockDatabase = (function () {
  var data = {
    patient: '{"id": 356,"email": "patient_john@example.com"}'
  };

  return {
    get: function (type) {
      return data[type];
    }
  };
})();
