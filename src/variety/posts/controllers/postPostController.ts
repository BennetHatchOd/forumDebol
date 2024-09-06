import { Request, Response } from "express";
import { HTTP_STATUSES } from "../../../setting";
import {PostViewModel, PostInputModel, APIErrorResult } from '../../../types';
import { postRepository } from "../postRepository";

export const postPostController = async (req: Request<{},{},PostInputModel>, res: Response<PostViewModel|APIErrorResult>) =>{
  
    const post: PostViewModel = await postRepository.create(req.body);  
    res.status(HTTP_STATUSES.CREATED_201).json(post);

}