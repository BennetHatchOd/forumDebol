import { Request, Response } from "express";

import {HTTP_STATUSES} from '../setting';
import { blogRepository } from "../repository/blogRepository";
import { postRepository } from "../repository/postRepository";

export const deleteAllController = (req: Request, res: Response) =>{
    blogRepository.clear()
    postRepository.clear();
    
    res.sendStatus(HTTP_STATUSES.NO_CONTENT_204);

}