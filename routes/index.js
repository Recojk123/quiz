var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller'); 

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

router.get('/author', function(req, res){
	res.render('creditos/author', {name:'Ricardo Valencia Fernandez'});
});


router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);
//route.get('/creditos/author', quizController.author);

module.exports = router;
