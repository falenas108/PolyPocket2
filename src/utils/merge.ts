const deepmerge = require('deepmerge');

export default (...objects: any[]): any => {
    console.log(objects);
    return deepmerge.all(objects);
};
