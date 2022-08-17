import { deepKeys } from '../src/index';
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

describe("Deep Keys Function", () => {
    test("Extract all keys", () => {
        const keys = deepKeys(TestObject);
        expect(keys.length).toBe(79);
        expect(keys[0]).toBe("string");
        expect(keys[1]).toBe("number");
        expect(keys[2]).toBe("boolean");
        expect(keys[3]).toBe("null");
        expect(keys[4]).toBe("array");
        expect(keys[5]).toBe("array.0");
        expect(keys[6]).toBe("array.1");
        expect(keys[7]).toBe("array.2");
        expect(keys[8]).toBe("complexArray");
        expect(keys[9]).toBe("complexArray.0");
        expect(keys[10]).toBe("complexArray.0.string");
        

    });
});