function calculateChange(amountDue, amountReceived) {
    var amountDue = document.getElementById('amount-due').value;
    var amountReceived = document.getElementById('amount-received').value;
    var changeDue = amountReceived - amountDue;
    var dollarsDue = Math.floor(changeDue);
    var centsDue = ((changeDue - dollarsDue) * 100).toFixed(0);
    document.getElementById('dollars-output').innerText = `$${dollarsDue}`;
    document.getElementById('cents-due').innerText = `${centsDue}¢`;
    if (centsDue > 0) {
        calculateCents(centsDue);
    }
}

function calculateCents(centsDue) {
    var remaining = centsDue;

    var calcQuarter = Math.floor(remaining/25);
    document.getElementById('quarters-output').innerText = `Quarters: ${calcQuarter}`;
		remaining = remaining%25;

    var calcDime = Math.floor(remaining/10);
    document.getElementById('dimes-output').innerText = `Dimes: ${calcDime}`;
		remaining = remaining%10;

    var calcNickel = Math.floor(remaining/5);
    document.getElementById('nickels-output').innerText = `Nickles: ${calcNickel}`;
		remaining = remaining%5;

    var calcPenny = Math.floor(remaining/1);
    document.getElementById('pennies-output').innerText = `Pennies: ${calcPenny}`;
    }
       