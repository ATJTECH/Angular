import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  
  private apiUrl = 'http://127.0.0.1:8000/employee/dashboard/';  // Adjust to match your Django API URL
  private singleRequestUrl = 'http://127.0.0.1:8000/employee/travel_request'; 
  private createRequestUrl= 'http://127.0.0.1:8000/employee/travel_request/';
  constructor(private http: HttpClient) { }

  // Method to get the employee's requests
  getEmployeeRequests(): Observable<any> {
    const token = localStorage.getItem('auth_token');  // Get the token from localStorage

    if (!token) {
      console.error('No token found');
      // Handle the case where token is missing (you might want to redirect to login)
      return new Observable(); // Return an empty observable or handle the error
    }


    // Send the token with the correct "Token " prefix
    const headers = new HttpHeaders({
      'Authorization': 'Token ' + token  // The correct format for Token authentication
    });

    return this.http.get(this.apiUrl, { headers });
  }
  getTravelRequestById(requestId: number): Observable<any> {
    const token = localStorage.getItem('auth_token');
    if (!token) {
      console.error('No token found');
      return new Observable(); // Return an empty observable or handle the error
    }

    const headers = new HttpHeaders({
      'Authorization': 'Token ' + token
    });

    return this.http.get(`${this.singleRequestUrl}/${requestId}/`, { headers });
  }
  createTravelRequest(requestData: any): Observable<any> {
    const token = localStorage.getItem('auth_token');
    if (!token) {
      console.error('No token found');
      return new Observable(); // Return an empty observable or handle the error
    }

    const headers = new HttpHeaders({
      'Authorization': 'Token ' + token
    });

    return this.http.post(this.createRequestUrl, requestData, { headers });
  }
}
