import { getMonth } from "./index";

describe("tests for check month name", () => {

    it("should be not a number", () => expect(getMonth('aSAsdsa')).toBe('Необходимо указать число'));
});