import { Request, Response } from "express";

import { HTTP_STATUSES } from "./setting";
import { blogRepository } from "./variety/blogs/blogRepository";
import { postRepository } from "./variety/posts/postRepository";

export const deleteAllController = async (req: Request, res: Response) =>{
    await blogRepository.clear()
    await postRepository.clear();
    
    res.sendStatus(HTTP_STATUSES.NO_CONTENT_204);

}