var express = require('express');
const moviesRouter = express.Router();

var movies = [
    {
        "_id": "5ab12612f36d2879268f284a",
        "name": "Black Panther",
        "language": "ENGLISH",
        "rate": 4.5,
        "type": "Action Adventure Fantasy",
        "imageUrl": "https://image.ibb.co/f0hhZc/bp.jpg"
      },
      {
        "_id": "5ab12666f36d2879268f2902",
        "name": "Death Wish",
        "language": "ENGLISH",
        "type": "Action Crime Thriller",
        "rate": 3.2,
        "imageUrl": "https://image.ibb.co/gC9PfH/dw.jpg"
      },
      {
        "_id": "5ab12678f36d2879268f291d",
        "name": "Coco",
        "language": "ENGLISH",
        "type": "Adventure Animation Family",
        "rate": 5,
        "imageUrl": "https://image.ibb.co/dQwWSx/coco.jpg"
      },
      {
        "_id": "5ab12678f36d2879268f291d",
        "name": "Coco",
        "language": "ENGLISH",
        "type": "Adventure Animation Family",
        "rate": 5,
        "imageUrl": "https://image.ibb.co/dQwWSx/coco.jpg"
      }
]

function router(menu){
    moviesRouter.route('/')
    .get(function(req,res) {
        //res.send(movies)
        res.render('movies',{title:'Movies Page', movies:movies,menu:menu})
    });

    moviesRouter.route('/details')
        .get(function(req,res) {
            res.send("Details for Movies")
        });
    
    return moviesRouter
}



module.exports = router;
