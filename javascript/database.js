var mockDB = (function () {
  var data = {
    patients: '[{"id": 356,"email": "patient_john@example.com"},{"id": 356,"email": "patient_john@example.com"},{"id": 356,"email": "patient_john@example.com"},{"id": 356,"email": "patient_john@example.com"}]',
    clinician: '{"id": 356,"email": "patient_john@example.com"}',
    categories: '["Psychosis","Anxiexty","Schizophrenia","Depression","Bipolar"]',

    /**
				{
			  "1": {
			    "id": 1,
				  "title": "Example media",
				  "description": "Example media description",
				  "resourceUrl": "http:\/\/example.com\/foo",
				  "type": "link",
				  "creatorId": 1,
				  "subMedia": {
				    "10": {
				      "id": 10,
				      "title": "Example title",
				      "type": "link"
				    },
				    "11": {
				      "id": 11,
				      "title": "Example title",
				      "type": "link"
				    }
				  },
				  "tags": [
				    "Foo",
				    "Bar"
				  ]
		    }
		  */
    media: '[{"id":1,"title":"Example media 1","description":"Example media description","resourceUrl":"http:\/\/example.com\/foo","type":"link","creatorId":1,"tags":["Psychosis","Schizophrenia"]},{"id":2,"title":"Example media 2","description":"Example media description","resourceUrl":"http:\/\/example.com\/foo","type":"link","creatorId":1,"tags":["Schizophrenia"]},{"id":3,"title":"Example media 3","description":"Example media description","resourceUrl":"http:\/\/example.com\/foo","type":"link","creatorId":1,"tags":["Anxiety"]},{"id":4,"title":"Example media 4","description":"Example media description","resourceUrl":"http:\/\/example.com\/foo","type":"link","creatorId":1,"tags":["Schizophrenia","Bipolar"]},{"id":5,"title":"Example media 5","description":"Example media description","resourceUrl":"http:\/\/example.com\/foo","type":"link","creatorId":1,"tags":["Bipolar"]},{"id":6,"title":"Example media 6","description":"Example media description","resourceUrl":"http:\/\/example.com\/foo","type":"link","creatorId":1,"tags":["Psychosis","Bipolar"]},{"id":7,"title":"Example media 7","description":"Example media description","resourceUrl":"http:\/\/example.com\/foo","type":"link","creatorId":1,"tags":["Depression","Anxiety"]},{"id":8,"title":"Example media 8","description":"Example media description","resourceUrl":"http:\/\/example.com\/foo","type":"link","creatorId":1,"tags":["Psychosis","Depression"]},{"id":9,"title":"Example media 9","description":"Example media description","resourceUrl":"http:\/\/example.com\/foo","type":"link","creatorId":1,"tags":["Depression","Anxiety"]},{"id":10,"title":"Example media 10","description":"Example media description","resourceUrl":"http:\/\/example.com\/foo","type":"link","creatorId":1,"tags":["Depression","Anxiety"]},{"id":11,"title":"Example media 11","description":"Example media description","resourceUrl":"http:\/\/example.com\/foo","type":"link","creatorId":1,"tags":["Schizophrenia"]},{"id":12,"title":"Example media 12","description":"Example media description","resourceUrl":"http:\/\/example.com\/foo","type":"link","creatorId":1,"tags":["Psychosis","Schizophrenia"]},{"id":13,"title":"Example media 13","description":"Example media description","resourceUrl":"http:\/\/example.com\/foo","type":"link","creatorId":1,"tags":["Anxiety"]},{"id":14,"title":"Example media 14","description":"Example media description","resourceUrl":"http:\/\/example.com\/foo","type":"link","creatorId":1,"tags":["Anxiexty"]},{"id":15,"title":"Example media 15","description":"Example media description","resourceUrl":"http:\/\/example.com\/foo","type":"link","creatorId":1,"tags":["Anxiexty","Bipolar"]},{"id":16,"title":"Example media 16","description":"Example media description","resourceUrl":"http:\/\/example.com\/foo","type":"link","creatorId":1,"tags":["Bipolar"]},{"id":17,"title":"Example media 17","description":"Example media description","resourceUrl":"http:\/\/example.com\/foo","type":"link","creatorId":1,"tags":["Psychosis"]},{"id":18,"title":"Example media 18","description":"Example media description","resourceUrl":"http:\/\/example.com\/foo","type":"link","creatorId":1,"tags":["Anxiety"]},{"id":19,"title":"Example media 19","description":"Example media description","resourceUrl":"http:\/\/example.com\/foo","type":"link","creatorId":1,"tags":["Psychosis"]},{"id":20,"title":"Example media 20","description":"Example media description","resourceUrl":"http:\/\/example.com\/foo","type":"link","creatorId":1,"tags":["Anxiety"]}]',
    pathway:
  };

  return {
    get: function (type, params) {
      if (data[type]) {
        return data[type];
      }
      else {
        throw new Error('no type "' + type + '" found in mockDB');
      }
    }
  };
})();
