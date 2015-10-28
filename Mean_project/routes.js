var passport = require('passport');
var Account = require('./models/account');
var Article = require('./models/articles');
var users_data=[]
module.exports = function (app) {
    
  app.get('/', function (req, res) {
      res.render('login', { user : req.user });
  });

app.get('/test', function (req, res) {
      users_data.push(req.user.username);
      res.render('index', { user : req.user });
 });

/*app.get('/user', function (req, res) {
       //users_data.push(req.user)
       //console.log(req.body.username)
       return res.end(JSON.stringify(users_data));
       });*/
 
  app.get('/register', function(req, res) {
      res.render('login', { });
  });

  app.post('/register', function(req, res) {
      Account.register(new Account({ username : req.body.username , role:req.body.role }), req.body.password, function(err, account) {
          if (err) {
            return res.render("login", {info: "Already exists."});
          }

          passport.authenticate('local')(req, res, function () {
            res.redirect('/test');
          });
      });
  });

  app.get('/', function(req, res) {
      res.render('login', { user : req.user });
  });

  app.post('/', passport.authenticate('local'), function(req, res) {
      res.redirect('/test');
  });

app.get('/user', function(req, res){
    // res.write(index);
  //res.sendFile('login.html');
  // get all the users
  Article.find({}, function(err, articles) {
    if (err) throw err;
    console.log(req.user.role);
    res.json(req.user.role);
    //console.log(res.json(req.user.role));

     });
  });



  app.get('/articles', function(req, res){
    // res.write(index);
  //res.sendFile('login.html');
  // get all the users
  Article.find({}, function(err, articles) {
    if (err) throw err;
    console.log(req.user.role);
    res.json(articles);

  });

app.delete('/api/suppr/:id', function(req, res) {
       Article.remove({_id:req.params.id})
       .exec(function(err){
             if (err==true){
                    res.send('err');
                  } 
             else{
                res.send('');
                 } 
          })
});


app.post('/formulaireA', function(req,res) {
       monPerso=req.body;
       var article = new Article(req.body);
       article.save(function(err) {
        if (err){
          res.json(500);
        }
        else {
          res.status(201);
          return res.end(JSON.stringify(article));
           }
       });
       res.send(200);
});

app.post('/formulaireC', function(req,res) {
       monPerso=req.body;
       var article = new Article(req.body);
       article.save(function(err) {
        if (err){
          res.json(500);
        }
        else {
          res.status(201);
          return res.end(JSON.stringify(article));
           }
       });
       res.send(200);
});
 
 
  //return res.render('index',{title:'Salut JADE', text:'echec :('});

  });

  app.get('/logout', function(req, res) {
      req.logout();
      req.session.destroy();
      res.redirect('/');
  });


  
};
