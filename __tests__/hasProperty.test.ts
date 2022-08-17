import { hasProperty } from '../src/index';
//Define test object
const TestObject = {
    string: "a",
    number: 45,
    boolean: true,
    null: null,
    array: ["a", "b", "c"],
    object: {
        string: "a",
        number: 45,
        boolean: true,
        null: null,
        array: ["a", "b", "c"],
        object: {
            string: "a",
            number: 45,
            boolean: true,
            null: null,
            array: ["a", "b", "c"],
            object: {
                string: "a",
                number: 45,
                boolean: true,
                null: null
            }
        }
    }
};

describe("hasProperty", () => {
    test("Check hasProperty methods", () => {
        expect(hasProperty(TestObject, "string")).toBe(true);
        expect(hasProperty(TestObject, "number")).toBe(true);
        expect(hasProperty(TestObject, "boolean")).toBe(true);
        expect(hasProperty(TestObject, "null")).toBe(true);
        expect(hasProperty(TestObject, "array")).toBe(true);
        expect(hasProperty(TestObject, "array.0")).toBe(true);
        expect(hasProperty(TestObject, "array.1")).toBe(true);
        expect(hasProperty(TestObject, "array.2")).toBe(true);
        expect(hasProperty(TestObject, "object")).toBe(true);
        expect(hasProperty(TestObject, "object.string")).toBe(true);
        expect(hasProperty(TestObject, "object.number")).toBe(true);
        expect(hasProperty(TestObject, "object.boolean")).toBe(true);
        expect(hasProperty(TestObject, "object.null")).toBe(true);
        expect(hasProperty(TestObject, "object.array")).toBe(true);
        expect(hasProperty(TestObject, "object.array.0")).toBe(true);
        expect(hasProperty(TestObject, "object.array.1")).toBe(true);
        expect(hasProperty(TestObject, "object.array.2")).toBe(true);
        expect(hasProperty(TestObject, "object.object")).toBe(true);
        expect(hasProperty(TestObject, "object.object.string")).toBe(true);
        expect(hasProperty(TestObject, "object.object.number")).toBe(true);
        expect(hasProperty(TestObject, "object.object.boolean")).toBe(true);
        expect(hasProperty(TestObject, "object.object.null")).toBe(true);
        expect(hasProperty(TestObject, "object.object.array")).toBe(true);
        expect(hasProperty(TestObject, "object.object.array.0")).toBe(true);
        expect(hasProperty(TestObject, "object.object.array.1")).toBe(true);
        expect(hasProperty(TestObject, "object.object.array.2")).toBe(true);
        expect(hasProperty(TestObject, "object.object.object")).toBe(true);
        expect(hasProperty(TestObject, "object.object.object.string")).toBe(true);
        expect(hasProperty(TestObject, "object.object.object.number")).toBe(true);
        expect(hasProperty(TestObject, "object.object.object.boolean")).toBe(true);
        expect(hasProperty(TestObject, "object.object.object.null")).toBe(true);

        //False exectations
        expect(hasProperty(TestObject, "string.1")).toBe(false);
        expect(hasProperty(TestObject, "number2")).toBe(false);
        expect(hasProperty(TestObject, "boolea")).toBe(false);
        expect(hasProperty(TestObject, "null.32")).toBe(false);
        expect(hasProperty(TestObject, "array2")).toBe(false);
        expect(hasProperty(TestObject, "array.3")).toBe(false);
        expect(hasProperty(TestObject, "array.6")).toBe(false);
        expect(hasProperty(TestObject, "array.9")).toBe(false);
        expect(hasProperty(TestObject, "object2")).toBe(false);
        expect(hasProperty(TestObject, "object.string4")).toBe(false);
        expect(hasProperty(TestObject, "object.number.2")).toBe(false);
        expect(hasProperty(TestObject, "object.boolean4")).toBe(false);
        expect(hasProperty(TestObject, "object.null2")).toBe(false);
        expect(hasProperty(TestObject, "object.array3")).toBe(false);
        expect(hasProperty(TestObject, "object.array.12")).toBe(false);
        expect(hasProperty(TestObject, "object.array.26")).toBe(false);
        expect(hasProperty(TestObject, "object.array.92")).toBe(false);
        expect(hasProperty(TestObject, "object.object.2")).toBe(false);
        expect(hasProperty(TestObject, "object.object.stringy")).toBe(false);
        expect(hasProperty(TestObject, "object.object.numbery")).toBe(false);
        expect(hasProperty(TestObject, "object.object.boolean3")).toBe(false);
        expect(hasProperty(TestObject, "object.object.null.2")).toBe(false);
        expect(hasProperty(TestObject, "object.object.array.4")).toBe(false);
        expect(hasProperty(TestObject, "object.object.array.22")).toBe(false);
        expect(hasProperty(TestObject, "object.object.array.43")).toBe(false);
        expect(hasProperty(TestObject, "object.object.array.y")).toBe(false);
        expect(hasProperty(TestObject, "object.object.object.a")).toBe(false);
        expect(hasProperty(TestObject, "object.object.object.string.a")).toBe(false);
        expect(hasProperty(TestObject, "object.object.object.number.a")).toBe(false);
        expect(hasProperty(TestObject, "object.object.object.boolean.a")).toBe(false);
        expect(hasProperty(TestObject, "object.object.object.null.a")).toBe(false);

    });
});