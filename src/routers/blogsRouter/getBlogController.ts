import { Request, Response } from "express";
import {HTTP_STATUSES} from '../../setting';
import {db} from '../../db/db';
import {BlogViewModel} from '../../types';

export const getBlogController = (req: Request, res: Response<BlogViewModel []>) =>{
    const blogs: BlogViewModel[] = db.blogs;
    res.status(HTTP_STATUSES.OK_200).json(blogs);

}
