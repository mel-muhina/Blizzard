const db = require("../../../database/connect");
const Question = require("../../../models/Question");

describe("Question model", () => {
  describe("showByEvent", () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it("Returns an instance of a question", async () => {
      const mockQuestion = {
        question_id: 1,
        question_description: "Mock question",
        answer_id: 1,
        event_id: 1,
        score: 10,
      };
      const mockId = 1;

      jest.spyOn(db, "query").mockResolvedValueOnce({ rows: [mockQuestion] });

      const result = await Question.showByEvent(mockId);

      expect(result).toBeInstanceOf(Question);
      expect(db.query).toBeCalledWith(
        "SELECT * FROM question WHERE event_id = $1",
        [mockId]
      );
    });

    it("Throws an error when no question is found", async () => {
      const mockId = 1;

      jest.spyOn(db, "query").mockResolvedValueOnce({ rows: [] });

      await expect(Question.showByEvent(mockId)).rejects.toThrow(
        "Error finding question"
      );

      expect(db.query).toBeCalledWith(
        "SELECT * FROM question WHERE event_id = $1",
        [mockId]
      );
    });
  });
});
