import { deleteProperty } from '../src/index';
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

describe("deleteProperty", () => {
    test("Check deleteProperty methods", () => {
        deleteProperty(TestObject, "string");
        expect(TestObject.string).toBe(undefined);

        deleteProperty(TestObject, "array.1");
        expect(TestObject.array.length).toBe(2);

        deleteProperty(TestObject, "complexArray.1.number");
        expect(TestObject.complexArray[1].number).toBe(undefined);
    });
});