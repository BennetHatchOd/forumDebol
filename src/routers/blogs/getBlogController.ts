import { Request, Response } from "express";
import {HTTP_STATUSES} from '../../setting';
import {BlogViewModel} from '../../types';
import { blogRepository } from "../../repository/blogRepository";

export const getBlogController = (req: Request, res: Response<BlogViewModel []>) =>{
    const blogs: BlogViewModel[] = blogRepository.view();
    res.status(HTTP_STATUSES.OK_200).json(blogs);

}
