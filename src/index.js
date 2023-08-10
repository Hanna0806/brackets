module.exports = function check(str, bracketsConfig) {
    let bracketsObj = {};

    for (let i = 0; i < bracketsConfig.length; i++) {
        for (let j = 0; j < bracketsConfig[i].length; j++) {
            if (bracketsObj[bracketsConfig[i][j]] === undefined) {
                bracketsObj[bracketsConfig[i][j]] = 0;
            } else {
                delete bracketsObj[bracketsConfig[i][j]];
            }
        }
    }

    for (let k = 0; k < str.length; k++) {
        if (bracketsObj[str[k]] !== undefined) {
            let bracketsObjKeys = Object.keys(bracketsObj);
            let index = bracketsObjKeys.indexOf(str[k]);

            if (index % 2 === 0) {
                let closeBracket = bracketsObjKeys[index + 1];

                if (bracketsObj[str[k]] < bracketsObj[closeBracket]) {
                    return false
                }

                if (str[k + 2] !== undefined && str[k + 2] === closeBracket && str[k + 1] !== closeBracket && str[k + 1] !== str[k]) {
                    return false;
                }
            }

            bracketsObj[str[k]]++;
        }
    }

    if (Object.values(bracketsObj).length % 2 === 0) {
        for (let l = 0; l < Object.values(bracketsObj).length; l++) {
            if (l % 2 === 0) {
                if (Object.values(bracketsObj)[l] !== Object.values(bracketsObj)[l + 1]) {
                    return false;
                }
            }
        }
    }

    return true
}