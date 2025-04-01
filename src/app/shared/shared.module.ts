import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ConditionComponent } from './condition/condition.component';
import { LogComponent } from './log/log.component';

@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    ConditionComponent,
    LogComponent
  ],
  exports: [
    NavComponent,
    FooterComponent,
    ConditionComponent,
    LogComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
