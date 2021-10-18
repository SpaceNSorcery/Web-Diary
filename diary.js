const recordList = document.querySelector('#recordList');

//Get diary from local storage
function getDiaryFromLocalStorage() {
    if(localStorage.getItem('diary') == null) {
        return [];
    } else {
        return JSON.parse(localStorage.getItem('diary'));
    }
}

// Handle window load event
function handleLoad() {
    // Call "get diary from local storage" function
    const diary = getDiaryFromLocalStorage();

    if(diary.length == 0) {
        recordList.innerHTML = '<h2 class="notFound heading">No Records Found</h2>';
    } else {
        //Execute a function for each element or item of diary array
        diary.forEach(function (record) {
            recordList.innerHTML += `
            <li id="${record.id}">
            <h2 class="heading">${record.title} <button class="Btn">X</button></h2>
            <time class="date">${record.createdAt}</time>
            <p>${record.content}</p>
            <hr />
            </li>
            `;
        });
    }
}

//Add load event listener to the window
window.addEventListener('DOMContentLoaded', handleLoad);

//Add click event listener to the record list

recordList.addEventListener('click', function (event){
    const elementClicked = event.target;
    if(elementClicked.classList.contains('Btn')) {
        // Gets grandparent of the delete button
        const recordItem = elementClicked.parentElement.parentElement;

        const diary = getDiaryFromLocalStorage()
        const updatedDiary = []

        //Execute a function for each element or item of diary array
        diary.forEach(function (record){
            if(record.id != recordItem.id) {
                updatedDiary.push(record)
            }
        })

        // Re-saves diary array to local storage
        localStorage.setItem('diary', JSON.stringify(updatedDiary))

        // Remove record item in the HTML
        recordItem.remove();

        if(recordList.children.length == 0) {
            recordList.innerHTML = '<h2 class="notFound heading">No Records Found</h2>';
        }
    }
});