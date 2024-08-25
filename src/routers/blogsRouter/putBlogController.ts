import { Request, Response } from "express";
import { HTTP_STATUSES } from "../../setting";
import {db} from '../../db/db';
import {BlogViewModel, BlogInputModelVideo, APIErrorResult } from '../../types';

export const putBlogController = (req: Request<{id: string},{},BlogInputModelVideo>, res: Response<APIErrorResult>) =>{
    
  const foundBlog: BlogViewModel = db.blogs.find(c => c.id === +req.params.id);
    if(!foundBlog) {
      res.sendStatus(HTTP_STATUSES.NOT_FOUND_404);
      return;
    }
    
  // let errors: Errors = findErrorValidData(req.body);

  // if(errors.errorsMessages.length == 0){
 
  foundBlog.name = req.body.name;
  foundBlog.description = req.body.description;
  foundBlog.websiteUrl = req.body.websiteUrl; 
    
      res
      .sendStatus(HTTP_STATUSES.NO_CONTENT_204);
    // return;
  }

//   res
//     .status(SETTING.HTTP_STATUSES.BAD_REQUEST_400)
//     .send(errors);
      
//     return;
// }
      

//     function findErrorValidData(body: BlogInputModelVideo){

//         const errors :Errors = {errorsMessages: []};

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
