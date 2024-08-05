const db = require("../../../database/connect");
const User = require("../../../models/User");

describe("User model", () => {
  describe("create", () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it("Returns a new User instance", async () => {
      const mockUser = {
        username: "username",
        password: "password",
        highscore: 0,
        role: "user",
      };

      const mockArguments = { username: "username", password: "password" };

      jest.spyOn(db, "query").mockResolvedValueOnce({ rows: [mockUser] });

      const result = await User.create(mockArguments);

      expect(result).toBeInstanceOf(User);
      expect(db.query).toHaveBeenCalledTimes(1);
      expect(db.query).toHaveBeenCalledWith(
        "INSERT INTO users (username , password , highscore , role) VALUES ($1 , $2 , 0 , 'user') RETURNING *",
        ["username", "password"]
      );
    });

    it("Throws an error when no username is passed in", async () => {
      await expect(User.create({ password: "password" })).rejects.toThrow(
        "Please provide required fields"
      );
    });

    it("Returns a new User instance", async () => {
      const mockUser = {
        username: "username",
        password: "password",
        highscore: 0,
        role: "user",
      };

      const mockArguments = { username: "username", password: "password" };

      jest.spyOn(db, "query").mockResolvedValueOnce({ rows: [] });

      await expect(User.create(mockArguments)).rejects.toThrow(
        "Unable to authenticate user"
      );
    });
  });
});
