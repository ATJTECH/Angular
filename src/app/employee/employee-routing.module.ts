import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EdashboardComponent } from './edashboard/edashboard.component';
import { ViewDetailsComponent } from './viewdetails/viewdetails.component';
import { CreateTravelRequestComponent } from './newrequest/newrequest.component';

const routes: Routes = [
  { path: 'edashboard', component: EdashboardComponent },
  { path: 'travel_request/:id', component: ViewDetailsComponent }, 
  { path: 'new-travelrequest',component: CreateTravelRequestComponent},
  { path: '**', redirectTo: 'dashboard' }  // Default route inside employee module
];

@NgModule({
  imports: [RouterModule.forChild(routes)],  // Use forChild() for feature modules
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
