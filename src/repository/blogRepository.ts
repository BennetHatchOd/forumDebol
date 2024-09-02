import { BlogViewModel, BlogInputModel } from "../types";
import {db} from "../db/db"

export const blogRepository = {

 // searches for a blog by id and returns the blog or null
    find(id: string): BlogViewModel | null {
        const searchItem: BlogViewModel = db.blogs.find(c => c.id === id);//Promise
        
        if(!searchItem) 
            return null;

    return searchItem;
    },
 
// creates new blog and returns this blog    
    create(createItem: BlogInputModel): BlogViewModel{

        let today = new Date();
        const id = today.getHours() * 1000000000 + today.getMinutes() * 1000000 + today.getSeconds() * 1000 + today.getMilliseconds();
      
        const newBlog: BlogViewModel = {
          id: id.toString(),
          name: createItem.name,
          description: createItem.description,
          websiteUrl: createItem.websiteUrl
        }           
        db.blogs.push(newBlog); //Promise
        return newBlog;
    },


// deletes a blog by Id, returns true if the blog existed   
    delete(id: string): boolean { 
        if(db.blogs.findIndex(n => n.id === id) == -1)//Promise
            return false;
        db.blogs = db.blogs.filter(n => n.id !== id);//Promise
        return true;
    },

// edits a blog by ID, if the blog is not found returns false    
    edit(id: string, correctBlog: BlogInputModel): boolean{
        const foundBlog: BlogViewModel = db.blogs.find(c => c.id === id);//Promise
        if(!foundBlog)
            return false;

        foundBlog.name = correctBlog.name;
        foundBlog.description = correctBlog.description;
        foundBlog.websiteUrl = correctBlog.websiteUrl; 
        return true;
    },

// returns list of all blogs    
    view(): BlogViewModel[]{
        const blogs: BlogViewModel[] = db.blogs;//Promise
        return blogs;
    }
 
}