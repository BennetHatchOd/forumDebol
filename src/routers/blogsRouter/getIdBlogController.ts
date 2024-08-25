import { Request, Response } from "express";
import {db} from '../../db/db';
import {HTTP_STATUSES} from '../../setting';
import {BlogViewModel } from '../../types';

export const getIdBlogController = (req: Request<{id: string}>, res: Response<BlogViewModel >) =>{
   
    
    const foundItem: BlogViewModel = db.blogs.find(c => c.id === +req.params.id);
    
    if(!foundItem) {
        res.sendStatus(HTTP_STATUSES.NOT_FOUND_404);
        return;
    }
    res.status(HTTP_STATUSES.OK_200);
    res.json(foundItem);
}