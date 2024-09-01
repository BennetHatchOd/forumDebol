import { Request, Response } from "express";
import { HTTP_STATUSES } from "../../setting";
import {PostViewModel, PostInputModel, APIErrorResult } from '../../types';
import { postRepository } from "../../repository/postRepository";

export const postPostController = (req: Request<{},{},PostInputModel>, res: Response<PostViewModel|APIErrorResult>) =>{
  
    // const id: string = postRepository.create(req.body);  // for my tests
    // const blog: PostViewModel|null = postRepository.find(id);  
    // if(!blog){
    //     res.sendStatus(HTTP_STATUSES.NOT_FOUND_404);
    //     return;
    // } 
    // res.status(HTTP_STATUSES.CREATED_201).json(blog);
  
    postRepository.create(req.body);                 //for product
    res.sendStatus(HTTP_STATUSES.CREATED_201);
}