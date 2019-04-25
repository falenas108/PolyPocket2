const deepmerge = require('deepmerge');

export default (...objects: any[]): any => {
    return deepmerge.all(objects);
};
