describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });

        it("should take two numbers as arguments", () => {
            expect(divide.length).toBe(2);
        });

        it("should return the division of the two numbers", () => {
            expect(divide(10, 2)).toEqual(5);
            expect(divide(44, 11)).toEqual(4);
            expect(divide(100, 50)).toEqual(2);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(1)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 1)).toEqual(undefined);
        });

        it("should return undefined if any of the arguments is not a number", () => {
            expect(divide(10, "2")).toEqual(undefined);
            expect(divide("44", 11)).toEqual(undefined);
            expect(divide("100", "50")).toEqual(undefined);
        });
    });
});