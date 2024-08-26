import {Router} from 'express';
import { getBlogController } from './blogsRouter/getBlogController';
import { getBlogByIdController } from './blogsRouter/getBlogByIdController';
import { deleteBlogByIdController } from './blogsRouter/deleteBlogByIdController';
import { putBlogController } from './blogsRouter/putBlogController';
import { postBlogController } from './blogsRouter/postBlogController';

export const blogsRouter = Router({});

blogsRouter.get('/', getBlogController);
blogsRouter.get('/:id', getBlogByIdController);
blogsRouter.delete('/:id', deleteBlogByIdController);
blogsRouter.put('/:id', putBlogController);
blogsRouter.post('/', postBlogController);