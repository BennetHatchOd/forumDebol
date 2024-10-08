import request from "supertest";
import {HTTP_STATUSES, URL_PATH} from '../../src/setting';
import {app} from '../../src/app'
import { BlogInputModel, BlogViewModel } from "../../src/types";

const Authorization = {
      value: "Basic YWRtaW46cXdlcnR5",
      false: "Df fef"
};

describe('/blogs', () => {

    beforeAll(async() =>{  // clear db-array
        await request(app).delete(URL_PATH.deleteAll);

    })

    
    it('should return 200 and empty array', async () => { // watch all blogs [get.blog]
        await request(app)
                .get(URL_PATH.blogs)
                .expect(HTTP_STATUSES.OK_200, []);    
    })
 
    
    let createdItem1: BlogViewModel;  

    it('should return 201 and created object', async () => { // create the fisrt new blog [post.blog]
        
        const data: BlogInputModel = {
                    name: "The first",
                    description: "Copolla",
                    websiteUrl: "https://google.dcfghgfhgc.com"
        }
        
        let createdResponse = await 
                request(app)
                .post(URL_PATH.blogs)
                .set("Authorization", Authorization.value)
                .send(data)
                .expect(HTTP_STATUSES.CREATED_201);

        createdItem1 = createdResponse.body;

        expect(createdItem1).toEqual({
            id: expect.any(String),
            name: data.name,
            description: data.description,
            websiteUrl: data.websiteUrl
        })
    })

    
    let createdItem2: BlogViewModel;

    it('should return 201 and created object', async () => { // create the second new blog [post.blog]

        const data: BlogInputModel = {
                    name: "The second",
                    description: "this blog by Tarantino",
                    websiteUrl: "https://google.dcfghgfhgc.com"
                }

        let createdResponse2 = await 
                request(app)
                .post(URL_PATH.blogs)
                .set("Authorization", Authorization.value)
                .send(data)
                .expect(HTTP_STATUSES.CREATED_201);

        createdItem2 = createdResponse2.body;

        expect(createdItem2).toEqual({
            id: expect.any(String),
            name: data.name,
            description: data.description,
            websiteUrl: data.websiteUrl
        })
    })

   
    let createdItem3: BlogViewModel;

    it('should return 201 and created object', async () => {  // create the third new blog [post.blog]
    
        const data: BlogInputModel = {
                name: "The thirt",
                description: "this blog not by Tarantino",
                websiteUrl: "https://google.com"
            }

        let createdResponse2 = await 
                request(app)
                .post(URL_PATH.blogs)
                .set("Authorization", Authorization.value)
                .send(data)
                .expect(HTTP_STATUSES.CREATED_201);

        createdItem3 = createdResponse2.body;

        expect(createdItem3).toEqual({
            id: expect.any(String),
            name: data.name,
            description: data.description,
            websiteUrl: data.websiteUrl
        })
    })

    
    it('should delete blog and return 204', async () => { // delete the third blog [delete.blog]
        await request(app)
            .delete(`${URL_PATH.blogs}/${createdItem3.id}`)
            .set("Authorization", Authorization.value)
            .expect(HTTP_STATUSES.NO_CONTENT_204);
    })

    
    it("shouldn't delete not exist blog and return 404", async () => { // delete not existing blog [delete.blog]
        await request(app)
            .delete(`${URL_PATH.blogs}/55`)
            .set("Authorization", Authorization.value)
            .expect(HTTP_STATUSES.NOT_FOUND_404);
    })
    
      
      it('should watch not exist blog and return 404', async () => { // watch non exist item of blogs [get.blog/hj]
        const res = await request(app)
                .get(`${URL_PATH.blogs}/mjjhjn`)
                .expect(HTTP_STATUSES.NOT_FOUND_404);    
        
    })

     
    it('should watch the blog return 200 and object', async () => { // watch the first blog  [get.blog/id]
        const res = await request(app)
                .get(`${URL_PATH.blogs}/${createdItem1.id}`)
                .expect(HTTP_STATUSES.OK_200);  
                  
                expect(res.body).toEqual(createdItem1);
                    
    })

    
    it('should return 200 and array of all object', async () => { // watch all blogs
        await request(app)
                .get(URL_PATH.blogs)
                .expect(HTTP_STATUSES.OK_200, [createdItem1, createdItem2 ]);    
        })

    
    it("shouldn't create a blog with incorrect datas and  return 400 and return object of errors", async () => { // create a bad blog [post.blog]
        
        const data: BlogInputModel = {
                    name: "",
                    description: "0123",
                    websiteUrl: "https://googlecom"
        }
        
        let res = await request(app)
                        .post(URL_PATH.blogs)
                        .set("Authorization", Authorization.value)
                        .send(data)
                        .expect(HTTP_STATUSES.BAD_REQUEST_400);

        expect(res.body).toEqual({
                "errorsMessages": [
                  {
                    "message": expect.any(String),
                    "field": "name"
                  },
                  {
                    "message": expect.any(String),
                    "field": "websiteUrl"
                  },
                ]
              })
    })

        
    it("shouldn't create a blog with incorrect datas and  return 400 and return object of errors", async () => { // create a bad blog [post.blog]
        
        const data: BlogInputModel = {
                    name: "1234567890123456",
                    description: "0123",
                    websiteUrl: "ttps://google123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890.com432"
                }
        
        let res = await request(app)
                        .post(URL_PATH.blogs)
                        .set("Authorization", Authorization.value)
                        .send(data)
                        .expect(HTTP_STATUSES.BAD_REQUEST_400);

        expect(res.body).toEqual({
                "errorsMessages": [
                    {
                    "message": expect.any(String),
                    "field": "name"
                    },
                    {
                    "message": expect.any(String),
                    "field": "websiteUrl"
                    },
                ]
                })
    })

 
    
    it('should edit the fisrt blog return 204', async () => { // edit the fisrt blog [put.blog]
        
        const data: BlogInputModel = {
            name: "Correct",
            description: "Gaidai",
            websiteUrl: "https://fig.dedf.cfghgfhgc.net/34"
        }

        await  request(app)
                .put(`${URL_PATH.blogs}/${createdItem1.id}`)
                .set("Authorization", Authorization.value)
                .send(data)
                .expect(HTTP_STATUSES.NO_CONTENT_204);
        
        createdItem1.name = data.name;
        createdItem1.description = data.description;
        createdItem1.websiteUrl = data.websiteUrl;
    })

    
    it('should edit the not exist blog and return 404', async () => { // edit the not exist blog [put.blog]

        const data: BlogInputModel = {
                    name: "The mistake",
                    description: "Gaidai",
                    websiteUrl: "https://fig.dedf.cfghgfhgc.net/34"
        }

        await request(app)
                .put(`${URL_PATH.blogs}/454`)
                .set("Authorization", Authorization.value)
                .send(data)
                .expect(HTTP_STATUSES.NOT_FOUND_404);
    })

    it('should return 200 and array of all object', async () => { // watch all blogs
        await request(app)
                .get(URL_PATH.blogs)
                .expect(HTTP_STATUSES.OK_200, [createdItem1, createdItem2 ]);    
        })


})
