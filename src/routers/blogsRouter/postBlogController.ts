import { Request, Response } from "express";
import { HTTP_STATUSES } from "../../setting";
import {db} from '../../db/db';
import {BlogViewModel, BlogInputModelVideo, APIErrorResult } from '../../types';
import { isArray } from "util";



export const postBlogController = (req: Request<{},{},BlogInputModelVideo>, res: Response<BlogViewModel|APIErrorResult>) =>{
    
  // let errors: APIErrorResult = findErrorValidData(req.body);

    // if(errors.errorsMessages.length == 0){

        let today = new Date();
        const id = today.getHours() * 1000000000 + today.getMinutes() * 1000000 + today.getSeconds() * 1000 + today.getMilliseconds();
      
        const newBlog: BlogViewModel = {
          id: id.toString(),
          name: req.body.name,
          description: req.body.description,
          websiteUrl: req.body.websiteUrl
        }     
      
        db.blogs.push(newBlog);
        res
          .status(HTTP_STATUSES.CREATED_201)
          .json(newBlog);
        return;
//     }
// console.log(errors);
//     res
//       .status(SETTING.HTTP_STATUSES.BAD_REQUEST_400)
//       .json(errors);
      
//     return;
}
      
    // function findErrorValidData(body: BlogInputModelVideo){
     
    //   const errors :Errors  = {errorsMessages: []};

    //       if(typeof(body.title) != "string" || body.title.length == 0 || body.title.length > 40)
    //         errors.errorsMessages.push(SETTING.foundError.title);
            
    //     if(typeof(body.author) != "string" || body.author.length == 0 || body.author.length > 20)
    //         errors.errorsMessages.push(SETTING.foundError.author);

    //     if(Array.isArray(body.availableResolutions) && !body.availableResolutions.every(n => SETTING.RESOLUTIONS.includes(n)) || body.availableResolutions.length == 0)
    //         errors.errorsMessages.push(SETTING.foundError.resolutions);
        
    //     return errors;
    // }
