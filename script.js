// Sample data
var drLee = [
    { name: "John S", value: "any" },
    { name: "Mary F", value: "drLee" },
    { name: "Jacob J", value: "drLee" },
    { name: "Samantha R", value: "any" },
    { name: "Carlos A", value: "any" },
    { name: "Robert W", value: "drLee" },
    { name: "Cynthia L", value: "drLee" },
    { name: "Sam T", value: "any" },
    { name: "Doug T", value: "any" },
    { name: "John J", value: "drLee" },
  ];

var drSmith = [
    { name: "Jane S", value: "any" },
    { name: "Jack D", value: "drLee" },
    { name: "Jake O", value: "drLee" },
    { name: "Kelly R", value: "any" },
    { name: "Carl D", value: "any" },
    { name: "Tanner W", value: "drLee" },
    { name: "Yonda P", value: "drLee" },
    { name: "Red D", value: "any" },
    { name: "Danny W", value: "any" },
    { name: "Jon P", value: "drLee" },
    { name: "Tommy S", value: "any" },
    { name: "Lauren I", value: "any" },
    { name: "Fred S", value: "drLee" },
];
var drWilliams = [
    { name: "Daniel A", value: "any" },
    { name: "Andrew F", value: "drLee" },
    { name: "Carla S", value: "drLee" },
    { name: "Sammy A", value: "any" },
    { name: "Shaquinta P", value: "any" },
    { name: "Kevin Q", value: "drLee" },
    { name: "Holly U", value: "drLee" },
];



// Track time spent with the last three patients for each doctor
// to get average doctor speed per patient
var timeSpentWithPatients = {
    drLee: [],
    drSmith: [],
    drWilliams: [],
  };


//drLee is the default fastest doctor
let fastestDoctor = "drLee";
//this accesses the fast doctor's average patient time with the last 5 patients
let fastestDoctorList;




// Gets the patient list of the fastest doctor
(function fastestDoctorConversion() {
    if (fastestDoctor === "drLee") {
        fastestDoctorList = drLee;
    } else if (fastestDoctor === "drSmith") {
        fastestDoctorList = drSmith;
    } else if (fastestDoctor === "drWilliams") {
        fastestDoctorList = drWilliams;
    }
})();




// Function to add a patient to the waiting list
function addToWaitingList() {
    var patientName = document.getElementById("patientName").value;
    var doctorChoice = document.getElementById("doctorChoice").value;

    var patient = { name: patientName, value: doctorChoice, startTime: new Date() }; // Capture the start time

    // Check the length of each doctor's list
    var leeLength = drLee.length;
    var smithLength = drSmith.length;
    var williamsLength = drWilliams.length;

    // Logic for how new patients are added to the appropriate queues
    fastestDoctorConversion();
    if (doctorChoice === "any" && fastestDoctorList.length <= 12) {
        fastestDoctorList.push(patient);
    } else if (doctorChoice === "drLee" || (doctorChoice === "any" && leeLength <= smithLength && leeLength <= williamsLength)) {
        drLee.push(patient);
    } else if (doctorChoice === "drSmith" || (doctorChoice === "any" && smithLength <= leeLength && smithLength <= williamsLength)) {
        drSmith.push(patient);
    } else if (doctorChoice === "drWilliams" || (doctorChoice === "any" && williamsLength <= leeLength && williamsLength <= smithLength)) {
        drWilliams.push(patient);
    } else if (doctorChoice === "any") {
        if (fastestDoctorList.length >= 16) {
            if (leeLength <= smithLength && leeLength <= williamsLength) {
                drLee.push(patient);
            } else if (smithLength <= williamsLength && smithLength <= leeLength) {
                drSmith.push(patient);
            } else if (williamsLength <= leeLength && williamsLength <= smithLength) {
                drWilliams.push(patient);
            }
        } else {
            fastestDoctorList.push(patient);
        }
    }

    updateWaitingList();
}

  


// Function to update the waiting list table
function updateWaitingList() {
    var tableLee = document.getElementById("waiting-list-lee");
    var tableSmith = document.getElementById("waiting-list-smith");
    var tableWilliams = document.getElementById("waiting-list-williams");

    var tbodyLee = tableLee.getElementsByTagName("tbody")[0];
    var tbodySmith = tableSmith.getElementsByTagName("tbody")[0];
    var tbodyWilliams = tableWilliams.getElementsByTagName("tbody")[0];

    tbodyLee.innerHTML = "";
    tbodySmith.innerHTML = "";
    tbodyWilliams.innerHTML = "";

  
    for (var i = 0; i < 20; i++) {
      var rowLee = tbodyLee.insertRow(i);
      var cell1Lee = rowLee.insertCell(0);
      var cell2Lee = rowLee.insertCell(1);

      var rowSmith = tbodySmith.insertRow(i);
      var cell1Smith = rowSmith.insertCell(0);
      var cell2Smith = rowSmith.insertCell(1);

      var rowWilliams = tbodyWilliams.insertRow(i);
      var cell1Williams = rowWilliams.insertCell(0);
      var cell2Williams = rowWilliams.insertCell(1);
  
      if (i < drLee.length) {
        if (i === 0){
            cell1Lee.innerHTML = i + 1;
            cell2Lee.innerHTML = drLee[i].name;
            cell2Lee.className = "top-name";
        } else {
        cell1Lee.innerHTML = i + 1;
        cell2Lee.innerHTML = drLee[i].name;
        }
    }

      if (i < drSmith.length) {
        if (i === 0){
            cell1Smith.innerHTML = i + 1;
            cell2Smith.innerHTML = drSmith[i].name;
            cell2Smith.className = "top-name";
        } else {
        cell1Smith.innerHTML = i + 1;
        cell2Smith.innerHTML = drSmith[i].name;
      }
    }

      if (i < drWilliams.length) {
        if (i === 0){
            cell1Williams.innerHTML = i + 1;
            cell2Williams.innerHTML = drWilliams[i].name;
            cell2Williams.className = "top-name";
        } else {
        cell1Williams.innerHTML = i + 1;
        cell2Williams.innerHTML = drSmith[i].name;
      }
    }
  }

}





// Function to remove the top patient from the waiting list
function removeTopPatient(doctor, doctorName) {
    if (doctor.length > 0) {
        doctor.shift();

        // gets doctor's time average only from last 5 patients
        if (timeSpentWithPatients[doctorName].length > 5) {
            timeSpentWithPatients[doctorName].shift();
        }

        if (timeSpentWithPatients[doctorName].length === 5) {
            var total = timeSpentWithPatients[doctorName].reduce((acc, time) => acc + time, 0);
            var averageTime = total / 5;

            // Update fastestDoctor if this doctor is faster
            if (averageTime < timeSpentWithPatients[fastestDoctor].reduce((acc, time) => acc + time, 0) / 5) {
                fastestDoctor = doctorName;
                console.log(`fastest doctor is ${fastestDoctor} `);
                console.log(`drLee: average time: ${timeSpentWithPatients["drLee"].reduce((acc, time) => acc + time, 0) / 5} `);
                console.log(`drSmith: average time: ${timeSpentWithPatients["drSmith"].reduce((acc, time) => acc + time, 0) / 5} `);
                console.log(`drWilliams: average time: ${timeSpentWithPatients["drWilliams"].reduce((acc, time) => acc + time, 0) / 5} `);        
            }
        }



    // If fastest doctor is about to run out of patients, put the people next in line 
    // with slower doctors (with "any" preference), into the line of fastest doctor

    // Check the length of each doctor's list
    let leeLength = drLee.length;
    let smithLength = drSmith.length;
    let williamsLength = drWilliams.length;

    if (fastestDoctorList.length <= 2 && (doctor.length >= 4)) {
        let patientsMoved = 0;
        for (let i = 0; i < doctor.length && patientsMoved <= 3; i++){
            if (doctor[i].value === "any"){
                // Push patients with "any" preference to the fastest doctor's list
                fastestDoctorList.push(doctor[i]);
                doctor.splice(i, 1); // Remove the patient from  doctor
                patientsMoved++;
                i--; // Decrement i to account for the removed patient
            }
        }
    }


    // if a slower doctor runs out of patients, give him 2 patients from the doctor with the most patients
    if (doctor.length <= 1) {
        let busiestDoctor;
        let patientsMovedToSlowest = 0;
        if (leeLength >= smithLength && leeLength >= williamsLength){
            busiestDoctor = drLee;
        } else if (smithLength >= williamsLength && smithLength >= leeLength){
            busiestDoctor = drSmith;
        } else if (williamsLength >= leeLength && williamsLength >= smithLength){
            busiestDoctor = drWilliams;
        }
        if (busiestDoctor && busiestDoctor.length > 0) {
            for (let i = 0; busiestDoctor.length && patientsMovedToSlowest < 2; i++){
                if (busiestDoctor[i].value === "any"){
                    // Push patients with "any" preference to the fastest doctor's list
                    doctor.push(busiestDoctor[i]);
                    busiestDoctor.splice(i, 1); // Remove the patient
                    patientsMovedToSlowest++;
                    i--; // Decrement i to account for the removed patient
                }
            }
        }


    }
        updateWaitingList();
    }
  }
  



// Function to simulate the doctor finishing with a patient
function simulateDoctor(doctor, doctorName) {
    var interval = Math.floor(Math.random() * (20000 - 3000 + 1) + 3000); // Random time between 3 and 20 seconds
    timeSpentWithPatients[doctorName].push(interval); // Log the interval time

    var doctorTimer = setInterval(function () {
        removeTopPatient(doctor, doctorName);
        clearInterval(doctorTimer); // Clear the interval to wait for the next random time
        simulateDoctor(doctor, doctorName); // Start the process again
    }, interval);
}
  


// Start the simulation when the page loads
simulateDoctor(drLee, "drLee");
simulateDoctor(drSmith, "drSmith");
simulateDoctor(drWilliams, "drWilliams");

document.getElementById("addPatientButton").addEventListener("click", addToWaitingList);

// Initialize the waiting list table
updateWaitingList();


