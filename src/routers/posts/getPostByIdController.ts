import { Request, Response } from "express";
import { postRepository } from "../../repository/postRepository";
import {HTTP_STATUSES} from '../../setting';
import {PostViewModel} from '../../types';

export const getPostByIdController = (req: Request<{id: string}>, res: Response<PostViewModel>) =>{
   
    
    const foundPost: PostViewModel | null = postRepository.find(req.params.id);
    
    if(!foundPost)
        res.sendStatus(HTTP_STATUSES.NOT_FOUND_404);
    else
        res.status(HTTP_STATUSES.OK_200).json(foundPost);
}