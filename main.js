const firstRow = 'Slow and steady wins the race';
const secondRow = 'You can say that again';

function countLetters(row, letter) {
    let count = 0;
    for (let i = 0; i < row.length; i++) {
        if (row.charAt(i).toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }
    return count;
}

function getRow(firstRow, secondRow, letter) {
    const firstCount = countLetters(firstRow, letter);
    const secondCount = countLetters(secondRow, letter);

    if (firstCount > secondCount) {
        return firstRow;
    } else {
        return secondRow;
    }
}

document.getElementById('letter-count').addEventListener('click', function () {
    const letter = prompt("Enter the letter to count:");
    const result = getRow(firstRow, secondRow, letter);
    alert(`The row with more "${letter}" letters is: "${result}"`);
});

function formattedPhone(phone) {
    let cleanPhone = phone.replace(/[^0-9]/g, '');

    if (cleanPhone.length === 10 && cleanPhone.startsWith('0')) {
        cleanPhone = '38' + cleanPhone;
    } else if (cleanPhone.length === 11 && cleanPhone.startsWith('8')) {
        cleanPhone = '3' + cleanPhone;
    }

    if (cleanPhone.length !== 12 || !cleanPhone.startsWith('38')) {
        return 'Неправильний формат номера телефону';
    }

    const countryCode = '+38';
    const operatorCode = cleanPhone.slice(2, 5);
    const firstPart = cleanPhone.slice(5, 8);
    const secondPart = cleanPhone.slice(8, 10);
    const thirdPart = cleanPhone.slice(10);

    return `${countryCode} (${operatorCode}) ${firstPart}-${secondPart}-${thirdPart}`;
}

document.getElementById('phone-format').addEventListener('click', function () {
    const phone = prompt("Enter the phone number:");
    const formatted = formattedPhone(phone);
    alert(formatted);
});
