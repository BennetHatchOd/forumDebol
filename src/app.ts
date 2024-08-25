import express from 'express';
import {SETTING, HTTP_STATUSES} from './setting';
import cors from 'cors'
import { blob } from 'stream/consumers';
import { blogsRouter } from './routers/blogsRouter';
import { postsRouter } from './routers/postsRouter';
import { deleteAllController } from './routers/deleteAllController';




export const app = express();

app.use(cors);


const jsonBodyMiddleware = express.json();
app.use(jsonBodyMiddleware);


app.get('/', (req,res) => {   
    
    res.status(200).json({version: '1.0 '});
    
})

app.use('/blogs', blogsRouter);
app.use('/posts', postsRouter);
app.delete('/testing/all-data', deleteAllController);




