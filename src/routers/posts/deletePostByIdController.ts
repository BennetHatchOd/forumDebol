import { Request, Response } from "express";
import {HTTP_STATUSES} from '../../setting';
import { postRepository } from "../../repository/postRepository";

export const deletePostByIdController = (req: Request<{id: string}>, res: Response) =>{
    
    if(postRepository.delete(req.params.id))
        res.sendStatus(HTTP_STATUSES.NO_CONTENT_204);
    else
        res.sendStatus(HTTP_STATUSES.NOT_FOUND_404);
    }