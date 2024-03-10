let currentIndex = 0;

function changeStu() {
    fetch('./creators.json')
        .then(response => response.json())
        .then(students => {

            function updateStudent() {

                const mainInfo = document.getElementById("student-info")
                const currentStudent = students[currentIndex];

                mainInfo.innerHTML = `
                <img src="${currentStudent.imageUrl}" class="card-img-top" style="align-self: center;">
                <div class="card-body">
                    <h1 class="card-title">${currentStudent.name}</h1>
                    <p class="card-text">
                        <span style="font-weight: bold;">${currentStudent.email}</span><br>
                        ${currentStudent.bio}
                    </p>
                </div>
                `;
            }
            if (currentIndex == 0) {
                currentIndex = 1;
            }
            else {
                currentIndex = 0;
            }

            updateStudent();
        })
        .catch(error => console.error('Error:', error));
}