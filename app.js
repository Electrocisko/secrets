import express from 'express';
import dotenv_config from './config/dotenv_config.js';
//dirname
import {fileURLToPath} from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


//Crear servidor
const PORT = dotenv_config.app.PORT || 8000;
const app = express();


// Template config engine
app.set('views',__dirname+'/views');
app.set('view engine', 'ejs');

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname+'/public'));


//Ruta de prueba inicial
app.get('/', (req,res) => {
    res.render('home')
})




// server
app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
})


