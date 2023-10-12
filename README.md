# Hospital-Waiting-List-Program

A hospital waiting list simulation project that manages patient queues for three doctors. This project is designed to help manage patient queues efficiently, ensuring that patients are assigned to doctors based on availability and preferences, while dynamically tracking queues and doctor work speeds to prevent any doctor from running out of patients.


## Features

- Add patients to the waiting list.
- Patients can choose their preferred doctor or be assigned to any available doctor.
- The system tracks the time spent with each patient to calculate average doctor speeds.
- Patients can be dynamically moved to the fastest doctor's queue.
- The system optimizes the allocation of patients based on the doctor's availability.
- Patients are allocated to doctors to ensure no doctor runs out of patients.
- The waiting list is visually displayed in a user-friendly manner.

## Usage

1. Clone the repository to your local machine.
2. Open the `index.html` file in your web browser.
3. Add patients by entering their name and selecting a doctor from the dropdown.
4. Observe the waiting list tables for Dr. Lee, Dr. Smith, and Dr. Williams.
5. Patients are automatically assigned to the fastest available doctor while ensuring a balanced distribution.

# Simulation

The project simulates doctors completing patients' appointments. Doctors finish with patients based on randomized intervals, simulating real-world scenarios. Patients' times are recorded to determine average doctor speeds.

# Dynamic Tracking

The project dynamically allocates patients to doctors to ensure a balanced distribution. If the fastest doctor is about to run out of patients, patients from slower doctors with "any" preference are moved to the fastest doctor's queue. In the event that a slower doctor runs out of patients, they are assigned two patients from the doctor with the most patients.

# Design

The project is designed with a clean and user-friendly interface. It displays the waiting list for each doctor, highlights the next patient, and allows you to interact with the system by adding patients and observing the allocation logic.

## Preview

![image](https://github.com/dimicodes/Hospital-Waiting-List-Program/assets/45632694/d1c68471-c41e-48ff-93c5-ea9d941e4a8b)
