import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/requestservice.service';  // Import the RequestService
import { Router } from '@angular/router';  // For redirecting after successful submission
import { FormGroup, FormBuilder, Validators } from '@angular/forms';  // Import Reactive Forms classes

@Component({
  selector: 'app-createtravelrequest',
  templateUrl: './newrequest.component.html',
  styleUrls: ['./newrequest.component.css']
})
export class CreateTravelRequestComponent implements OnInit {

  travelRequestForm!: FormGroup;  // Declare FormGroup variable

  constructor(
    private requestService: RequestService, 
    private router: Router, 
    private fb: FormBuilder  // Inject FormBuilder
  ) {}

  ngOnInit(): void {
    // Initialize the form with FormBuilder
    this.travelRequestForm = this.fb.group({
      from_location: ['', Validators.required],
      to_location: ['', Validators.required],
      travel_from: ['', Validators.required],
      travel_to: ['', Validators.required],
      preferred_mode_of_travel: ['', Validators.required],
      is_lodging_required: [false],
      preferred_lodge: [''],
      purpose_of_travel: ['', Validators.required]
    });
  }

  // Method to submit the travel request form
  submitTravelRequest(): void {
    if (this.travelRequestForm.invalid) {
      return;  // If the form is invalid, do not proceed
    }

    // Send the form data to the service
    this.requestService.createTravelRequest(this.travelRequestForm.value).subscribe(
      (response) => {
        console.log('Travel request created successfully:', response);
        // Redirect to dashboard or success page after successful creation
        this.router.navigate(['/employee/edashboard']);
      },
      (error) => {
        console.error('Error creating travel request:', error);
      }
    );
  }
}
