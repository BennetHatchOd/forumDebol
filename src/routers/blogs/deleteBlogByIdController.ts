import { Request, Response } from "express";
import {HTTP_STATUSES} from '../../setting';
import { blogRepository } from "../../repository/blogRepository";

export const deleteBlogByIdController = (req: Request<{id: string}>, res: Response) =>{
    
    if(blogRepository.delete(req.params.id)){
        res.sendStatus(HTTP_STATUSES.NO_CONTENT_204);
        return;
    }
    
    res.sendStatus(HTTP_STATUSES.NOT_FOUND_404);
    }
  
    
