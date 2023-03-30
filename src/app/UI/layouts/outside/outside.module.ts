import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { OutsideComponent } from './outside.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../../components/login/login.component';



@NgModule({
  declarations: [OutsideComponent, LoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OutsideModule { }
