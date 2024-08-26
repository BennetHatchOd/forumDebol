import { BlogViewModel, BlogInputModelVideo } from "../types";
import {db} from "../db/db"

export const blogRepository = {
    
    find(id: string): BlogViewModel | null {
        const searchItem: BlogViewModel = db.blogs.find(c => c.id === id);//Promise
        
        if(!searchItem) 
            return null;

    return searchItem;
    },
        
    create(createItem: BlogInputModelVideo): string{

        let today = new Date();
        const id = today.getHours() * 1000000000 + today.getMinutes() * 1000000 + today.getSeconds() * 1000 + today.getMilliseconds();
      
        const newBlog: BlogViewModel = {
          id: id.toString(),
          name: createItem.name,
          description: createItem.description,
          websiteUrl: createItem.websiteUrl
        }           
        db.blogs.push(newBlog); //Promise
        return id.toString();
    },

    delete(id: string): boolean { 
        if(db.blogs.findIndex(n => n.id === id) == -1)//Promise
            return false;
        db.blogs = db.blogs.filter(n => n.id !== id);//Promise
        return true;
    },
    
    edit(id: string, correctBlog: BlogInputModelVideo): boolean{
        const foundBlog: BlogViewModel = db.blogs.find(c => c.id === id);//Promise
        if(!foundBlog)
            return false;

        foundBlog.name = correctBlog.name;
        foundBlog.description = correctBlog.description;
        foundBlog.websiteUrl = correctBlog.websiteUrl; 
        return true;
    },

    view(): BlogViewModel[]{
        const blogs: BlogViewModel[] = db.blogs;//Promise
        return blogs;
    }
 
}