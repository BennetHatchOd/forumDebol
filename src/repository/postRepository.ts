import { PostViewModel, PostInputModel, BlogViewModel } from "../types";
import {db} from "../db/db"
import { blogRepository } from "./blogRepository";

export const postRepository = {

 // searches for a post by id and returns the post or null
    find(id: string): PostViewModel | null {
        const searchItem: PostViewModel = db.posts.find(c => c.id === id);//Promise
        
        if(!searchItem) 
            return null;

    return searchItem;
    },
     
// creates new post and returns this post    
    create(createItem: PostInputModel): PostViewModel{

        let today = new Date();
        const id = today.getHours() * 1000000000 + today.getMinutes() * 1000000 + today.getSeconds() * 1000 + today.getMilliseconds();
        let blogName: string;
        try{
            const parentBlog: BlogViewModel | null = blogRepository.find(createItem.blogId); // Promise ?
            if(!parentBlog)
                throw `blog with ID: ${createItem.blogId} doesn't exist`;
            blogName = parentBlog.name; 
        }
        catch(error){
            console.log(error);
            blogName = "blog  doesn't exist";

        }

        const newPost: PostViewModel = {
          id: id.toString(),
          title: createItem.title,
          shortDescription: createItem.shortDescription,
          content: createItem.content,
          blogId: createItem.blogId,
          blogName: blogName
        }           
        db.posts.push(newPost); //Promise
        return newPost;
    },

    // deletes a post by Id, returns true if the post existed
    delete(id: string): boolean { 
        if(db.posts.findIndex(n => n.id === id) == -1)//Promise
            return false;
        db.posts = db.posts.filter(n => n.id !== id);//Promise
        return true;
    },
   
// edits a post by ID, if the post is not found returns false    
    edit(id: string, correctPost: PostInputModel): boolean{
        const foundPost: PostViewModel = db.posts.find(c => c.id === id);//Promise
        if(!foundPost)
            return false;

        foundPost.title = correctPost.title;
        foundPost.shortDescription = correctPost.shortDescription;
        foundPost.content = correctPost.content; 
        
        if (foundPost.blogId != correctPost.blogId){

            foundPost.blogId = correctPost.blogId;  
            try{
                const parentBlog: BlogViewModel | null = blogRepository.find(correctPost.blogId); // Promise ?
                if(!parentBlog)
                    throw `blog with ID: ${correctPost.blogId} doesn't exist`;
                foundPost.blogName = parentBlog.name; 
            }
            catch(error){
                console.log(error);
                foundPost.blogName = "blog  doesn't exist";
    
            }
        }
        
        return true;
    },

// returns list of all posts 
    view(): PostViewModel[]{
        const posts: PostViewModel[] = db.posts;//Promise
        return posts;
    }
 
}