import { Request, Response } from "express";
import { HTTP_STATUSES } from "../../setting";
import {BlogViewModel, BlogInputModel, APIErrorResult } from '../../types';
import { blogRepository } from "../../repository/blogRepository";



export const postBlogController = (req: Request<{},{},BlogInputModel>, res: Response<BlogViewModel|APIErrorResult>) =>{
    
    const blog: BlogViewModel = blogRepository.create(req.body);  
    res.status(HTTP_STATUSES.CREATED_201).json(blog);
}
