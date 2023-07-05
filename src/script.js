const passwordInput = document.getElementById("password-input");
const lengthItem = document.getElementById("length");
const numberItem = document.getElementById("number");
const lowercaseItem = document.getElementById("lowercase");
const uppercaseItem = document.getElementById("uppercase");
const symbolItem = document.getElementById("symbol");
const requirements = {
    minimumLengthRegex: /.{8,}/,
    minimumNumbersRegex: /[0-9]/,
    minimumLowercaseCharactersRegex: /[a-z]/,
    minimumUppercaseCharactersRegex: /[A-Z]/,
    minimumSpecialSymbolRegex: /[^A-Za-z0-9]/
};

passwordInput.addEventListener("keyup", passwordInputListener);

function passwordInputListener() {
    const results = checkAllRequirements(passwordInput.value);
    highlightValidRequirements(results);
}

function highlightValidRequirements(results) {
    if (results.minLength) {
        lengthItem.style.color = "green";
    } else {
        lengthItem.style.color = "black";
    }

    if (results.number) {
        numberItem.style.color = "green";
    } else {
        numberItem.style.color = "black";
    }

    if (results.lower) {
        lowercaseItem.style.color = "green";
    } else {
        lowercaseItem.style.color = "black";
    }

    if (results.upper) {
        uppercaseItem.style.color = "green";
    } else {
        uppercaseItem.style.color = "black";
    }

    if (results.symbol) {
        symbolItem.style.color = "green";
    } else {
        symbolItem.style.color = "black";
    }
}

function checkAllRequirements(password) {
    return {
        minLength: checkMinimumLengthRequirement(password),
        number: checkMinimumNumbersRequirement(password),
        lower: checkMinimumLowercaseCharactersRequirement(password),
        upper: checkMinimumUppercaseCharactersRequirement(password),
        symbol: checkMinimumSpecialSymbolsRequirement(password)
    }
}

function checkMinimumLengthRequirement(string) {
    return requirements.minimumLengthRegex.test(string);
}

function checkMinimumNumbersRequirement(string) {
    return requirements.minimumNumbersRegex.test(string);
}

function checkMinimumLowercaseCharactersRequirement(string) {
    return requirements.minimumLowercaseCharactersRegex.test(string);
}

function checkMinimumUppercaseCharactersRequirement(string) {
    return requirements.minimumUppercaseCharactersRegex.test(string);
}

function checkMinimumSpecialSymbolsRequirement(string) {
    return requirements.minimumSpecialSymbolRegex.test(string);
}
