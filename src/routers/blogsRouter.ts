import {Router} from 'express';
import { getBlogController } from './blogs/getBlogController';
import { getBlogByIdController } from './blogs/getBlogByIdController';
import { deleteBlogByIdController } from './blogs/deleteBlogByIdController';
import { putBlogController } from './blogs/putBlogController';
import { postBlogController } from './blogs/postBlogController';
import { body } from 'express-validator';
import {inputValidation, blogValidator} from './validators'

export const blogsRouter = Router({});

blogsRouter.get('/', getBlogController);
blogsRouter.get('/:id', getBlogByIdController);
blogsRouter.delete('/:id', deleteBlogByIdController);
blogsRouter.put('/:id', blogValidator, inputValidation, putBlogController);
blogsRouter.post('/', blogValidator, inputValidation, postBlogController);

  