var mockDB = (function () {
	var data = {
		patient: '{"id": 356,"email": "patient_john@example.com"}',
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
		media: '[{"id":1,"title":"Example media","description":"Example media description","resourceUrl":"http:\/\/example.com\/foo","type":"link","creatorId":1,"tags":["Foo","Bar"]},{"id":2,"title":"Example media","description":"Example media description","resourceUrl":"http:\/\/example.com\/foo","type":"link","creatorId":1,"tags":["Foo","Bar"]},{"id":3,"title":"Example media","description":"Example media description","resourceUrl":"http:\/\/example.com\/foo","type":"link","creatorId":1,"tags":["Foo","Bar"]},{"id":4,"title":"Example media","description":"Example media description","resourceUrl":"http:\/\/example.com\/foo","type":"link","creatorId":1,"tags":["Foo","Bar"]},{"id":5,"title":"Example media","description":"Example media description","resourceUrl":"http:\/\/example.com\/foo","type":"link","creatorId":1,"tags":["Foo","Bar"]},' +
			'{"id":6,"title":"Example media","description":"Example media description","resourceUrl":"http:\/\/example.com\/foo","type":"link","creatorId":1,"tags":["Foo","Bar"]},{"id":7,"title":"Example media","description":"Example media description","resourceUrl":"http:\/\/example.com\/foo","type":"link","creatorId":1,"tags":["Foo","Bar"]},{"id":8,"title":"Example media","description":"Example media description","resourceUrl":"http:\/\/example.com\/foo","type":"link","creatorId":1,"tags":["Foo","Bar"]},{"id":9,"title":"Example media","description":"Example media description","resourceUrl":"http:\/\/example.com\/foo","type":"link","creatorId":1,"tags":["Foo","Bar"]},{"id":10,"title":"Example media","description":"Example media description","resourceUrl":"http:\/\/example.com\/foo","type":"link","creatorId":1,"tags":["Foo","Bar"]},' +
			'{"id":11,"title":"Example media","description":"Example media description","resourceUrl":"http:\/\/example.com\/foo","type":"link","creatorId":1,"tags":["Foo","Bar"]},{"id":12,"title":"Example media","description":"Example media description","resourceUrl":"http:\/\/example.com\/foo","type":"link","creatorId":1,"tags":["Foo","Bar"]},{"id":13,"title":"Example media","description":"Example media description","resourceUrl":"http:\/\/example.com\/foo","type":"link","creatorId":1,"tags":["Foo","Bar"]},{"id":14,"title":"Example media","description":"Example media description","resourceUrl":"http:\/\/example.com\/foo","type":"link","creatorId":1,"tags":["Foo","Bar"]},{"id":15,"title":"Example media","description":"Example media description","resourceUrl":"http:\/\/example.com\/foo","type":"link","creatorId":1,"tags":["Foo","Bar"]},' +
			'{"id":16,"title":"Example media","description":"Example media description","resourceUrl":"http:\/\/example.com\/foo","type":"link","creatorId":1,"tags":["Foo","Bar"]},{"id":17,"title":"Example media","description":"Example media description","resourceUrl":"http:\/\/example.com\/foo","type":"link","creatorId":1,"tags":["Foo","Bar"]},{"id":18,"title":"Example media","description":"Example media description","resourceUrl":"http:\/\/example.com\/foo","type":"link","creatorId":1,"tags":["Foo","Bar"]},{"id":19,"title":"Example media","description":"Example media description","resourceUrl":"http:\/\/example.com\/foo","type":"link","creatorId":1,"tags":["Foo","Bar"]},{"id":20,"title":"Example media","description":"Example media description","resourceUrl":"http:\/\/example.com\/foo","type":"link","creatorId":1,"tags":["Foo","Bar"]}]'
	};

	return {
		get: function (type) {
			if (data[type]) {
				return data[type];
			}
			else {
				throw new Error('no type "' + type + '" found in mockDB');
			}
		}
	};
})();
