import { Request, Response } from "express";
import { HTTP_STATUSES } from "../../setting";
import { postRepository } from "../../repository/postRepository";
import {PostInputModel, APIErrorResult } from '../../types';

export const putPostController = (req: Request<{id: string},{},PostInputModel>, res: Response<APIErrorResult>) =>{
    
    if(postRepository.edit(req.params.id, req.body))
        res.sendStatus(HTTP_STATUSES.NO_CONTENT_204);
    else
        res.sendStatus(HTTP_STATUSES.NOT_FOUND_404);
      
}