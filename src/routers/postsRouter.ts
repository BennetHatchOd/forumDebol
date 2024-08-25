import {Router} from 'express';
import { getPostController } from './postsRouter/getPostController';
import { getIdPostController } from './postsRouter/getIdPostController';
import { deleteIdPostController } from './postsRouter/deleteIdPostController';
import { putPostController } from './postsRouter/putPostController';
import { postPostController } from './postsRouter/postPostController';


export const postsRouter = Router({});

postsRouter.get('/', getPostController);
postsRouter.get('/:id', getIdPostController);
postsRouter.delete('/:id', deleteIdPostController);
postsRouter.put('/:id', putPostController);
postsRouter.post('/', postPostController);