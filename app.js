let palindrome = (str) => {
    let match = str.toLowerCase().match(/[a-z0-9]/g);

    return match.join('') == match.reverse().join('');
}

palindrome("1 eye for of 1 eye.");