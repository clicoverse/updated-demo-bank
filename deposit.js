document.getElementById('btn-deposit').addEventListener('click', function(){
    const currentDeposit = putInputValueById('deposit-field');
    const previousDeposit = putElementVlaueById('deposit-total');
    updatedDeposite = previousDeposit + currentDeposit;
    setTextElementById('deposit-total', updatedDeposite);
    const totalDeposit = putElementVlaueById('balace-total');
    updatedTotalDeposit = totalDeposit + currentDeposit;
    setTextElementById('balace-total', updatedTotalDeposit);
})