var express = require('express')
  , router = express.Router()
  

router.get('/:name', function(req, res) {
	var name = req.params.name
	req.session.name = name

	console.log(req.session.name)
    res.send('Hello ' + name)
})
