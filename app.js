import express from "express";
import dotenv_config from "./config/dotenv_config.js";
import { MONGO_URI } from "./database/connection.js";
//dirname
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
// router
import views_router from "./routes/views_router.js";
import session_router from "./routes/sessions_router.js";
import secrets_router from "./routes/secrets_router.js";
// database
import connection from "./database/connection.js";
//passport
import session from "express-session";
import passport from "passport";
import initPassportLocal from "./config/passport_config.js";
import cookieParser from "cookie-parser";
import MongoStore from "connect-mongo";

//Crear servidor
const PORT = dotenv_config.app.PORT || 8000;
const app = express();

//conectar con base de datos
connection();

// Template config engine
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(cookieParser());

//sesion
app.use(
  session({
    secret: dotenv_config.session.SECRET,
    store: MongoStore.create({
      mongoUrl: MONGO_URI,
      ttl: 3600,
    }),
    resave: false,
    saveUninitialized: false,
  })
);

//pasport
initPassportLocal();
app.use(passport.initialize());
app.use(passport.session());


//routes
app.use(views_router);
app.use(session_router);
app.use(secrets_router);

// server
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
