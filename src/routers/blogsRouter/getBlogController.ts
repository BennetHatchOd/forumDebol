import { Request, Response } from "express";
import {HTTP_STATUSES} from '../../setting';
import {db} from '../../db/db';
import {BlogViewModel} from '../../types';

export const getBlogController = (req: Request, res: Response<BlogViewModel []>) =>{
    const videos = db.videos;
    res.status(HTTP_STATUSES.OK_200).json(videos);

}
