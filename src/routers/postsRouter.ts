import {Router} from 'express';
import { getPostController } from './posts/getPostController';
import { getPostByIdController } from './posts/getPostByIdController';
import { deletePostByIdController } from './posts/deletePostByIdController';
import { putPostController } from './posts/putPostController';
import { postPostController } from './posts/postPostController';
//import { body } from 'express-validator';
import {inputValidation, postValidator} from '../validators'
//import { blogRepository } from '../repository/blogRepository';


export const postsRouter = Router({});

postsRouter.get('/', getPostController);
postsRouter.get('/:id', getPostByIdController);
postsRouter.delete('/:id', deletePostByIdController);
postsRouter.put('/:id', postValidator, inputValidation, putPostController);
postsRouter.post('/', postValidator, inputValidation, postPostController);