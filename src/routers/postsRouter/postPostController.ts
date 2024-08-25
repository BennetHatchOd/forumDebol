import { Request, Response } from "express";
import {db} from '../../db/db';
import { HTTP_STATUSES } from "../../setting";
import {PostViewModel, PostInputModel, APIErrorResult } from '../../types';
import { isArray } from "util";



export const postPostController = (req: Request<{},{},PostInputModel>, res: Response<PostViewModel|APIErrorResult>) =>{
    
  // let errors: APIErrorResult = findErrorValidData(req.body);

  //   if(errors.errorsMessages.length == 0){

        let today = new Date();
        const id: number = today.getHours() * 1000000000 + today.getMinutes() * 1000000 + today.getSeconds() * 1000 + today.getMilliseconds();
      
        const newPost: PostViewModel = {
          id: id.toString(),
          title:	req.body.title,
          shortDescription: req.body.shortDescription,
          content: req.body.content,
          blogId:	req.body.blogId,
          blogName:	req.body.blogId
        }      
      
        db.posts.push(newPost);
        res
          .status(HTTP_STATUSES.CREATED_201)
          .json(newPost);
        // return;
    }
// console.log(errors);
//     res
//       .status(SETTING.HTTP_STATUSES.BAD_REQUEST_400)
//       .json(errors);
      
//     return;
// }
      
//     function findErrorValidData(body: PostInputModel){
     
//       const errors :APIErrorResult  = {errorsMessages: []};

//           if(typeof(body.title) != "string" || body.title.length == 0 || body.title.length > 40)
//             errors.errorsMessages.push(SETTING.foundError.title);
            
//         if(typeof(body.author) != "string" || body.author.length == 0 || body.author.length > 20)
//             errors.errorsMessages.push(SETTING.foundError.author);

//         if(Array.isArray(body.availableResolutions) && !body.availableResolutions.every(n => SETTING.RESOLUTIONS.includes(n)) || body.availableResolutions.length == 0)
//             errors.errorsMessages.push(SETTING.foundError.resolutions);
        
//         return errors;
//     }
