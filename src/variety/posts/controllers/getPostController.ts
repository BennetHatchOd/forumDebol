import {Response } from "express";
import {HTTP_STATUSES} from '../../../setting';
import { postRepository } from "../postRepository";
import {PostViewModel} from '../../../types';

export const getPostController = async (res: Response<PostViewModel[]>) =>{
    const posts = await postRepository.view();
    res.status(HTTP_STATUSES.OK_200).json(posts);

}
