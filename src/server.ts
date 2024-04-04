/*---------- Modules ----------*/
import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import router from './router';
import * as dotenv from 'dotenv'
dotenv.config();

/*---------- Express App ----------*/
const app = express();


/*---------- Middleware ----------*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static('dist'));
app.use(compression());
app.use(cookieParser());


/*---------- Server ----------*/
const server = http.createServer(app);

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000/');
});


/*---------- Routes ----------*/
app.use('/', router());
