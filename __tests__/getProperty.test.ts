import { getProperty } from '../src/index';
//Define test object
const TestObject = {
    string: "a",
    number: 45,
    boolean: true,
    null: null,
    array: ["a", "b", "c"],
    complexArray: [
        {
            string: "a",
            number: 45,
            boolean: true,
            null: null
        },
        {
            string: "b",
            number: 46,
            boolean: true,
            null: null
        },
        {
            string: "c",
            number: 47,
            boolean: true,
            null: null
        }
    ],
    object: {
        string: "a",
        number: 45,
        boolean: true,
        null: null,
        array: ["a", "b", "c"],
        complexArray: [
            {
                string: "a",
                number: 45,
                boolean: true,
                null: null
            },
            {
                string: "b",
                number: 46,
                boolean: true,
                null: null
            },
            {
                string: "c",
                number: 47,
                boolean: true,
                null: null
            }
        ],
        object: {
            string: "a",
            number: 45,
            boolean: true,
            null: null,
            array: ["a", "b", "c"],
            complexArray: [
                {
                    string: "a",
                    number: 45,
                    boolean: true,
                    null: null
                },
                {
                    string: "b",
                    number: 46,
                    boolean: true,
                    null: null
                },
                {
                    string: "c",
                    number: 47,
                    boolean: true,
                    null: null
                }
            ],
            object: {
                string: "a",
                number: 45,
                boolean: true,
                null: null
            }
        }
    }
};

describe("getProperty", () => {
    test("Check getPropery methods", () => {
        expect(getProperty(TestObject, "string")).toBe("a");
        expect(getProperty(TestObject, "array.0")).toBe("a");
        expect(getProperty(TestObject, "complexArray.0.string")).toBe("a");
        expect(getProperty(TestObject, "object.object.string")).toBe("a");
        
    });
});