import passport from "passport";
import express from 'express'
import googleAuthController from '../controllers/googleAuthController'
const router = express.Router()


const isLoggedIn =(req,res,next)=>{
    req.user ? next() :res.sendStatus(401)
    }

router.get('/', (req, res) => {
    res.send('<a href="auth/google">Authenticate with Google</a>');
  });
  
  router.get('/auth/google',
    passport.authenticate('google', { scope: [ 'email', 'profile' ] }
  ));
  
  router.get( '/google/callback',
    passport.authenticate('google', {
      successRedirect: '/api/protected',
      failureRedirect: '/auth/google/failure'
    })
  );

  router.get('/protected', isLoggedIn, googleAuthController);


  router.get('/logout',(req,res)=>{
    req.logout()
    req.session.destroy()
    res.json({"success":true})
  })


  module.exports=router