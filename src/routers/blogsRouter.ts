import {Router} from 'express';
import { getBlogController } from './blogsRouter/getBlogController';
import { getIdBlogController } from './blogsRouter/getIdBlogController';
import { deleteIdBlogController } from './blogsRouter/deleteIdBlogController';
import { putBlogController } from './blogsRouter/putBlogController';
import { postBlogController } from './blogsRouter/postBlogController';


export const blogsRouter = Router({});

blogsRouter.get('/', getBlogController);
blogsRouter.get('/:id', getIdBlogController);
blogsRouter.delete('/:id', deleteIdBlogController);
blogsRouter.put('/:id', putBlogController);
blogsRouter.post('/', postBlogController);