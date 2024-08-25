import { Request, Response } from "express";
import {db} from '../../db/db';
import {HTTP_STATUSES} from '../../setting';
import {PostViewModel} from '../../types';

export const getIdPostController = (req: Request<{id: string}>, res: Response<PostViewModel>) =>{
   
    
    const foundItem: PostViewModel = db.posts.find(c => c.id === +req.params.id);
    
    if(!foundItem) {
        res.sendStatus(HTTP_STATUSES.NOT_FOUND_404);
        return;
    }
    res.status(HTTP_STATUSES.OK_200);
    res.json(foundItem);
}