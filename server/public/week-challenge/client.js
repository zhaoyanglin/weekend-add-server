$(document).ready(onReady);



employeeArray = [];



function onReady() {
    console.log('onReady works');

    $('#submitButton').on('click', showingInput);
    $('#ogTable').on('click', '.deleteButton', deleteFunction);


};

function showingInput() {
    let employees = {
        firstNameInput: $('#firstNameInput').val(),
        lastNameInput: $('#lastNameInput').val(),
        idInput: $('#idInput').val(),
        titleInput: $('#titleInput').val(),
        annualSalaryInput: $('#annualSalaryInput').val()
    };
    $('#tableBody').append(`            
                <tr class='newTableRow'>
                <td class='firstNameData'> ${employees.firstNameInput}</td>
                <td class='lastNameData'>${employees.lastNameInput}</td>
                <td class='idData'>${employees.idInput}</td>
                <td class='titleData'>${employees.titleInput}</td>
                <td class='annualSalaryData'>${employees.annualSalaryInput}</td>
                <td class='button'><button              class="deleteButton">Delete</button></td>
                </tr>`);
    employeeArray.push(employees)
    console.log(employeeArray);

    $('input').val(null);
    addingSalary();
};

function addingSalary() {
    let totalMonthlySalary = 0;

    for (let i = 0; i < employeeArray.length; i++) {

        totalMonthlySalary += Number(employeeArray[i].annualSalaryInput/12)
        
        console.log(totalMonthlySalary);
}
    $('#totalSalaryAtP').replaceWith(`<p id='totalSalaryAtP'>Total Monthly Salary total:${totalMonthlySalary}</p>`)

    if (totalMonthlySalary > 20000) {
        $('#totalSalaryAtP').css('color', 'red')
    }
}

function deleteFunction() {
    $(this).closest('.newTableRow').empty()
}
