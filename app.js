function palindrome(str) {
    var newStr = str.toLowerCase();
    var match;
    const regExp = new RegExp('[A-Za-z0-9]', 'g');
    match = newStr.match(regExp);

    var reverseArr = [];

    for (let i = match.length - 1; i >= 0; i--) {
        reverseArr.push(match[i]);
    }

    if (reverseArr.toString() == match.toString()) {
        return true;
    } else {
        return false;
    }
}

palindrome("1 eye for of 1 eye.");