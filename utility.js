function putInputValueById(inputField){
    const getInputValue = document.getElementById(inputField);
    const inputValue = parseFloat(getInputValue.value);
    getInputValue.value = '';
    return inputValue;
}

function putElementVlaueById(elementValue){
    const getInlinText = document.getElementById(elementValue);
    const inlineText = parseFloat(getInlinText.innerText);
    return inlineText;
}

function setTextElementById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}