import { Request, Response } from "express";
import { HTTP_STATUSES } from "../../setting";
import { blogRepository } from "../../repository/blogRepository";
import {BlogInputModelVideo, APIErrorResult } from '../../types';

export const putBlogController = (req: Request<{id: string},{},BlogInputModelVideo>, res: Response<APIErrorResult>) =>{
    
    if(blogRepository.edit(req.params.id, req.body))
        res.sendStatus(HTTP_STATUSES.NO_CONTENT_204);
    else
        res.sendStatus(HTTP_STATUSES.NOT_FOUND_404);
      
}
