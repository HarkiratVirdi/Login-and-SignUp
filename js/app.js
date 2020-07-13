const SUBMIT = document.querySelector('.button--primary');
const EMAIL = document.querySelector('input[type=email]');
const INPUTS = document.querySelectorAll('.form__group input');
const ERRORS = document.querySelectorAll('.error');
const LABELS = document.querySelectorAll('.form__group label');


function checkRequired(inputs)
{
    inputs.forEach(input => {
       if(input.value === '')
       {    
        showError(getFieldNames(input.type),`${getFieldNames(input.type)} is required`);
       }
    });
}

function showError(input, message)
{
    ERRORS.forEach(error => {
        error.innerHTML = message;
    });
}


function getFieldNames(elem)
{
    return elem.slice(0, 1).toUpperCase() + elem.slice(1).toLowerCase();
}



SUBMIT.addEventListener('click', function()
{
    checkRequired(INPUTS);
})