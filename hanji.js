const addRecordForm = document.querySelector('#addRecordForm')
const recordTitle = document.querySelector('.titleInput');
const datePicker = document.querySelector('.datePicker');
const recordContent = document.querySelector('.contentArea');

//Get diary from local storage
function getDiaryFromLocalStorage() {
    if(localStorage.getItem('diary') == null) {
        return [];
    } else {
        return JSON.parse(localStorage.getItem('diary'));
    }
}

// Handle form submit event
function handleSubmit(event) {
    // Prevent unwanted page refresh
    event.preventDefault();

    // Validate user input values 
    if (
        recordTitle.value == '' || 
        datePicker.value == '' || 
        recordContent.value == ''
    ) {
        // Show an alert box
        alert('All fields are required');
    } else {
        // Call "get diary from local storage" function
        const diary = getDiaryFromLocalStorage();

        // Insert element at the end of the diary array
        diary.push({
            id: 'date${Date.now()}',
            title: recordTitle.value,
            createdAt: datePicker.value,
            content: recordContent.value
        });

        localStorage.setItem('diary', JSON.stringify(diary));

        // CLear user input values
        recordTitle.value = '';
        datePicker.value = '';
        recordContent.value = '';

        // Show an alert box
        alert ('Added to diary successfully');
    }
}

// Add submit event listener to add record form
addRecordForm.addEventListener('submit', handleSubmit);

var r_text = new Array ();
r_text[0] = "";
r_text[1] = "";
r_text[2] = "";
r_text[3] = "";
r_text[4] = "";
r_text[5] = "";
r_text[6] = "";
Math.random();

document.write();
