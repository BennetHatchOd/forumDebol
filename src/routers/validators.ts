import { Response, Request, NextFunction } from "express";
import {FieldValidationError, validationResult} from 'express-validator';
import {body} from 'express-validator'
import { blogRepository } from "../repository/blogRepository";
import { HTTP_STATUSES } from "../setting";

export const inputValidation = (req: Request, res: Response, next: NextFunction) =>{
     
     if(validationResult(req).isEmpty()){
            next();
            return;
     }
  
    const resultError = validationResult(req).array({ onlyFirstError: true }).map(item => {
        const err = item as unknown as FieldValidationError
        
        return{
            message: err.msg,
            field:   err.path,
        }

    });
    console.log(resultError);
    res.status(HTTP_STATUSES.BAD_REQUEST_400).send({errorsMessages: resultError});

}         

export const blogValidator = [
    body('name').trim()
                .isLength({min: 1, max: 15})
                .withMessage("Not correct name's length"),
    body('description').isLength({max: 500})
                        .withMessage("Not correct description's length"),
    body('websiteUrl').matches(/^https:\/\/([a-zA-Z0-9_-]+\.)+[a-zA-Z0-9_-]+(\/[a-zA-Z0-9_-]+)*\/?$/)
                    .withMessage("Not correct url adress"),
    body('websiteUrl').isLength({max: 100})
                    .withMessage("Not correct url's length"),
]

export const postValidator = [
    body('title').trim()
                .isLength({min: 1, max: 30})
                .withMessage("Not correct title's length"),
    body('shortDescription').isLength({min: 1, max: 100})
                            .withMessage("Not correct description's length"),
    body('content').isLength({min: 1, max: 100})
                    .withMessage("Not correct content's length"),
    body('blogId').custom(value => {
                        return blogRepository.find(value);
                        }).withMessage("BlogId isn't correct"),
]
