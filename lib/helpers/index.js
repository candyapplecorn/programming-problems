const deepCopy = object => {
    if (typeof object !== 'object') {
        return object;
    }

    return Object.keys(object).reduce((acc, e) => {
        return {
            ...acc,
            [e]: deepCopy(object[e])
        }
    }, {});
};

const flatten = list => {
    if (Array.isArray(list) && list.length > 1) {
        const [first, ...rest] = list;
        return [...flatten(first), ...flatten(rest)];
    } else if (Array.isArray(list) && list.length === 1) {
        return [...flatten(list[0])]
    }
    return [list];
};

function recurseToObject(struct, cb) {
    if (Array.isArray(struct)) {
        return struct.map(st => recurseToObject(st, cb));
    } else {
        return cb(struct);
    }
}

module.exports = {
    deepCopy,
    flatten,
    recurseToObject
};
