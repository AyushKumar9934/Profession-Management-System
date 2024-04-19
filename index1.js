let name1 = document.getElementById("name");
let age = document.getElementById("age");
let profession = document.getElementById("profession");
let Employeedev = document.getElementById("Employee");
console.log("this is java script");

let arr = [];
let Id = 0;
function generateId() {
  // Create a static variable to store the next ID.

  // Return the next ID and increment it.
  return (Id += 1);
}

// Create an array of elements.

// Add some elements to the array.
function showEmployee() {
  Employeedev.innerHTML = "";
  arr.forEach((ele) => {
    console.log("inside for loop")
    Employeedev.innerHTML += `
      <div>
      <div class="p-3 mb-2 bg-success text-white" id="${ele.id}"><p>id:${ele.id},name:${ele.name1.vlaue},profession:${ele.profession.value},age:${ele.age.value}</p> <button  class="btn btn-secondary pull-right" id="btn" onclick="removeEmployee(${ele.id})">Remove</button> </div>
      
      </div>
      
      `;
  });
}


function showSuccess(){
  var successMessage = document.getElementById("successMessage");
  successMessage.style.display = "block"; // Show the message
  // Optionally, you can hide the message after a certain duration
  setTimeout(function() {
    successMessage.style.display = "none"; // Hide the message after 3 seconds
  }, 1000); // Adjust the duration as needed (in milliseconds)


}
function AddEmployee(event) {
  event.preventDefault();
  showSuccess();
  arr.push({
    id: generateId(),
    name1: name1.value,
    age: age.value,
    profession: profession.value,
  });
  showEmployee();
}
function removeEmployee(id) {
  console.log("inside the removeEmployee");
  console.log(id);
 arr=arr.filter((ele)=>ele.id!=id);
console.log(arr);
  
  showEmployee();
}
document.getElementById("submit").addEventListener("click", AddEmployee, false);

// Log the elements to the console.
