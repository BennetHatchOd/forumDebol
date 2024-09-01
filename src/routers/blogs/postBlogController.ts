import { Request, Response } from "express";
import { HTTP_STATUSES } from "../../setting";
import {BlogViewModel, BlogInputModel, APIErrorResult } from '../../types';
import { blogRepository } from "../../repository/blogRepository";



export const postBlogController = (req: Request<{},{},BlogInputModel>, res: Response<BlogViewModel|APIErrorResult>) =>{
    
    const id: string = blogRepository.create(req.body);  // for my tests
    const blog: BlogViewModel|null = blogRepository.find(id);  
    if(!blog){
        res.sendStatus(HTTP_STATUSES.NOT_FOUND_404);
        return;
    } 
    res.status(HTTP_STATUSES.CREATED_201).json(blog);
  
    // blogRepository.create(req.body);                 //for product
    // res.sendStatus(HTTP_STATUSES.CREATED_201);
}
