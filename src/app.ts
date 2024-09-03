import express from 'express';
import cors from 'cors'
import { blogsRouter } from './routers/blogsRouter';
import { postsRouter } from './routers/postsRouter';
import { deleteAllController } from './routers/deleteAllController';
import { URL_PATH } from './setting';




export const app = express();

app.use(cors());


const jsonBodyMiddleware = express.json();
app.use(jsonBodyMiddleware);


app.get(URL_PATH.base, (req,res) => {   
    
    res.status(200).json({version: '1.0 '});
    
})

app.use(URL_PATH.blogs, blogsRouter);
app.use(URL_PATH.posts, postsRouter);
app.delete(URL_PATH.deleteAll, deleteAllController);




