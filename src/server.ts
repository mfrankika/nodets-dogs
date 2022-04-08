import express, {Request,Response} from "express";
import mustache from 'mustache-express';
import dotenv from 'dotenv';
import path from 'path';  
import mainRoutes from './routes/index';

dotenv.config();

const server =express();

/* views configuration - template engine */
server.set('view engine','mustache');
server.set('views',path.join(__dirname,'views'));
server .engine('mustache',mustache());

/* public folder configuration */
server.use(express.static(path.join(__dirname,'../public')));

/* routes configuration */
server.use(mainRoutes);

server.use(express.urlencoded({extended:true}));

server.use((req:Request,res:Response)=>{
  res.status(404).send('Pagina nao encontrada')
});

server.listen(process.env.PORT);
//server.listen(80);