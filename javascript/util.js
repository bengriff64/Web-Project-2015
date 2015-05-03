var util = {
  parseJSON: function(json) {
    var data = null;
    try {
      if (json !== null && typeof json !== 'undefined') {
        data = JSON.parse(json);
      } else {
        throw new Error('Attempting to parse null or undefined');
      }
    } catch (error) {
      throw error;
    }

    return data;
  },
  getURLParameter: function(param) {
    var urlParams = window.location.search.substring(1);
    var urlVariables = urlParams.split('&');
    for (var i = 0; i < urlVariables.length; i++) {
      var parameter = urlVariables[i].split('=');
      if (parameter[0] == param) {
        return parameter[1];
      }
    }
  }
};
