import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EdashboardComponent } from './edashboard/edashboard.component';
import { NavComponent } from '../shared/nav/nav.component';
import { ViewDetailsComponent } from './viewdetails/viewdetails.component';
import { CreateTravelRequestComponent } from './newrequest/newrequest.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { FooterComponent } from '../shared/footer/footer.component';

@NgModule({
  declarations: [
    EdashboardComponent,
    NavComponent,
    ViewDetailsComponent,
    CreateTravelRequestComponent,
    FooterComponent
    
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class EmployeeModule { }
