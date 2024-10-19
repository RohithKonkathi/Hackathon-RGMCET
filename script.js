document.addEventListener("DOMContentLoaded", function() {
    const teachers = {
        course1: [
            { id: 1, name: "Dr. Smith", rating: 4.5 },
            { id: 2, name: "Prof. Johnson", rating: 4.0 }
        ],
        course2: [
            { id: 3, name: "Dr. Lee", rating: 4.2 },
            { id: 4, name: "Dr. Brown", rating: 3.9 }
        ],
        course3: [
            { id: 1, name: "Dr. Smith", rating: 4.5 },
            { id: 3, name: "Dr. Lee", rating: 4.2 }
        ],
        course4: [
            { id: 2, name: "Prof. Johnson", rating: 4.0 },
            { id: 4, name: "Dr. Brown", rating: 3.9 }
        ],
        lab1: [
            { id: 1, name: "Dr. Smith", rating: 4.5 }
        ],
        lab2: [
            { id: 2, name: "Prof. Johnson", rating: 4.0 }
        ],
        lab3: [
            { id: 3, name: "Dr. Lee", rating: 4.2 }
        ]
    };

    const courseSelectors = document.querySelectorAll("select[id^='theory-course'], select[id^='lab-course']");
    const teachersDiv = document.getElementById("teachers");

    function updateTeachers() {
        teachersDiv.innerHTML = ""; // Clear previous teacher selections

        courseSelectors.forEach(selector => {
            const selectedCourse = selector.value;
            if (selectedCourse) {
                const availableTeachers = teachers[selectedCourse] || [];
                availableTeachers.forEach(teacher => {
                    const teacherDiv = document.createElement("div");
                    teacherDiv.innerHTML = `
                        <label>${teacher.name} (Rating: ${teacher.rating})</label>
                        <select class="teacher-select" data-teacher-id="${teacher.id}">
                            <option value="">Select Teacher</option>
                            <option value="${teacher.id}">${teacher.name}</option>
                        </select>
                    `;
                    teachersDiv.appendChild(teacherDiv);
                });
            }
        });
    }

    courseSelectors.forEach(selector => {
        selector.addEventListener("change", updateTeachers);
    });

    document.getElementById("course-selection-form").addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Courses and Teachers selected successfully!");
    });

    document.getElementById("submit-feedback").addEventListener("click", function() {
        const feedback = document.getElementById("feedback").value;
        if (feedback) {
            alert("Feedback submitted!");
            document.getElementById("feedback").value = '';
        } else {
            alert("Please enter feedback.");
        }
    });
});
