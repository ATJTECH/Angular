import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/requestservice.service';

@Component({
  selector: 'app-edashboard',
  templateUrl: './edashboard.component.html',
  styleUrls: ['./edashboard.component.css']
})
export class EdashboardComponent implements OnInit {

  // Explicitly define the type of 'requests' as an array of any object
  requests: any[] = [];  // Holds the requests to display in the table

  constructor(private requestService: RequestService) {}

  ngOnInit(): void {
    // Call the service to fetch the data on component initialization
    this.fetchRequests();
  }

  // Fetch employee requests from the backend
  fetchRequests(): void {
    this.requestService.getEmployeeRequests().subscribe(
      (data: any[]) => {
        this.requests = data;  
        console.log(data)
      },
      (error) => {
        console.error('Error fetching requests:', error);
      }
    );
  }
}
