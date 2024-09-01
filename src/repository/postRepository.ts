import { PostViewModel, PostInputModel, BlogViewModel } from "../types";
import {db} from "../db/db"
import { blogRepository } from "./blogRepository";

export const postRepository = {
    
    find(id: string): PostViewModel | null {
        const searchItem: PostViewModel = db.posts.find(c => c.id === id);//Promise
        
        if(!searchItem) 
            return null;

    return searchItem;
    },
        
    create(createItem: PostInputModel): string{

        let today = new Date();
        const id = today.getHours() * 1000000000 + today.getMinutes() * 1000000 + today.getSeconds() * 1000 + today.getMilliseconds();
        
        const parentBlog: BlogViewModel | null = blogRepository.find(createItem.blogId); // Promise ?
        const blogName: string = (parentBlog === null ? "blog not exist" : parentBlog.name); 

        const newPost: PostViewModel = {
          id: id.toString(),
          title: createItem.title,
          shortDescription: createItem.shortDescription,
          content: createItem.content,
          blogId: createItem.blogId,
          blogName: blogName
        }           
        db.posts.push(newPost); //Promise
        return id.toString();
    },

    delete(id: string): boolean { 
        if(db.posts.findIndex(n => n.id === id) == -1)//Promise
            return false;
        db.posts = db.posts.filter(n => n.id !== id);//Promise
        return true;
    },
    
    edit(id: string, correctPost: PostInputModel): boolean{
        const foundPost: PostViewModel = db.posts.find(c => c.id === id);//Promise
        if(!foundPost)
            return false;

        foundPost.title = correctPost.title;
        foundPost.shortDescription = correctPost.shortDescription;
        foundPost.content = correctPost.content; 
        
        if (foundPost.blogId != correctPost.blogId){
            foundPost.blogId = correctPost.blogId;                                             //?
            const parentBlog: BlogViewModel | null = blogRepository.find(correctPost.blogId); //Promise
            foundPost.blogName = (parentBlog === null ? "blog not exist" : parentBlog.name); 
        }
    
        return true;
    },

    view(): PostViewModel[]{
        const posts: PostViewModel[] = db.posts;//Promise
        return posts;
    }
 
}