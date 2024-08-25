import { Request, Response } from "express";
import {db} from '../../db/db';
import { HTTP_STATUSES } from "../../setting";
import {PostViewModel, PostInputModel, APIErrorResult } from '../../types';

export const putPostController = (req: Request<{id: string},{},PostInputModel>, res: Response<APIErrorResult>) =>{
    
    const foundPost: PostViewModel = db.posts.find(c => c.id === +req.params.id);
      if(!foundPost) {
        res.sendStatus(HTTP_STATUSES.NOT_FOUND_404);
        return;
      }
      
    // let errors: APIErrorResult = findErrorValidData(req.body);

    // if(errors.errorsMessages.length == 0){

    foundPost.title =	req.body.title
    foundPost.shortDescription = req.body.shortDescription
    foundPost.content = req.body.content
    foundPost.blogId =	req.body.blogId
    foundPost.blogName =	req.body.blogId
       
    res.sendStatus(HTTP_STATUSES.NO_CONTENT_204);
    
  }

//   res
//     .status(SETTING.HTTP_STATUSES.BAD_REQUEST_400)
//     .send(errors);
      
//     return;
// }
      

//     function findErrorValidData(body: PostInputModel){

//         const errors :APIErrorResult = {errorsMessages: []};

//         if(typeof(body.title) != "string" || body.title.length == 0 || body.title.length > 40)
//             errors.errorsMessages.push(SETTING.foundError.title);
            
//         if(typeof(body.author) != "string" || body.author.length == 0 || body.author.length > 20)
//             errors.errorsMessages.push(SETTING.foundError.author);

//         if(Array.isArray(body.availableResolutions) && !body.availableResolutions.every(n => SETTING.RESOLUTIONS.includes(n)) || body.availableResolutions.length == 0){
//             errors.errorsMessages.push(SETTING.foundError.resolutions);
//         } 
//         if(typeof(body.canBeDownloaded) != "boolean")
//             errors.errorsMessages.push(SETTING.foundError.canBeDownloaded);


//         if (body.minAgeRestriction != null && (typeof(+body.minAgeRestriction) != "number" || +body.minAgeRestriction > 18 || +body.minAgeRestriction < 1))
//           errors.errorsMessages.push(SETTING.foundError.minAgeRestriction);
        
        
//         if(typeof(body.publicationDate) != "string" || isNaN(Date.parse(body.publicationDate)))
//             errors.errorsMessages.push(SETTING.foundError.publicationDate);

//         return errors;
//     }
