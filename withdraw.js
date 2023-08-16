document.getElementById('btn-withdraw').addEventListener('click', function(){
    const currentWithdraw = putInputValueById('withdraw-field');
    const previousWithdraw = putElementVlaueById('withdraw-total');
    updatedWithdraw = currentWithdraw + previousWithdraw;
    setTextElementById('withdraw-total', updatedWithdraw);
    const totalWithdraw = putElementVlaueById('balace-total');
    updatedWithdawBalance = totalWithdraw - currentWithdraw;
    setTextElementById('balace-total', updatedWithdawBalance);
})