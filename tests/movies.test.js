const request = require("supertest");
const app = require("../app");

describe("GET /api/movies", () => {
    it("should return all movies", async () => {
    
        const response = await request(app).get("/api/movies");
        
        expect(response.headers["content-type"]).toMatch(/json/);
        expect(response.status).toEqual(200);

        console.log =(response);
    });   
})

// Challenge

describe("GET /api/movies/:id", () => {
    it("should return status 200 for id 1", async () => {
    
        const response = await request(app).get("/api/movies/1");
        
        expect(response.status).toEqual(200);

    });
    
    it("should return a JSON format for id 1", async () => {
    
        const response = await request(app).get("/api/movies/1");
        
        expect(response.headers["content-type"]).toMatch(/json/);

    });
    
    it("should return status 404 for id 1", async () => {
    
        const response = await request(app).get("/api/movies/0");
        
        expect(response.status).toEqual(404);

    }); 
});
