export default (object: any, ...keys: string[]) => {
    keys.map(key => {
        const { [key]: deletedKey, ...newObject } = object;
        object = newObject;
    });

    return object;
};
