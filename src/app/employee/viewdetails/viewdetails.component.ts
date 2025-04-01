import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  // To get the requestId from the route
import { RequestService } from '../../services/requestservice.service';  // Your request service

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewDetailsComponent implements OnInit {
  requestId: number = 0;  // Holds the ID of the request
  requestDetails: any = {};  // Holds the details of the specific travel request

  constructor(
    private route: ActivatedRoute,  // To access route params
    private requestService: RequestService  // To call the service
  ) {}

  ngOnInit(): void {
    // Get the requestId from the route parameter
    this.route.params.subscribe(params => {
      this.requestId = +params['id'];  // Convert the 'id' to a number
      this.fetchRequestDetails(this.requestId);  // Fetch the details using the requestId
    });
  }

  // Fetch the details of a particular travel request
  fetchRequestDetails(requestId: number): void {
    this.requestService.getTravelRequestById(requestId).subscribe(
      (data) => {
        this.requestDetails = data;  // Store the fetched data in the requestDetails object
      },
      (error) => {
        console.error('Error fetching request details:', error);
      }
    );
  }
}
