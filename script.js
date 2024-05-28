document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("myForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default form submission

        getFormValue(); // Call function to get form value
    });

    function getFormValue() {
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;

        // Concatenate first and last name
        const fullName = firstName + " " + lastName;

        // Display full name using alert
        alert(fullName);
    }
});
