import {Request, Response } from "express";
import {HTTP_STATUSES} from '../../setting';
import {db} from '../../db/db';
import {PostViewModel} from '../../types';

export const getPostController = (req: Request, res: Response<PostViewModel[]>) =>{
    const posts = db.posts;
    res.status(HTTP_STATUSES.OK_200).json(posts);

}
