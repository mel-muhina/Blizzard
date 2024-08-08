const { resetTestDB } = require("./config.js");
const request = require("supertest");
const app = require("../../app.js");

describe("Game API endpoints", () => {
  let api;

  beforeEach(async () => {
    await resetTestDB();
  });

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
});
