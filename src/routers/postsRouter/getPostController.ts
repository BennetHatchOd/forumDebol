import { Request, Response } from "express";
import {SETTING, HTTP_STATUSES} from '../../setting';
import {db} from '../../db/db';
import {PostViewModel} from '../../types';

export const getPostController = (req: Request, res: Response<PostViewModel[]>) =>{
    const videos = db.videos;
    res.status(HTTP_STATUSES.OK_200).json(videos);

}
