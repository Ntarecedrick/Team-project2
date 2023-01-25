import passport_auth from 'passport-google-oauth2'
import passport from 'passport';
// import db from '../../database/models/index.js'
import dotenv from "dotenv";
dotenv.config

const GoogleStrategy = passport_auth.Strategy;
// const User = db['User'];
passport.use(new GoogleStrategy({
    clientID:`${process.env.GOOGLE_CLIENT_ID}`,
    clientSecret:`${process.env.GOOGLE_CLIENT_SECRET}`,
    callbackURL: "http://localhost:5000/api/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    console.log(accessToken)
    console.log(profile.id)
    return done(null,profile)
 
  }
));

passport.serializeUser((user,done)=>{
    done(null,user)
})
passport.deserializeUser((user,done)=>{
    done(null,user)
})