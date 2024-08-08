const { resetTestDB } = require("./config.js");
const request = require("supertest");
const app = require("../../app.js");

describe("Game API endpoints", () => {
  let api;

  beforeAll(() => {
    api = app.listen(5000, () => {
      console.log("Test server running on port 5000");
    });
  });

  //Close our test App
  afterAll((done) => {
    api.close(done);
  });

  describe("GET /", () => {
    beforeEach(async () => {
      await resetTestDB();
    });
    it("responds to GET / with a name and description", async () => {
      //Arrange & Act
      const response = await request(api).get("/");

      expect(response.statusCode).toBe(200);
      expect(response.body.name).toBe("History game");
      expect(response.body.description).toBe(
        "Learn by being an advisor to the great figures of history"
      );
    });
  });

  describe("/characters", () => {
    beforeEach(async () => {
      await resetTestDB();
    });

    it("Responds GET / with a 200 code of an Array", async () => {
      const response = await request(api).get("/characters/");

      expect(response.statusCode).toBe(200);
      expect(response.body.length).toBeGreaterThan(0);
      expect(response.body).toBeInstanceOf(Array);
    });

    it("GET /:id with a 200 code with Julius Ceasers character", async () => {
      const response = await request(api).get("/characters/1");

      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty("character_name", "Julius Caesar");
    });

    it("GET /:id responds with 404 when no character is found", async () => {
      const response = await request(api).get("/characters/4");

      expect(response.statusCode).toBe(404);
      expect(response.body).toHaveProperty(
        "error",
        "Unable to locate chosen character."
      );
    });
  });

  describe("/questions", () => {
    beforeEach(async () => {
      await resetTestDB();
    });

    it("responds to GET /questions with question with the id", async () => {
      const response = await request(api).get("/questions/1");

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("question_id", 1);
    });

    it("responds to GET /questions with a 404", async () => {
      const response = await request(api).get("/questions/5");

      expect(response.status).toBe(404);
      expect(response.body).toHaveProperty("error", "Unable to find question");
    });
  });
});
