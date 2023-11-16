import express from 'express';
import dotenv_config from './config/dotenv_config.js';
//dirname
import {fileURLToPath} from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
// router
import views_router from './routes/views_router.js';
// database
import connection from './database/connection.js';


//Crear servidor
const PORT = dotenv_config.app.PORT || 8000;
const app = express();

//conectar con base de datos
connection();

// Template config engine
app.set('views',__dirname+'/views');
app.set('view engine', 'ejs');

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname+'/public'));

//routes
app.use(views_router)



// server
app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
})


