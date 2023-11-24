//ELIUD MARIERIE  SCT211-0094/2022
//ASBEL KIBET ROTICH  SCT211-0087/2022
//MOSES MUIRURI NJAU  SCT211-0002/2022
//KABUTHI JOHN MUTISYA  SCT211-0055/2022


document.addEventListener("DOMContentLoaded", function () {
    // Query for the submit button and input task field
    var submit = document.getElementById("submit");
    var newTask = document.getElementById("task");
    var tasksList = document.getElementById("tasks");
  
    // Disable the submit button by default
    submit.disabled = true;
  
    // Listen for input to be typed into the input field
    newTask.addEventListener("input", function () {
      // Enable/disable the submit button based on input field value
      submit.disabled = !newTask.value.trim();
    });
  
    // Listen for submission of form
    document.querySelector("form").addEventListener("submit", function (event) {
      // Prevent the default submission of the form
      event.preventDefault();
  
      // Find the task the user just submitted
      var taskValue = newTask.value.trim();
  
      if (taskValue !== "") {
        // Create a list item for the new task and add the task to it
        var listItem = document.createElement("li");
        listItem.textContent = taskValue;
  
        // Add new element to our unordered list
        tasksList.appendChild(listItem);
  
        // Clear the input field
        newTask.value = "";
  
        // Disable the submit button again
        submit.disabled = true;
      }

    });
    //This prevents the default submission of
//the form which involves either reloading the current page or redirecting to a new one.
return false;
  });
  