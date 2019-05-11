const deepmerge = require('deepmerge');

export default (...objects: any[]): any => {
    const mergeObjects = objects.filter(object => object);
    return deepmerge.all(mergeObjects);
};
