import { Response } from "express";
import {HTTP_STATUSES} from '../../../setting';
import {BlogViewModel} from '../../../types';
import { blogRepository } from "../blogRepository";

export const getBlogController = async (res: Response<BlogViewModel []>) =>{
    const blogs: BlogViewModel[] = await blogRepository.view();
    res.status(HTTP_STATUSES.OK_200).json(blogs);

}
