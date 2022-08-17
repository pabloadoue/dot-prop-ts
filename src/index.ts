function isObject(value: any) {
  const type = typeof value;
  return value !== null && (type === 'object' || type === 'function');
}

function getPropertyIterator(
  object: TObjectType | any[],
  path: string,
  currentPath = ''
): any {
  let result: any = null;
  let found = false;

  if (Array.isArray(object)) {
    object.map((value, index) => {
      const keyPath =
        currentPath.length > 0 ? `${currentPath}.${index}` : `${index}`;
      if (keyPath === path) {
        result = value;
        found = true;
      } else {
        if (isObject(value) && !found) {
          const childResult = getPropertyIterator(value, path, keyPath);
          if (childResult.found) {
            result = childResult.result;
            found = true;
          }
        }
      }
    });
  } else {
    for (const key in object) {
      const value = object[key];
      const keyPath = currentPath.length > 0 ? `${currentPath}.${key}` : key;
      if (keyPath === path) {
        found = true;
        result = value;
      } else {
        if (isObject(value) && !found) {
          const childResult = getPropertyIterator(value, path, keyPath);
          if (childResult.found) {
            result = childResult.result;
            found = true;
          }
        }
      }
    }
  }
  return { result, found };
}

function setPropertyIterator(
  object: TObjectType | any[],
  path: string,
  newValue: any,
  currentPath = ''
) {
  if (Array.isArray(object)) {
    object.map((value, index) => {
      const keyPath =
        currentPath.length > 0 ? `${currentPath}.${index}` : `${index}`;
      if (keyPath === path) {
        object[index] = newValue;
      } else {
        if (isObject(value)) {
          setPropertyIterator(value, path, newValue, keyPath);
        }
      }
    });
  } else {
    for (const key in object) {
      const value = object[key];
      const keyPath = currentPath.length > 0 ? `${currentPath}.${key}` : key;
      if (keyPath === path) {
        object[key] = newValue;
      } else {
        if (isObject(value)) {
          setPropertyIterator(value, path, newValue, keyPath);
        }
      }
    }
  }
}

function deletePropertyIterator(
  object: TObjectType | any[],
  path: string,
  currentPath = ''
) {
  if (Array.isArray(object)) {
    object.map((value, index) => {
      const keyPath =
        currentPath.length > 0 ? `${currentPath}.${index}` : `${index}`;
      if (keyPath === path) {
        object.splice(index, 1);
      } else {
        if (isObject(value)) {
          deletePropertyIterator(value, path, keyPath);
        }
      }
    });
  } else {
    for (const key in object) {
      const value = object[key];
      const keyPath = currentPath.length > 0 ? `${currentPath}.${key}` : key;
      if (keyPath === path) {
        delete object[key];
      } else {
        if (isObject(value)) {
          deletePropertyIterator(value, path, keyPath);
        }
      }
    }
  }
}

function deepIterator(
  object: TObjectType | any[],
  callback: (path: string, value: any) => void,
  currentPath = ''
) {
  if (Array.isArray(object)) {
    object.map((value, index) => {
      const keyPath =
        currentPath.length > 0 ? `${currentPath}.${index}` : `${index}`;
      callback(keyPath, value);
      if (isObject(value)) {
        deepIterator(value, callback, keyPath);
      }
    });
  } else {
    for (const key in object) {
      const value = object[key];
      const keyPath = currentPath.length > 0 ? `${currentPath}.${key}` : key;
      callback(keyPath, value);
      if (isObject(value)) {
        deepIterator(value, callback, keyPath);
      }
    }
  }
}

function deepKeysIterator(object: TObjectType | any[]) {
  const result: string[] = [];
  if (Array.isArray(object)) {
    object.map((value, index) => {
      result.push(`${index}`);
      if (isObject(value)) {
        const childKeys = deepKeysIterator(value);
        for (const childKey of childKeys) {
          result.push(`${index}.${childKey}`);
        }
      }
    });
  } else {
    for (const key in object) {
      const value = object[key];
      result.push(key);
      if (isObject(value)) {
        const childKeys = deepKeysIterator(value);
        for (const childKey of childKeys) {
          result.push(`${key}.${childKey}`);
        }
      }
    }
  }
  return result;
}

export function getProperty(object: TObjectType, path: string) {
  const { result } = getPropertyIterator(object, path);
  return result;
}

export function setProperty(object: TObjectType, path: string, value: any) {
  setPropertyIterator(object, path, value);
}

export function deleteProperty(object: TObjectType, path: string) {
  deletePropertyIterator(object, path);
}

export function hasProperty(object: TObjectType, path: string) {
  const result: string[] = deepKeysIterator(object);
  return result.includes(path);
}

export function deepIteration(
  object: TObjectType,
  callback: (path: string, value: any) => void
) {
  deepIterator(object, callback);
}

export function deepKeys(object: TObjectType) {
  const result: string[] = deepKeysIterator(object);
  return result;
}

type TObjectType = {
  [key: string]: any | any[];
};
