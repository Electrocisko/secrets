import passport from "passport";
import local from 'passport-local';
import {User} from '../database/user_model.js';
import {createHash,isValidPassword} from '../helpers/cryptPassword.js';

const LocalStrategy = local.Strategy;

const initPassportLocal = () => {
    try {
        passport.use("register", new LocalStrategy(
            { passReqToCallback: true}, async (req, username, password, done) => {
                 //Faltan validaciones de que lleguen los datos
                const userData = { username, password};
                const exist = await  User.findOne({username});
                if (exist) {
                    return done(null, false, {message: "User already register"})
                };
                let newUser = new User(userData);
                newUser.password = await createHash(password);
                const user = await newUser.save();
                if (!user) {
                    return done(null, false, {message:"Error to create User"})
                }
                return done(null,user);
            }))
    } catch (error) {
        console.log(error)
    }
}

passport.use(
    "login",
    new LocalStrategy(async (username, password, done) => {
      const userDB = await User.findOne({ username });
      if (!userDB) return done(null, false, { message: "No existe usuario" });
      const valid = await isValidPassword(userDB.password, password);
      if (valid) {
        return done(null, userDB);
      }
      return done(null, false, { message: "error en validacion de usuario" });
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user);
  });
  passport.deserializeUser(async (user, done) => {
    return done(null, user);
  });

  export default initPassportLocal;