export function revertString (str) {

    let revertedString = '';

    for (let i = str.length - 1; i >= 0; i--) {
        
        revertedString += str[i];
    }

    return revertedString;
}