import { Request, Response } from "express";
import { HTTP_STATUSES } from "../../setting";
import {PostViewModel, PostInputModel, APIErrorResult } from '../../types';
import { postRepository } from "../../repository/postRepository";

export const postPostController = (req: Request<{},{},PostInputModel>, res: Response<PostViewModel|APIErrorResult>) =>{
  
    const post: PostViewModel = postRepository.create(req.body);  
    res.status(HTTP_STATUSES.CREATED_201).json(post);

}