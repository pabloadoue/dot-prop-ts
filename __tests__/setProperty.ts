import { setProperty } from '../src/index';
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

describe("setProperty", () => {
    test("Check setProperty methods", () => {
        setProperty(TestObject, "string", "b");
        expect(TestObject.string).toBe("b");

        setProperty(TestObject, "array.1", "hello");
        expect(TestObject.array[1]).toBe("hello");

        setProperty(TestObject, "complexArray.1.string", null);
        expect(TestObject.complexArray[1].string).toBe(null);

        setProperty(TestObject, "object.object.complexArray.0.number", 69);
        expect(TestObject.object.object.complexArray[0].number).toBe(69);
    });
});