export declare function getProperty(object: TObjectType, path: string): any;
export declare function setProperty(object: TObjectType, path: string, value: any): void;
export declare function deleteProperty(object: TObjectType, path: string): void;
export declare function hasProperty(object: TObjectType, path: string): boolean;
export declare function deepIteration(object: TObjectType, callback: (path: string, value: any) => void): void;
export declare function deepKeys(object: TObjectType): string[];
declare type TObjectType = {
    [key: string]: any | any[];
};
export {};
