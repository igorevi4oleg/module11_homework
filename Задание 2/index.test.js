import { getMonth } from "./index";

describe("tests for check month name", () => {

    it("should be not a number", () => expect(getMonth('aSAsdsa')).toBe('Необходимо указать число'));
    it("should be incorrect input", () => expect(getMonth(13)).toBe('Число указано некорректно'));
    it("should be month name", () => expect(getMonth(12)).toBe('декабрь'));
});
