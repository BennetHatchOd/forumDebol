import {Router} from 'express';
import { getBlogController } from './blogs/getBlogController';
import { getBlogByIdController } from './blogs/getBlogByIdController';
import { deleteBlogByIdController } from './blogs/deleteBlogByIdController';
import { putBlogController } from './blogs/putBlogController';
import { postBlogController } from './blogs/postBlogController';
import { body } from 'express-validator';
import { authorizator } from './authorizator';
import {inputValidation, blogValidator} from './validators'

export const blogsRouter = Router({});

blogsRouter.get('/', authorizator, getBlogController);
blogsRouter.get('/:id', getBlogByIdController);
blogsRouter.delete('/:id', authorizator, deleteBlogByIdController);
blogsRouter.put('/:id', authorizator, blogValidator, inputValidation, putBlogController);
blogsRouter.post('/', authorizator, blogValidator, inputValidation, postBlogController);

  