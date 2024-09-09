import { Request, Response } from "express";
import { HTTP_STATUSES } from "../../../setting";
import {BlogViewModel, BlogInputModel, APIErrorResult } from '../../../types';
import { blogRepository } from "../blogRepository";



export const postBlogController = async (req: Request<{},{},BlogInputModel>, res: Response<BlogViewModel|APIErrorResult>) =>{
    
    const blog: BlogViewModel = await blogRepository.create(req.body);  
    res.status(HTTP_STATUSES.CREATED_201).json(blog);
}
