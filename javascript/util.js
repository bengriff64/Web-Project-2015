var util = {
  parseJSON: function (json) {
    var data = null;
    try {
      if (json !== null && typeof json !== 'undefined') {
        data = JSON.parse(json);
      }
      else {
        throw new Error('Attempting to parse null or undefined');
      }
    }
    catch (error) {
      throw error;
    }

    return data;
  }
};
