import { Request, Response } from "express";
import {db} from '../../db/db';
import * as SETTING from '../../setting';
import {PostViewModel, PostInputModel, APIErrorResult } from '../../types';
import { isArray } from "util";



export const postPostController = (req: Request<{},{},PostInputModel>, res: Response<PostViewModel|APIErrorResult>) =>{
    
  let errors: APIErrorResult = findErrorValidData(req.body);

    if(errors.errorsMessages.length == 0){

        let today = new Date();
        let tomorrow = new Date(); 
        tomorrow.setDate(tomorrow.getDate() + 1);

        const id = today.getHours() * 1000000000 + today.getMinutes() * 1000000 + today.getSeconds() * 1000 + today.getMilliseconds();
      
        const newVideo: PostViewModel = {
          id: id,
          title:	req.body.title,
          author:	req.body.author,
          availableResolutions: [...req.body.availableResolutions],
          canBeDownloaded:	false,
          minAgeRestriction: null,
          createdAt: today.toISOString(),
          publicationDate: tomorrow.toISOString()
        }      
      
        db.videos.push(newVideo);
        res
          .status(SETTING.HTTP_STATUSES.CREATED_201)
          .json(newVideo);
        return;
    }
console.log(errors);
    res
      .status(SETTING.HTTP_STATUSES.BAD_REQUEST_400)
      .json(errors);
      
    return;
}
      
    function findErrorValidData(body: PostInputModel){
     
      const errors :APIErrorResult  = {errorsMessages: []};

          if(typeof(body.title) != "string" || body.title.length == 0 || body.title.length > 40)
            errors.errorsMessages.push(SETTING.foundError.title);
            
        if(typeof(body.author) != "string" || body.author.length == 0 || body.author.length > 20)
            errors.errorsMessages.push(SETTING.foundError.author);

        if(Array.isArray(body.availableResolutions) && !body.availableResolutions.every(n => SETTING.RESOLUTIONS.includes(n)) || body.availableResolutions.length == 0)
            errors.errorsMessages.push(SETTING.foundError.resolutions);
        
        return errors;
    }
