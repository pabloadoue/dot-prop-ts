"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepKeys = exports.deepIteration = exports.hasProperty = exports.deleteProperty = exports.setProperty = exports.getProperty = void 0;
function isObject(value) {
    var type = typeof value;
    return value !== null && (type === 'object' || type === 'function');
}
function getPropertyIterator(object, path, currentPath) {
    if (currentPath === void 0) { currentPath = ''; }
    var result = null;
    var found = false;
    if (Array.isArray(object)) {
        object.map(function (value, index) {
            var keyPath = currentPath.length > 0 ? "".concat(currentPath, ".").concat(index) : "".concat(index);
            if (keyPath === path) {
                result = value;
                found = true;
            }
            else {
                if (isObject(value) && !found) {
                    var childResult = getPropertyIterator(value, path, keyPath);
                    if (childResult.found) {
                        result = childResult.result;
                        found = true;
                    }
                }
            }
        });
    }
    else {
        for (var key in object) {
            var value = object[key];
            var keyPath = currentPath.length > 0 ? "".concat(currentPath, ".").concat(key) : key;
            if (keyPath === path) {
                found = true;
                result = value;
            }
            else {
                if (isObject(value) && !found) {
                    var childResult = getPropertyIterator(value, path, keyPath);
                    if (childResult.found) {
                        result = childResult.result;
                        found = true;
                    }
                }
            }
        }
    }
    return { result: result, found: found };
}
function setPropertyIterator(object, path, newValue, currentPath) {
    if (currentPath === void 0) { currentPath = ''; }
    if (Array.isArray(object)) {
        object.map(function (value, index) {
            var keyPath = currentPath.length > 0 ? "".concat(currentPath, ".").concat(index) : "".concat(index);
            if (keyPath === path) {
                object[index] = newValue;
            }
            else {
                if (isObject(value)) {
                    setPropertyIterator(value, path, newValue, keyPath);
                }
            }
        });
    }
    else {
        for (var key in object) {
            var value = object[key];
            var keyPath = currentPath.length > 0 ? "".concat(currentPath, ".").concat(key) : key;
            if (keyPath === path) {
                object[key] = newValue;
            }
            else {
                if (isObject(value)) {
                    setPropertyIterator(value, path, newValue, keyPath);
                }
            }
        }
    }
}
function deletePropertyIterator(object, path, currentPath) {
    if (currentPath === void 0) { currentPath = ''; }
    if (Array.isArray(object)) {
        object.map(function (value, index) {
            var keyPath = currentPath.length > 0 ? "".concat(currentPath, ".").concat(index) : "".concat(index);
            if (keyPath === path) {
                object.splice(index, 1);
            }
            else {
                if (isObject(value)) {
                    deletePropertyIterator(value, path, keyPath);
                }
            }
        });
    }
    else {
        for (var key in object) {
            var value = object[key];
            var keyPath = currentPath.length > 0 ? "".concat(currentPath, ".").concat(key) : key;
            if (keyPath === path) {
                delete object[key];
            }
            else {
                if (isObject(value)) {
                    deletePropertyIterator(value, path, keyPath);
                }
            }
        }
    }
}
function deepIterator(object, callback, currentPath) {
    if (currentPath === void 0) { currentPath = ''; }
    if (Array.isArray(object)) {
        object.map(function (value, index) {
            var keyPath = currentPath.length > 0 ? "".concat(currentPath, ".").concat(index) : "".concat(index);
            callback(keyPath, value);
            if (isObject(value)) {
                deepIterator(value, callback, keyPath);
            }
        });
    }
    else {
        for (var key in object) {
            var value = object[key];
            var keyPath = currentPath.length > 0 ? "".concat(currentPath, ".").concat(key) : key;
            callback(keyPath, value);
            if (isObject(value)) {
                deepIterator(value, callback, keyPath);
            }
        }
    }
}
function deepKeysIterator(object) {
    var result = [];
    if (Array.isArray(object)) {
        object.map(function (value, index) {
            result.push("".concat(index));
            if (isObject(value)) {
                var childKeys = deepKeysIterator(value);
                for (var _i = 0, childKeys_2 = childKeys; _i < childKeys_2.length; _i++) {
                    var childKey = childKeys_2[_i];
                    result.push("".concat(index, ".").concat(childKey));
                }
            }
        });
    }
    else {
        for (var key in object) {
            var value = object[key];
            result.push(key);
            if (isObject(value)) {
                var childKeys = deepKeysIterator(value);
                for (var _i = 0, childKeys_1 = childKeys; _i < childKeys_1.length; _i++) {
                    var childKey = childKeys_1[_i];
                    result.push("".concat(key, ".").concat(childKey));
                }
            }
        }
    }
    return result;
}
function getProperty(object, path) {
    var result = getPropertyIterator(object, path).result;
    return result;
}
exports.getProperty = getProperty;
function setProperty(object, path, value) {
    setPropertyIterator(object, path, value);
}
exports.setProperty = setProperty;
function deleteProperty(object, path) {
    deletePropertyIterator(object, path);
}
exports.deleteProperty = deleteProperty;
function hasProperty(object, path) {
    var result = deepKeysIterator(object);
    return result.includes(path);
}
exports.hasProperty = hasProperty;
function deepIteration(object, callback) {
    deepIterator(object, callback);
}
exports.deepIteration = deepIteration;
function deepKeys(object) {
    var result = deepKeysIterator(object);
    return result;
}
exports.deepKeys = deepKeys;
