function calculateAge() {
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    const ageResult = document.getElementById('ageResult');

    if (day === '' || month === '' || year === '') {
        ageResult.innerHTML = "Please enter all values!";
        return;
    }

    const today = new Date();
    const birthDate = new Date(year, month - 1, day);

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    // Adjust if the birthday hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    ageResult.innerHTML = `You are ${age} years old.`;
}
